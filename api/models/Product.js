var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ProductSchema = new Schema({
  product_name: {
    type: String,
    required: true
  },
  product_image: {
    // data: Buffer,
    //contentType: String,
    type: String,
    required: true
  },
  Date: {
    type: Date,
    default: Date.now
  },
  product_category_id: [{ type: Schema.Types.ObjectId, ref: "category" }]
});

module.exports = mongoose.model("Products", ProductSchema);
