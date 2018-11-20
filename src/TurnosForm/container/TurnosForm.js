import React, { PureComponent } from "react";
import TurnosFormLayout from "../components/TurnosFormLayout";
import Calendar from "react-calendar";
import "../../calendar.css";
import "./TurnosForm.css";
import TimeSelector from "../components/TimeSelector";
import InputText from "../components/InputText";
import FormErrors from "../components/FormErrors";

import * as firebase from "firebase";

class TurnosForm extends PureComponent {
  state = {
    today: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    Nombre: "",
    EMail: "",
    Asunto: "",
    date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    hora: "",
    turnosDia: [],
    ErrorForm: []
  };

  minDate = () => {
    if (this.state.today.getDay === 0) {
      let newToday = new Date(this.state.today.getTime() + 24 * 60 * 60 * 1000);
      this.setState({
        today: newToday,
        date: newToday
      });
    }
  };

  handleUserInput = e => {
    const nombre = e.target.name;
    const value = e.target.value;
    this.InputTextValidation();
    this.setState({ [nombre]: value });
  };

  OnclickTime = value => this.setState({ hora: value.target.value });
  onChange = date => {
    this.setState({
      date,
      hora: "",
      turnosDia: ["8hs", "9hs", "10hs", "11hs", "16hs", "17hs", "18hs", "19hs"]
    });

    var firestore = firebase.firestore();
    let querydate = date;
    let horas = [];
    const docRef = firestore
      .collection("Turnos")
      .where("Fecha", "==", querydate)
      .where("Confirmado", "==", true);
    docRef
      .get()
      .then(query => {
        query.forEach(doc => {
          horas.push(doc.data().Hora);
        });
        this.setState({ turnosDia: horas });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  };
  DayOnCalendarDisable = ({ date }) => date.getDay() === 0;

  InputTextValidation = () => {
    let NombreValid = this.state.Nombre.length >= 6;
    let EMailValid = this.state.EMail.match(
      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    );
    this.setState({
      EMailValid,
      NombreValid
    });
  };
  Validation = () => {
    let errores = [];
    this.InputTextValidation();
    // Nombre
    if (this.state.Nombre.length === 0) {
      errores.push("Nombre obligatorio");
    } else if (this.state.Nombre.length < 6) {
      errores.push("El Nombre es demasiado corto");
    } else if (this.state.Nombre.length > 35) {
      errores.push("El nombre ingresado es demasiado Largo");
    }

    // Email
    if (this.state.EMailValid === null || this.state.EMail.length === 0) {
      errores.push("Ingrese una dirección de Email Válida.");
    } else {
      //////Email Usado
      var firestore = firebase.firestore();
      var mailUsado = false;
      const docRef = firestore
        .collection("Turnos")
        .where("Email", "==", this.state.EMail);
      // .where("Fecha", ">=", this.state.today);
      docRef
        .get()
        .then(query => {
          query.forEach(doc => {
            mailUsado = true;
          });
          if (mailUsado) {
            errores.push(
              "Ya se registra un turno sin resolver con este correo, por favor revice su casilla de correo para Confirmar o Cancelar el turno"
            );
          }
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });
      ///////////////
    }

    // Hora
    if (this.state.hora === "") {
      errores.push("Por favor seleccione una Hora Válida");
      this.setState({ horaValid: false });
    }
    this.setState({
      ErrorForm: errores
    });
    return errores.length === 0;
  };
  Emailcontrol = () => {};

  handleSubmit = () => {
    if (this.Validation()) {
      var firestore = firebase.firestore();
      const docRef = firestore.collection("Turnos");
      docRef.doc().set({
        Cliente: this.state.Nombre,
        Email: this.state.EMail,
        Asunto: this.state.Asunto,
        // Fecha: this.state.date.toDateString("dd/MM/yyyy"),
        Fecha: this.state.date,
        Hora: this.state.hora,
        Confirmado: false
      });
      this.props.handleCompleteClick(this.state.EMail);
    }
    // this.props.handleCompleteClick("unmail");
    //
    console.log(this.state.Nombre);
    console.log(this.state.EMail);
    console.log(this.state.Asunto);
    console.log(this.state.date.toDateString("dd/MM/yyyy"));
    console.log(this.state.hora);
  };
  componentDidMount() {
    this.onChange(this.state.date);
    this.minDate();
  }

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
              validacion={this.state.horaValid}
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
        <div className="formErrors">
          {this.state.ErrorForm.map((error, index) => {
            return (
              <div key={index}>
                <b>{error}</b>
                <br />
              </div>
            );
          })}
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
