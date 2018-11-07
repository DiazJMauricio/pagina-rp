import React, { Component } from "react";
import "./FormTurnosLayout.css";
import Calendar from "react-calendar";
import "../../calendar.css";
// import TimeSelector from "../../TimeSelector/container/TimeSelector";

class FormTurnosLayout extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    ErrorNombre: false,
    date: new Date()
  };
  handleSubmit(event) {
    event.preventDefault();
    if (this.InputNombreValue.value === "") {
      this.setState({
        ErrorNombre: true
      });
    }
    if (this.InputEmailValue.value === "") {
      this.setState({
        ErrorEmail: true
      });
    }
  }
  OnChange = date => this.setState({ date });
  DayOnCalendarDisable = ({ date }) => date.getDay() === 0;

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
    if (this.state.ErrorEmail) {
      InputEmail = (
        <input
          type="text"
          className="TurnosInput error"
          placeholder="E-mail"
          ref={email => {
            this.InputEmailValue = email;
          }}
        />
      );
    } else {
      InputEmail = (
        <input
          type="text"
          className="TurnosInput"
          placeholder="E-mail"
          ref={email => {
            this.InputEmailValue = email;
          }}
        />
      );
    }

    return (
      <form className="FormTurnosLayout" onSubmit={this.handleSubmit}>
        <h3>Recuerda que nuestros horarios son:</h3>
        <h4>De Lunes a Sabados de 8hs a 12hs y de 16hs a 20hs</h4>
        <div className="inputs">
          <Calendar
            calendarType="US"
            onChange={this.onChange}
            value={this.state.date}
            minDate={this.state.date}
            tileDisabled={this.DayOnCalendarDisable}
          />

          <div className="inputsText">
            {InputNombre}
            {InputEmail}
            <input
              type="text"
              className="TurnosInput"
              placeholder="Asunto"
              ref={Asunto => {
                this.InputAsuntoValue = Asunto;
              }}
            />
            {/* <TimeSelector /> */}
          </div>
        </div>
        <div className="formButtonContainer">
          <button onClick={this.handleSubmit} className="btn">
            Pedir Turno
          </button>
        </div>
      </form>
    );
  }
}
export default FormTurnosLayout;
