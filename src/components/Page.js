import React, { Component } from "react";
import Home from "../Home/containers/home";
import NavBar from "./NavBar";
import Servicios from "../Servicios/containers/Servicios";
import Contacto from "../Contacto/containers/Contacto";
import Footer from "../Footer/containers/Footer";
import Turnos from "../Turnos/containers/turnos";
import FormTurnos from "../FormTurno/containers/FormTurnos";

class Page extends Component {
  state = {
    NavBarClass: "NavBar-container"
  };
  showNavBar() {
    console.log("aaa");
    if (window.pageYOffset >= 1) {
      this.setState({
        NavBarClass: "NavBar-container show"
      });
    }
  }
  render() {
    return (
      <div className="Page" onScroll={this.showNavBar()}>
        <NavBar
          show={this.state.NavBarClass}
          changeShow={this.showNavBar.bind(this)}
        />
        <Home />
        <Servicios />
        <Turnos />
        <FormTurnos />
        <Contacto />
        <Footer />
      </div>
    );
  }
}
export default Page;
