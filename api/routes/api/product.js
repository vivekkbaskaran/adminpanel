const express = require("express");
const router = express.Router();
var multer = require("multer");
const SubCategory = require("../../models/SubCategory");
const Category = require("../../models/Category");
const products = require("../../models/Product");
const fs = require("fs");
var async = require("async");
const path = "./public/uploads/";
const mongoose = require("mongoose");
mongoose.set("debug", true);
const ObjectId = mongoose.Types.ObjectId;

var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, path);
  },
  filename: function(req, file, callback) {
    callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post("/add", upload.single("product_image"), (req, res, next) => {
  if (req.body.category_id) {
    Category.findById({ _id: req.body.category_id }, (err, category) => {
      if (!category)
        return res.json({ status: 400, msg: "Category is not found" });
    });
  }
  if (req.body.subcategory_id) {
    SubCategory.findById(
      { _id: req.body.subcategory_id },
      (err, subcategory) => {
        if (!subcategory)
          return res.json({ status: 400, msg: "Subcategory is not found" });
      }
    );
  }
  let imagepath = "";
  if (req.file && req.file != "undefined") {
    imagepath = req.file.path;
  }
  const product = new products({
    product_image: imagepath,
    ...req.body
  });
  product
    .save()
    .then(product => {
      res.json({
        status: 200,
        msg: "Product is added successfully",
        data: product
      });
    })
    .catch(err => {
      let errors = {};
      Object.keys(err.errors).forEach(function(key) {
        errors[key] = err.errors[key].message;
      });
      res.json({ status: 400, errors });
    });
});

router.get("/list", (req, res, next) => {
  products
    .aggregate([
      {
        $match: {
          is_active: true
        }
      },
      {
        $lookup: {
          from: "subcategories",
          localField: "subcategory_id",
          foreignField: "_id",
          as: "subcategories"
        }
      },
      {
        $unwind: "$subcategories"
      },
      {
        $match: {
          "subcategories.is_active": true
        }
      },
      {
        $lookup: {
          from: "categories",
          localField: "category_id",
          foreignField: "_id",
          as: "category"
        }
      },
      {
        $addFields: {
          category: {
            $arrayElemAt: ["$category", 0]
          }
        }
      }
    ])
    .then(products => res.json({ status: 200, data: products }))
    .catch(err => res.status(500).json(err));
});

router.get("/list/:id", (req, res, next) => {
  console.log(req.params.id);
  products
    .aggregate([
      {
        $match: {
          _id: ObjectId(req.params.id),
          is_active: true
        }
      },
      {
        $lookup: {
          from: "subcategories",
          localField: "subcategory_id",
          foreignField: "_id",
          as: "subcategories"
        }
      },
      {
        $unwind: "$subcategories"
      },
      {
        $match: {
          "subcategories.is_active": true
        }
      },
      {
        $lookup: {
          from: "categories",
          localField: "category_id",
          foreignField: "_id",
          as: "category"
        }
      },
      {
        $addFields: {
          category: {
            $arrayElemAt: ["$category", 0]
          }
        }
      }
    ])
    .then(products => res.json({ status: 200, data: products }))
    .catch(err => res.status(500).json(err));
});

router.put("/list/:id", upload.single("product_image"), (req, res, next) => {
  products.findById({ _id: req.params.id }, (err, product) => {
    if (!product) return res.json({ status: 400, msg: "Product is not found" });
    if (!product.is_active && req.body.is_active == 0) {
      return res.json({ status: 400, msg: "Product is not activated" });
    }

    if (req.body.category_id) {
      Category.findById({ _id: req.body.category_id }, (err, category) => {
        if (!category)
          return res.json({ status: 400, msg: "Category is not found" });
      });
    }
    if (req.body.subcategory_id) {
      SubCategory.findById(
        { _id: req.body.subcategory_id },
        (err, subcategory) => {
          if (!subcategory)
            return res.json({ status: 400, msg: "Subcategory is not found" });
          if (!subcategory.is_active && req.body.is_active === 0)
            return res.json({
              status: 400,
              msg: "Subcategory is not activated"
            });
        }
      );
    }
    product.modified_date = new Date();
    product.product_name = req.body.product_name;
    product.subcategory_id = req.body.subcategory_id;
    product.category_id = req.body.category_id;
    let imagepath = product.product_image;
    if (req.file && req.file != "undefined") {
      product.product_image = req.file.path;
    }
    product
      .save()
      .then(product => {
        console.log(imagepath);
        if (imagepath && imagepath != "undefined") {
          fs.unlinkSync(imagepath);
        }
        res.json({
          status: 200,
          msg: "Product is updated successfully",
          data: product
        });
      })
      .catch(err => {
        let errors = {};
        Object.keys(err.errors).forEach(function(key) {
          errors[key] = err.errors[key].message;
        });
        res.json({ status: 400, errors });
      });
  });
});

module.exports = router;
