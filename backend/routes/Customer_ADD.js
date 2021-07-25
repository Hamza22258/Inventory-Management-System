const Customers = require("../models/Customer");
const router = require("express").Router();
// Items Array
var customers = [];
Customers.find().then((customerFound) => (customers = customerFound));
var count = customers.length + 1;

//Routes
router.post("/insert", async (req, res) => {
  console.log("Inserted");
  var newItem = new Customers({
    name: req.body.username,
    password: req.body.password,
  });
  newItem.save();
  Customers.find().then((customerFound) => (customers = customerFound));
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
