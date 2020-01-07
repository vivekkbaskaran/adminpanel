const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Routes
const users = require("./routes/api/users");
const category = require("./routes/api/category");
const subcategory = require("./routes/api/subcategory");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const DB = require("./config/keys").mongoURI;

mongoose
  .connect(DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Mongodb connected successfully"))
  .catch(err => console.log("Mongodb not connected" + err));

// Routes for controllers
app.use("/api/users", users);
app.use("/api/category", category);
app.use("/api/subcategory", subcategory);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
