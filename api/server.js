const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");
app.set("secretKey", "nodeRestApi"); // jwt secret token
app.use(cors());
app.options("*", cors());

const port = 5000;
var db = require("./db/mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const LoginController = require("./controllers/LoginController");
const CategoryController = require("./controllers/CategoryController");
app.use("/user", LoginController);
app.use("/category", CategoryController);

app.listen(port, () => console.log("Example app listening on port " + port));
