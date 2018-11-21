import React, { PureComponent } from "react";
import TurnosFormLayout from "../components/TurnosFormLayout";
import Calendar from "react-calendar";
import "../../calendar.css";
import "./TurnosForm.css";
import TimeSelector from "../components/TimeSelector";
import InputText from "../components/InputText";
import FormErrors from "../components/FormErrors";
import * as emailjs from "emailjs-com";

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
    return new Promise((resolve, reject) => {
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

      // Hora
      if (this.state.hora === "") {
        errores.push("Por favor seleccione una Hora Válida");
        this.setState({ horaValid: false });
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
        docRef
          .get()
          .then(query => {
            query.forEach(doc => {
              console.log(doc.data().Fecha);
              let d = new Date(doc.data().Fecha);
              console.log(d);
              if (d > this.state.today) {
                mailUsado = true;
              }
            });
            if (mailUsado) {
              errores.push(
                "Ya se registra un turno sin resolver con este correo, por favor revice su casilla de correo para Confirmar o Cancelar el turno"
              );
            }
            this.setState({
              ErrorForm: errores
            });
            resolve(errores.length === 0);
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
          });
      }
    });
  };
  Emailcontrol = () => {};

  handleSubmit = () => {
    this.Validation().then(valid => {
      if (valid) {
        var firestore = firebase.firestore();
        const docRef = firestore.collection("Turnos");
        var Cliente = this.state.Nombre;
        var Email = this.state.EMail;
        var Asunto = this.state.Asunto;
        var Fecha = this.state.date;
        var Hora = this.state.hora;

        docRef
          .add({
            Cliente,
            Email,
            Asunto,
            Fecha,
            Hora,
            Confirmado: false
          })
          .then(function(docRef) {
            console.log("Document written with ID: ", docRef);

            const url = "http://localhost:3000/#/confirmacion/" + docRef.id;

            var calendarOpc = {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            };

            var templateParams = {
              name: Cliente,
              email: Email,
              asunto: Asunto,
              fecha: Fecha.toLocaleDateString("es-ES", calendarOpc),
              hora: Hora,
              url: url
            };

            emailjs
              .send(
                "default_service",
                "template_gIa4iGRD",
                templateParams,
                "user_vEX7TEmw5tmqeMAcHeQ5c"
              )
              .then(
                function(response) {
                  console.log("SUCCESS!", response.status, response.text);
                },
                function(err) {
                  console.log("FAILED...", err);
                }
              );
          });
        this.props.handleCompleteClick(this.state.EMail);
      }
    });

    console.log(this.state.Nombre);
  };

  sendEmail = docId => {
    const url = "http://localhost:3000/#/confirmacion/" + docId;

    var templateParams = {
      name: this.state.Nombre,
      email: this.state.EMail,
      asunto: this.state.Asunto,
      fecha: this.state.date.toDateString("dd/MM/yyyy"),
      hora: this.state.hora,
      url: url
    };

    emailjs
      .send(
        "default_service",
        "template_gIa4iGRD",
        templateParams,
        "user_vEX7TEmw5tmqeMAcHeQ5c"
      )
      .then(
        function(response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function(err) {
          console.log("FAILED...", err);
        }
      );
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
