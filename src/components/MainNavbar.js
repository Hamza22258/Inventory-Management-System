import React, { Component } from "react";
export class MainNavbar extends Component {
  render() {
    return (
      <div>
        <div className="Inventory">
          <ul>
            <li>
              <h1>Inventory MIS</h1>
            </li>
            <li>
              <a href="/Dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/SearchItem">Availability</a>
            </li>
            <li>
              <a href="/Login">In Stock</a>
            </li>
            
            <li>
              <a href="/Gallery">Gallery</a>
            </li>
            <li>
              <a href="/Login">Store</a>
            </li>
            <li >
              <a href="/SignUp">Sign Up</a>
            </li>
            <li >
              <a href="/Login">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainNavbar;
