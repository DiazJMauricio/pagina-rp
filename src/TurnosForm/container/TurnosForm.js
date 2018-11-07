import React, { PureComponent } from "react";
import TurnosFormLayout from "../components/TurnosFormLayout";
import Calendar from "react-calendar";
import TimeSelector from "../components/TimeSelector";
import InputText from "../components/InputText";
import FormErrors from "../components/FormErrors";

class TurnosForm extends PureComponent {
  state = {
    Nombre: "",
    EMail: "",
    Asunto: "",
    today: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    hora: "",
    turnosDia: [],
    errors: []
  };

  handleUserInput = e => {
    const nombre = e.target.name;
    const value = e.target.value;
    this.validation();
    this.setState({ [nombre]: value });
  };

  OnclickTime = value => this.setState({ hora: value.target.value });
  onChange = date => {
    this.setState({ date });
    this.setState({ hora: "" });
  };
  DayOnCalendarDisable = ({ date }) => date.getDay() === 0;

  validation = () => {
    let NombreValid = this.state.Nombre.length >= 6;
    let EMailValid = this.state.EMail.match(
      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    );
    console.log(EMailValid);
    this.setState({
      EMailValid,
      NombreValid
    });
  };

  handleSubmit = value => {
    console.log(this.state.Nombre);
    console.log(this.state.EMail);
    console.log(this.state.Asunto);
    console.log(this.state.date.toDateString("dd/MM/yyyy"));
    console.log(this.state.hora);
  };
  render() {
    var calendarOpc = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    var horas = ["8hs", "9hs", "10hs", "11hs", "16hs", "17hs", "18hs", "19hs"];
    return (
      <TurnosFormLayout>
        <div className="formTitle">
          <p>
            Pedir turno para el{" "}
            <b>{this.state.date.toLocaleDateString("es-ES", calendarOpc)}</b> A
            Las <b>{this.state.hora}</b>
          </p>
        </div>
        <FormErrors />
        <div className="fcol-1">
          <div className="fcol-2">
            <InputText
              handleUserInput={this.handleUserInput}
              values={this.state}
            />
            <TimeSelector
              selectTime={this.OnclickTime}
              selectedTime={this.state.hora}
              horas={horas}
              turnosDia={this.state.turnosDia}
            />
          </div>
          <div className="fcol-2">
            <Calendar
              calendarType="US"
              value={this.state.date}
              minDate={this.state.today}
              tileDisabled={this.DayOnCalendarDisable}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div>
          <button className="btn" onClick={this.handleSubmit}>
            Pedir Turno
          </button>
        </div>
      </TurnosFormLayout>
    );
  }
}
export default TurnosForm;
