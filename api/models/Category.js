var mongoose = require("mongoose");

var category = new mongoose.Schema({
  cat_name: String,
  _id: { type: mongoose.Schema.Types.ObjectId }
});

module.exports = mongoose.model("category", category);
