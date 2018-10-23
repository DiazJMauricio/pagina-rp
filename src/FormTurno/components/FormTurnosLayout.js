import React, { Component } from "react";
import "./FormTurnosLayout.css";

class FormTurnosLayout extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    ErrorNombre: false
  };
  handleSubmit(event) {
    event.preventDefault();
    if (this.InputNombreValue.value == "") {
      this.setState({
        ErrorNombre: true
      });
    }
  }

  render() {
    let InputNombre;
    let InputEmail;
    if (this.state.ErrorNombre) {
      InputNombre = (
        <input
          type="text"
          className="TurnosInput error"
          placeholder="Nombre"
          ref={nombre => {
            this.InputNombreValue = nombre;
          }}
        />
      );
    } else {
      InputNombre = (
        <input
          type="text"
          className="TurnosInput"
          placeholder="Nombre"
          ref={nombre => {
            this.InputNombreValue = nombre;
          }}
        />
      );
    }

    return (
      <form className="FormTurnosLayout" onSubmit={this.handleSubmit}>
        <h3>Recuerda que nuestros horarios son:</h3>
        <h4>De Lunes a Sabados de 8hs a 12hs y de 16hs a 20hs</h4>

        {InputNombre}

        <input
          type="text"
          className="TurnosInput"
          placeholder="E-mail"
          ref={email => {
            this.InputEmailValue = email;
          }}
        />
        <input
          type="text"
          className="TurnosInput"
          placeholder="Asunto"
          ref={Asunto => {
            this.InputAsuntoValue = Asunto;
          }}
        />
        <div className="InputTime">
          <input
            type="date"
            className="TurnosInput"
            placeholder="Fecha"
            ref={Fecha => {
              this.InputFechaValue = Fecha;
            }}
          />
          <select
            className="TurnosInput"
            name="Hora"
            ref={Hora => {
              this.InputHoraValue = Hora;
            }}
          >
            <option value="8">8 hs </option>
            <option value="9">9 hs </option>
            <option value="10">10 hs</option>
            <option value="11">11 hs</option>
            <option value="16">16 hs</option>
            <option value="17">17 hs</option>
            <option value="18">18 hs</option>
            <option value="19">19 hs</option>
          </select>
        </div>
        <div className="formButtonContainer">
          <button onClick={this.handleSubmit}>Pedir Turno</button>
        </div>
      </form>
    );
  }
}
export default FormTurnosLayout;
