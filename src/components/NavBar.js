import React, { Component } from "react";
import "./NavBar.css";
import logo from "../img/logoHG.png";

function NavBar() {
  if (window.pageYOffset >= 1) {
    return (
      <div className="NavBar-container show">
        <div className="NavBar">
          <img src={logo} className="logo-nav" />
        </div>
      </div>
    );
  }
  return (
    <div className="NavBar-container">
      <div className="NavBar">
        <img src={logo} className="logo-nav" />
      </div>
    </div>
  );
}
export default NavBar;
