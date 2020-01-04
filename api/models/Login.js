var mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

var LoginSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  tokens: [
    {
      token: {
        type: String
      }
    }
  ],
  isActive: {
    type: Boolean,
    default: true
  },
  created_date: { type: Date, default: Date.now() },
  updated_date: { type: Date, default: Date.now() }
});

LoginSchema.methods.newAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user.id.toString() }, "vivek", {
    expiresIn: "7 days"
  });
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

module.exports = mongoose.model("Logins", LoginSchema); // here Logins is collection name
