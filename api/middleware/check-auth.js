const jwt = require("jsonwebtoken");
const key = require("../config/keys");

module.exports = (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization.split(" ")[1],
      key.secretORKey
    );
    req.userData = decode;
    next();
  } catch (error) {
    return res.status(401).json({ status: 400, message: "Login again" });
  }
};
