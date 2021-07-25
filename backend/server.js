const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://umar_ali:umar@cluster0.ictsa.mongodb.net/Inventory?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connection to DB Successfull")
);
const Stock_CRUD = require("./routes/Stock_CRUD");
app.use("/Stock_CRUD", Stock_CRUD);
const Customer_ADD = require("./routes/Customer_ADD");
app.use("/Customer_ADD", Customer_ADD);
const Order_ADD = require("./routes/Order_ADD");
app.use("/Order_ADD", Order_ADD);
app.listen(port, () => console.log(`Listening on port ${port}`));
