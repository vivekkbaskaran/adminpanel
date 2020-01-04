const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");
var validator = require("validator");
var multer = require("multer");
app.set("secretKey", "nodeRestApi"); // jwt secret token
app.use(cors());
app.options("*", cors());

const port = 5000;
var db = require("./db/mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const LoginController = require("./controllers/LoginController");
const CategoryController = require("./controllers/CategoryController");
const ProductController = require("./controllers/ProductController");
app.use("/user", LoginController);
app.use("/category", CategoryController);
app.use("/product", ProductController);

// var Storage = multer.diskStorage({
//     destination: function(req, file, callback) {
//         callback(null, "./Images");
//     },
//     filename: function(req, file, callback) {
//         callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
//     }
// });

// var upload = multer({
//     storage: Storage
// }).array("imgUploader", 3); //Field name and max count
// upload(req, res, function(err) {
//          if (err) {
//              return res.end("Something went wrong!");
//          }
//          return res.end("File uploaded sucessfully!.");
//      });
app.listen(port, () => console.log("Example app listening on port " + port));
