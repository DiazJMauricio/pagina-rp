import React, { Component } from "react";
import ContactoLayout from "../components/ContactoLayout";
import InfoContacto from "../components/InfoContacto";
import Divisor from "../../Recursos/containers/Divisor";

import imgDir from "../../img/map-marker-alt-solid.svg";
import imgMail from "../../img/envelope-solid.svg";
import imgTel from "../../img/phone-solid.svg";
import imgHor from "../../img/business-time-solid.svg";

const infoContacto = [
  {
    key: 1,
    img: imgDir,
    alt: "Direccion",
    title: "Dirección",
    text: "Pasaje J.M. Pueyrredon 142 BA°Cantisani - San Luis Capital - 5700"
  },
  {
    key: 2,
    img: imgMail,
    alt: "mail",
    title: "E-mail",
    text: "email@gmail.com"
  },
  {
    key: 3,
    img: imgTel,
    alt: "Telefono",
    title: "Telefono",
    text: "+54 9266 4446948"
  },
  {
    key: 4,
    img: imgHor,
    alt: "Horario",
    title: "Horario de Atención",
    text: "Lunes a Sabados de 8hs a 12hs y de 16hs a 20hs"
  }
];

class Contacto extends Component {
  render() {
    return (
      <div>
        <Divisor text="Informacion de Contacto" id="contacto" />
        <ContactoLayout>
          <InfoContacto info={infoContacto} />
          <div className="col-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1667.0897152207435!2d-66.33737245556641!3d-33.31412425540022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d43bf983742e7d%3A0xe03e8e5628e1ebcc!2sRectificacion+Pueyrredon!5e0!3m2!1ses-419!2sar!4v1536720575012"
              width="100%"
              height="100%"
              frameBorder="0"
              title="mapa"
              style={{ bottom: 0 }}
              allowFullScreen
            />
          </div>
        </ContactoLayout>
      </div>
    );
  }
}
export default Contacto;
