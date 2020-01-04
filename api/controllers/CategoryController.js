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

router.put("/list/:id", async (req, res, next) => {
  var objId = new ObjectId(req.params.id);

  category.findOneAndUpdate(
    { _id: objId },
    { cat_name: req.body.cat_name },
    { upsert: true, new: true, runValidators: true, setDefaultsOnInsert: true },
    function(err, category) {
      if (err) {
        return res.json({
          message: "Updation of group failed",
          errors: err.errors,
          status: 500
        });
      }
      return res.json({ message: "Updated successfully", status: 200 });
    }
  );
});

module.exports = router;
