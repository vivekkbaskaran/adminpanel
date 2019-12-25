const mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose
  .connect("mongodb://localhost/ecommerce", {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("failed connected to database");
  });
