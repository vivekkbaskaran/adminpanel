const express = require("express");
const router = express.Router();
const Category = require("../../models/Category");
const checkAuth = require("../../middleware/check-auth");
const checkAdmin = require("../../middleware/check-role");

router.get("/list", checkAuth, checkAdmin("admin"), (req, res) => {
  Category.find()
    .then(categroy => {
      res.json({ status: 200, data: categroy });
    })
    .catch(err => console.log(err));
});

router.get("/list/:id", checkAuth, checkAdmin("admin"), (req, res) => {
  Category.findOne({ _id: req.params.id })
    .then(categroy => {
      res.json({ status: 200, data: categroy });
    })
    .catch(err => console.log(err));
});

router.put("/list/:id", checkAuth, checkAdmin("admin"), (req, res) => {
  Category.findById({ _id: req.params.id }, (err, categroy) => {
    if (!categroy) {
      res.json({ status: 400, msg: "Category not found" });
    }

    categroy.modified_date = new Date();
    categroy.catgory_name = req.body.catgory_name;

    categroy
      .save()
      .then(() => {
        res.json({ status: 200, msg: "Category is updated successfully" });
      })
      .catch(err => {
        if (err.errors) {
          res.json({ status: 400, errors: err.errors });
        }
      });
  });
});
module.exports = router;
