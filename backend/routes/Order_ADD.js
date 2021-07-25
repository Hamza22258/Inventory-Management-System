const Orders = require("../models/Order");
const router = require("express").Router();
// Items Array
var customers = [];
Orders.find().then((customerFound) => (customers = customerFound));
var count = customers.length + 1;

//Routes
router.post("/insert", async (req, res) => {
  console.log("Inserted");
  var newItem = new Orders({
    address: req.body.address,
    postalCode: req.body.postalCode,
    city: req.body.city,
    country: req.body.city,
  });
  newItem.save();
  Orders.find().then((customerFound) => (customers = customerFound));
  count = customers.length;
});

//Routes
router.get("/fetch", function (req, res) {
  console.log("Fetched");
  Customers.find().then((itemFound) => (customers = itemFound));

  count = customers.length;
  res.send(customers);
});

module.exports = router;
