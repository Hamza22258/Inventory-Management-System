import React, { useEffect, useState, Component } from "react";
import axios from "axios";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  submitted = (e) => {
    e.preventDefault();

    if (this.state.username != "" && this.state.password != "") {
      axios
        .post("http://localhost:5000/Customer_ADD/insert", this.state)
        .then((res) => console.log(res.data));
      window.location.href = "/Dashboard";
    } else {
      alert("Enter All Entries!!");
    }
  };

  render() {
    return (
      <form action="index.html" class="login-form" onSubmit={this.submitted}>
        <h1>Create Account</h1>

        <div class="txtb">
          <h3>Username</h3>
          <input
            type="text"
            onChange={(e) => (this.state.username = e.target.value)}
          ></input>
        </div>
        <div class="txtb">
          <h3>Create Password</h3>
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
export default SignUp;
