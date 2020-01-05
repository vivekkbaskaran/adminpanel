const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var SubCategorySchema = new Schema({
  subcatgory_name: {
    type: String,
    required: [true, "subcategory name is required"]
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "category id is required"]
  },
  modified_date: {
    type: Date
  }
});

module.exports = mongoose.model("SubCategories", SubCategorySchema);
