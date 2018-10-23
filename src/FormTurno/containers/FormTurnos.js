import React, { Component } from "react";
import FormTurnosLayout from "../components/FormTurnosLayout";

class FormTurnos extends Component {
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Submit");
  };
  render() {
    return (
      <FormTurnosLayout
        handleSubmit={this.handleFormSubmit}
        addTurno={this.props.addTurno}
      />
    );
  }
}
export default FormTurnos;
