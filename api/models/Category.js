var mongoose = require("mongoose");
const Schema = mongoose.Schema;

var categorySchema = new Schema({
  cat_name: {
    type: String,
    required: [true, "category name is required"]
  },
  _id: { type: mongoose.Schema.Types.ObjectId }
});
categorySchema.pre("findOneAndUpdate", function(next) {
  this.options.runValidators = true;
  next();
});

module.exports = mongoose.model("category", categorySchema);
