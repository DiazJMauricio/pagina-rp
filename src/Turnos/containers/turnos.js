import React, { Component } from "react";
import TurnosLayout from "../components/TurnosLayout";
class Turnos extends Component {
  render() {
    return <TurnosLayout handleButton={this.props.handleButton} />;
  }
}
export default Turnos;
