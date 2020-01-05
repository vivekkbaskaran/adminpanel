const express = require("express");
const router = express.Router();
const SubCategory = require("../../models/SubCategory");
const checkAuth = require("../../middleware/check-auth");
const checkAdmin = require("../../middleware/check-role");

router.post("/add", checkAuth, checkAdmin("admin"), (req, res) => {
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
  SubCategory.find()
    .select("_id, subcatgory_name")
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
  SubCategory.findById({ _id: req.params.id }, (err, subcategory) => {
    if (!subcategory)
      return res.json({ status: 400, msg: "Category not found" });
    subcategory.modified_date = new Date();
    subcategory.subcatgory_name = req.body.subcatgory_name;
    subcategory.category_id = req.body.category_id;

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
