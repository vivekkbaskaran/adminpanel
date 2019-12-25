var express = require("express");
var router = express.Router();
var category = require("../models/Category");
var ObjectId = require("mongoose").Types.ObjectId;

router.get("/list", async (req, res) => {
  const categories = await category.find();
  res.status(200).json(categories);
});

router.get("/list/:id", async (req, res) => {
  var objId = new ObjectId(req.params.id);
  const cat = await category.find({ _id: objId });
  res.status(200).json(cat);
});

router.put("/list/:id", async (req, res) => {
  console.log("req.body");
  console.log(req.body);
  var objId = new ObjectId(req.params.id);
  const cat = await category.updateOne(
    { _id: objId },
    { cat_name: req.body.cat_name }
  );
  if (cat.ok == 1) {
    res.status(200).json({ message: "Updated successfully", status: 200 });
  } else {
    res.status(201).json({ message: "Updated failed", status: 201 });
  }
});

module.exports = router;
