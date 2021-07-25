import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
//pages
import Dashboard from "../src/components/Dashboard";
import Stock from "../src/components/Stock";
import Order from "../src/components/Order";
import MainNavbar from "../src/components/MainNavbar";
import GalleryIm from "../src/components/GalleryIm";
import SearchItem from "../src/components/SearchItem";
import Login from "../src/components/Login";
import Store from "../src/components/Store";
import Shipment from "../src/components/Delivery";
import SignUp from "../src/components/SignUp";
import Items from "../src/components/Slideshow/slideshow";
import Footer from "../src/components/footer";
import background from "../src/background.jpg";
class App extends Component {
  render() {
    return (
      <div >
        <MainNavbar />
        <Router>
          <Route exact path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Order">
            <Order />
          </Route>
          <Route path="/Gallery">
            <GalleryIm />
          </Route>
          <Route path="/SearchItem">
            <SearchItem />
          </Route>
          <Route path="/Stock">
            <Stock />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Store">
            <Store />
          </Route>
          <Route path="/Delivery">
            <Shipment />
          </Route>
        </Router>
        <Footer/>
      </div>
    );
  }
}
export default App;
