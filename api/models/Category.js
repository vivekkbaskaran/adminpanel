const mongoose = require("mongoose");

var CategorySchema = new mongoose.Schema({
  catgory_name: {
    type: String,
    required: [true, "Catgory name is required"]
  },
  modified_date: {
    type: Date
  }
});

module.exports = mongoose.model("Category", CategorySchema);
