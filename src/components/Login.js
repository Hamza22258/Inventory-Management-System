import React, { useEffect, useState, Component } from "react";
import axios from "axios";
import { Alert } from "reactstrap";

var cond = 0;
var items = [];
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      array: [],
    };
  }

  submitted = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:5000/Customer_ADD/fetch")
      .then((res) => (this.state.array = res.data))
      .catch(function (error) {
        console.log(error);
      });
    let result = Array.from(this.state.array);
    console.log(result);
    var flag = 0;
    result.forEach((element) => {
      if (
        element.name == this.state.username &&
        element.password == this.state.password
      ) {
        flag = 1;
      }
    });
    if (this.state.username === "admin" && this.state.password === "admin") {
      window.location.href = "/Stock";
    } else if (flag == 1) {
      window.location.href = "/Store";
    } else {
      alert("Incorrect Credentials!!");
    }
  };

  render() {
    return (
      <form action="index.html" class="login-form" onSubmit={this.submitted}>
        <h1>Login</h1>

        <div class="txtb">
          <h3>Username</h3>
          <input
            type="text"
            onChange={(e) => (this.state.username = e.target.value)}
          ></input>
        </div>
        <div class="txtb">
          <h3>Password</h3>
          <input
            type="password"
            onChange={(e) => (this.state.password = e.target.value)}
          ></input>
        </div>

        <input type="submit" class="logbtn" value="Login"></input>
      </form>
    );
  }
}
export default Login;
