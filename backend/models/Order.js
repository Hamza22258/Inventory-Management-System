const mongoose = require("mongoose");
const OrderSchema = mongoose.Schema({
  address: String,
  city: String,
  postalCode: String,
  country: String,
});
module.exports = mongoose.model("Orders", OrderSchema);
