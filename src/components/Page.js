import React, { Component } from "react";
import Home from "../Home/containers/home";
import NavBar from "./NavBar";
import Servicios from "../Servicios/containers/Servicios";
import Contacto from "../Contacto/containers/Contacto";
import Footer from "../Footer/containers/Footer";

class Page extends Component {
  render() {
    return (
      <div className="Page">
        <NavBar />
        <Home />
        <Servicios />
        <Contacto />
        <Footer />
      </div>
    );
  }
}
export default Page;
