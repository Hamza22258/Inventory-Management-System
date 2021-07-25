const mongoose = require("mongoose");
const CustomerSchema = mongoose.Schema({
  name: String,
  password: String,
});
module.exports = mongoose.model("Customer", CustomerSchema);
