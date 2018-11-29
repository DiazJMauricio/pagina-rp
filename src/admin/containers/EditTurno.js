import React, { Component } from "react";
import Calendar from "react-calendar";
import * as firebase from "firebase";

class EditTurno extends Component {
  state = {
    today: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    Cliente: this.props.data.Cliente,
    Email: this.props.data.Email,
    Asunto: this.props.data.Asunto,
    Fecha: this.props.data.Fecha,
    Hora: this.props.data.Hora
  };
  onChange = date => {
    this.setState({
      Fecha: date
    });
  };
  onSubmit = () => {
    var firestore = firebase.firestore();
    const docRef = firestore.collection("Turnos").doc(this.props.idTurno);
    docRef
      .set({
        Cliente: this.state.Cliente,
        Email: this.state.Email,
        Asunto: this.state.Asunto,
        Fecha: this.state.Fecha,
        Hora: this.state.Hora,
        Confirmado: true
      })
      .then(() => {
        this.props.closeModal();
        this.props.actualizar();
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  };
  DayOnCalendarDisable = ({ date }) => date.getDay() === 0;

  componentDidMount() {
    this.onChange(this.props.data.Fecha);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Nombre"
          value={this.state.Cliente}
          onChange={e => {
            this.setState({ Cliente: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Email"
          value={this.state.Email}
          onChange={e => {
            this.setState({ Email: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Asunto"
          value={this.state.Asunto}
          onChange={e => {
            this.setState({ Asunto: e.target.value });
          }}
        />
        <select
          value={this.state.Hora}
          onChange={e => {
            this.setState({ Hora: e.target.value });
          }}
        >
          <option>8hs</option>
          <option>9hs</option>
          <option>10hs</option>
          <option>11hs</option>
          <option>16hs</option>
          <option>17hs</option>
          <option>18hs</option>
          <option>19hs</option>
        </select>

        <Calendar
          calendarType="US"
          value={this.state.Fecha}
          minDate={this.state.today}
          tileDisabled={this.DayOnCalendarDisable}
          onChange={this.onChange}
        />
        <button className="adm-btn" onClick={this.onSubmit}>
          Modificar Turno
        </button>
      </div>
    );
  }
}
export default EditTurno;
