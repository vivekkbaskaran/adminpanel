var express = require("express");
var router = express.Router();

var book_controller = require("../controllers/LoginController");

// Home page route.
router.get("/", function(req, res) {
  res.send("Wiki home page");
});

// About page route.
router.get("/about", function(req, res) {
  res.send("About this wiki");
});

module.exports = router;
