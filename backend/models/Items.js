const mongoose = require("mongoose");
const ItemSchema = mongoose.Schema({
  iid: String,
  title: String,
  description: String,
  qty: String,
  price: String,
});
module.exports = mongoose.model("Items", ItemSchema);
