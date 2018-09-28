import React, { Component } from "react";
import ContactoLayout from "../components/ContactoLayout";
import InfoContacto from "../components/InfoContacto";
import Divisor from "../../Recursos/containers/Divisor";
import Consulta from "../components/Consulta";

import imgDir from "../../img/map-marker-alt-solid.svg";
import imgMail from "../../img/envelope-solid.svg";
import imgTel from "../../img/phone-solid.svg";
import imgHor from "../../img/business-time-solid.svg";

const infoContacto = [
  {
    img: imgDir,
    title: "Dirección",
    text: "Pasaje J.M. Pueyrredon 142 BA°Cantisani - San Luis Capital - 5700"
  },
  {
    img: imgMail,
    title: "E-mail",
    text: "email@gmail.com"
  },
  {
    img: imgTel,
    title: "Telefono",
    text: "+54 9266 4446948"
  },
  {
    img: imgHor,
    title: "Horario de Atención",
    text: "Lunes a Viernes de 8hs a 17hs"
  }
];

class Contacto extends Component {
  render() {
    return (
      <div>
        <Divisor text="Informacion de Contacto" id="contacto" />
        <ContactoLayout>
          <InfoContacto info={infoContacto} />
          <Consulta />
        </ContactoLayout>
      </div>
    );
  }
}
export default Contacto;
