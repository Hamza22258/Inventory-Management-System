const Items = require("../models/Items");
const router = require("express").Router();
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

const fileFilter = (req, file, cb) => {
    //Reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
const upload = multer({
    storage: storage,
    limits: {
        filesize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter

});
// Items Array
var items = [];
Items.find().then((itemFound) => (items = itemFound));
var count = items.length + 1;

//Routes
router.post("/insert", async (req, res) => {
  if (items.length <= 0) {
    req.body.iid = count;
  } else {
    count += 1;
    req.body.iid = count;
  }
  console.log("Inserted");
  var newItem = new Items({
    iid: req.body.iid,
    title: req.body.title,
    description: req.body.description,
    qty: req.body.qty,
    price: req.body.price,
  });
  newItem.save();
  Items.find().then((itemFound) => (items = itemFound));
  count = items.length;
});
router.post("/del", async (req, res) => {
  // await Items.remove({ _id: req.body._id });
  await Items.deleteOne({ _id: req.body._id });
  console.log("Deleted");
  Items.find().then((itemFound) => (items = itemFound));
  count = items.length;
});

router.post("/update", function (req, res) {
  Items.find().then((itemFound) => (items = itemFound));
  count = items.length;
  Items.findById(req.body._id).then((foundItems) => {
    foundItems.title = req.body.title;
    foundItems.description = req.body.description;
    foundItems.qty = req.body.qty;
    foundItems.price = req.body.price;
    foundItems.save();
  });
  items.forEach(function (item) {
    if (item.iid === req.body.iid) {
      item.title = req.body.title;
      item.description = req.body.description;
      item.qty = req.body.qty;
      item.price = req.body.price;
    }
  });
  console.log("Updated");
});

router.get("/fetch", function (req, res) {
  Items.find().then((itemFound) => (items = itemFound));
  count = items.length;
  res.send(items);
});
router.post("/search", function (req, res) {
  Items.find().then((itemFound) => (items = itemFound));
  count = items.length;
  console.log("Searched");
  items.forEach(function (item) {
    if (req.body.item_name.toLowerCase() === item.title.toLowerCase()) {
      res.send(item);
    }
  });
});

module.exports = router;
