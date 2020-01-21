const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  product_name: {
    type: String,
    required: [true, "Product name is required"]
  },
  product_image: {
    type: String,
    required: [true, "Product image is required"]
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "category is required"]
  },
  subcategory_id: {
    type: Schema.Types.ObjectId,
    ref: "Subcategory",
    required: [true, "Subcategory is required"]
  },
  modified_date: {
    type: Date
  },
  is_active: {
    type: Boolean,
    default: 1
  }
});

module.exports = mongoose.model("Products", ProductSchema);
