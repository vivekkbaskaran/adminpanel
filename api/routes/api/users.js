const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = require("../../config/keys");
const router = express.Router();

const ValidateRegisterInput = require("../../validation/Registration");
const ValidateLoginInput = require("../../validation/login");

const User = require("../../models/User");

const checkAuth = require("../../middleware/check-auth");
const checkAdmin = require("../../middleware/check-role");

router.post("/register", (req, res) => {
  const { errors, isValid } = ValidateRegisterInput(req.body);
  if (!isValid) {
    return res.json({ status: 400, errors });
  }
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = "email already exists";
        return res.json({ status: 400, errors });
      } else {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role
        });
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => res.json(err));
          });
        });
      }
    })
    .catch(err => console.log(err));
});

router.post("/login", (req, res) => {
  const { errors, isValid } = ValidateLoginInput(req.body);
  if (!isValid) {
    return res.json({ status: 400, errors });
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User not found";
      return res.json({ status: 404, errors });
    }
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user._id,
          username: user.username,
          role: user.role
        };
        jwt.sign(
          payload,
          key.secretORKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              status: 200,
              token: "Bearer " + token
            });
          }
        );
        //res.json({ msg: "Success" });
      } else {
        errors.password = "Password incorrect";

        return res.json({ status: 404, errors });
      }
    });
  });
});

router.get("/current", checkAuth, (req, res) => {
  res.json({
    id: req.user._id,
    name: req.user.username,
    email: req.user.email
  });
});

module.exports = router;
