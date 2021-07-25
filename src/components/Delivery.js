import React, { useEffect, useState, Component } from "react";
import axios from "axios";

const saveShipping = "CART_SAVE_SHIPPING";

class Shipment extends Component  {
  
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      city: "",
      country:"",
      postalCode:"",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.address != "" && this.state.city != "" && this.state.postalCode != "" && this.state.country != "") {
      axios
        .post("http://localhost:5000/Order_ADD/insert", this.state)
        .then((res) => console.log(res.data));
        window.location.href = "/Order"
    } else {
      alert("Enter All Entries!!");
    }
  };
  render(){
  return (
    <form action="index.html" class="login-form" onSubmit={this.handleSubmit}>
      <h1>Shipment Details</h1>
      <div class="txtb">
        <label>
          Address:
          <input
            name="address"
            type="text"
            onChange={(e) => this.state.address=e.target.value}
            required
          />
        </label>
      </div>
      <div class="txtb">
        <label>
          City:
          <input
            name="city"
            type="text"
            onChange={(e) => this.state.city=e.target.value}
            required
          />
        </label>
      </div>
      <div class="txtb">
        <label>
          Postal Code:
          <input
            name="postalCode"
            type="text"
            onChange={(e) => this.state.postalCode=e.target.value}
            required
          />
        </label>
      </div>
      <div class="txtb">
        <label>
          Country:
          <input
            name="country"
            type="text"
            onChange={(e) =>this.state.country=e.target.value}
            required
          />
        </label>
      </div>
     
      <input type="submit" class="logbtn" value="Order"></input>
    </form>
  );}
}
export default Shipment;
