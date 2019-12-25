var express = require("express");
var router = express.Router();
var UserModel = require("../models/Login");

router.post("/login", function(req, res, next) {
  UserModel.findOne({ username: req.body.username }, function(err, user) {
    if (err) return next(err);
    if (!user) {
      res.json({ status: 201, message: "User not found", data: [] });
    }
    res.json({ status: 200, message: "User logged In", data: user });
  });
});

router.post("/register", function(req, res, next) {
  //   {
  //     "username":"admin@gmail.com",
  //     "password":"123456"
  //     }
  var user = new UserModel(req.body);
  user.save(function(err, user) {
    if (err) return next(err);
    const token = user.generateAuthToken();
    (async () => {
      res.status(201).send({ user, token });
    })();

    //res.json(user);
  });
});

module.exports = router;
