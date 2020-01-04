var express = require("express");
var router = express.Router();
var products = require("../models/Product");
var ObjectId = require("mongoose").Types.ObjectId;
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, "./public/uploads/");
  },
  filename: function(req, file, callback) {
    callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.get("/list", async (req, res) => {
  const Products = await products.find();
  res.status(200).json(Products);
});

router.post("/add", upload.single("product_image"), async (req, res, next) => {
  //console.log(req.file.path);
  const product = new products({
    product_image: req.file.path,
    ...req.body
  });
  product.save(function(err, product) {
    if (err) return console.log(err);
    console.log(product);
  });
});

module.exports = router;
