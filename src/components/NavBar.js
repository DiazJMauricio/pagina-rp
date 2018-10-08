import React, { Component } from "react";
import "./NavBar.css";
import logo from "../img/logoHG.png";

class NavBar extends Component {
  render() {
    this.props.changeShow();
    return (
      <div className={this.props.show}>
        <div className="NavBar">
          <img src={logo} className="logo-nav" alt="Logo" />
        </div>
      </div>
    );
  }
}
export default NavBar;
