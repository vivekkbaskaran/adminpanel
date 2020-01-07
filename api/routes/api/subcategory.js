const express = require("express");
const router = express.Router();
const SubCategory = require("../../models/SubCategory");
const Category = require("../../models/Category");
const checkAuth = require("../../middleware/check-auth");
const checkAdmin = require("../../middleware/check-role");

router.post("/add", checkAuth, checkAdmin("admin"), (req, res) => {
  Category.findById({ _id: req.body.category_id }, (err, category) => {
    if (!category) return res.json({ status: 400, msg: "Category not found" });
  });

  const subcategory = new SubCategory({
    subcatgory_name: req.body.subcatgory_name,
    category_id: req.body.category_id,
    modified_date: new Date()
  });
  subcategory
    .save()
    .then(data => {
      res.json({
        status: 200,
        msg: "Subcategory is added successfully",
        data
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
router.get("/list", checkAuth, checkAdmin("admin"), (req, res) => {
  SubCategory.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "category_id",
        foreignField: "_id",
        as: "categories"
      }
    },
    { $unwind: "$categories" },
    {
      $project: {
        subcatgory_name: 1,
        _id: 1,
        catgory_name: "$categories.catgory_name",
        category_id: 1
      }
    }
  ])
    .then(data => {
      res.json({ status: 200, data });
    })
    .catch(err => res.json({ status: 400, err }));
});
router.get("/list/:id", checkAuth, checkAdmin("admin"), (req, res) => {
  SubCategory.findOne({ _id: req.params.id })
    .select("_id, subcatgory_name")
    .then(data => {
      res.json({ status: 200, data });
    })
    .catch(err => res.json({ status: 400, err }));
});

router.put("/list/:id", checkAuth, checkAdmin("admin"), (req, res) => {
  Category.findById({ _id: req.body.category_id }, (err, category) => {
    if (!category) return res.json({ status: 400, msg: "Category not found" });
  });
  SubCategory.findById({ _id: req.params.id }, (err, subcategory) => {
    if (!subcategory)
      return res.json({ status: 400, msg: "Subcategory not found" });
    if (!subcategory.is_active && req.body.is_active === 0)
      return res.json({ status: 400, msg: "Subcategory is not activated" });
    subcategory.modified_date = new Date();
    subcategory.subcatgory_name = req.body.subcatgory_name;
    subcategory.category_id = req.body.category_id;
    subcategory.is_active = req.body.is_active == 1 ? req.body.is_active : 0;

    subcategory
      .save()
      .then(() => {
        res.json({
          status: 200,
          msg: "Sub category is updated successfully"
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
