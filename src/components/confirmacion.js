import React, { Component } from "react";
import * as emailjs from "emailjs-com";

import * as firebase from "firebase";

class Confirmacion extends Component {
  state = {
    mensaje: "Procesando..."
  };

  ActualizacionConf = bol => {
    var firestore = firebase.firestore();
    var mensaje = this.state.mensaje;
    var id = this.props.match.params.id;
    let intent = "Confirmado";
    if (!bol) {
      intent = "Cancelado";
    }

    const docRef = firestore.collection("Turnos").doc(id);
    docRef
      .update({
        Confirmado: bol
      })
      .then(() => {
        console.log("Document successfully updated!");
        this.setState({
          mensaje: "Su Turno se a " + intent + " Exitosamente"
        });
      })
      .catch(error => {
        console.log("Error Updating documents: ", error);
        this.setState({
          mensaje: "Ha ocurrido un error al intentar el turno, Pruebe mas tarde"
        });
      });

    this.setState({
      mensaje
    });
    var info = [];
    const dbRef = firestore.collection("Turnos").orderBy("Fecha");
    dbRef
      .get()
      .then(query => {
        query.forEach(doc => {
          let d = new Date(doc.data().Fecha);
          if (d > new Date() && doc.data().Confirmado === true) {
            let dat = doc.data();
            let Fecha =
              dat.Fecha.getDate() +
              "/" +
              (dat.Fecha.getMonth() + 1) +
              "/" +
              dat.Fecha.getFullYear();
            info.push(
              "<div style='padding:15px;margin:5px;font-size:1.3em;border:solid 2px gray;'><b>Fecha:</b> " +
                Fecha +
                "<b>  Hora:</b> " +
                dat.Hora +
                "<br><b>  Cliente: </b>" +
                dat.Cliente +
                "<b>  Email: </b>" +
                dat.Email +
                "<br><b>  Asunto: </b>" +
                dat.Asunto +
                "</div>"
            );
          }
        });
      })
      .then(() => {
        var templateParams = {
          info: info.join("")
        };

        emailjs
          .send(
            "default_service",
            "emailconfirmacion",
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
  };
  cancelTurno = () => {
    this.ActualizacionConf(false);
  };

  componentDidMount() {
    this.ActualizacionConf(true);
  }
  render() {
    return (
      <div>
        <div className="conf-container">
          <div className="conf-content">
            <div className="content-logo">
              <img src="" alt="Logo" />
            </div>
            <h2>{this.state.mensaje}</h2>
            <button onClick={this.cancelTurno}>Cancelar Turno</button>
            <p>
              Para volver a Confirmar el turno solo tiene que volver a entrar al
              link o refrescar esta pagina
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Confirmacion;
