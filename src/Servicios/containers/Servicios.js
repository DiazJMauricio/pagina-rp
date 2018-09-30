import React, { Component } from "react";
import Divisor from "../../Recursos/containers/Divisor";
import ServiciosLayout from "../components/ServiciosLayout";
import Baner from "../components/Baner";
import Repuestos from "../components/Repuestos";

import img from "../../img/home.jpg";

import imgR1 from "../../img/pc.jpg";
import imgR2 from "../../img/persan.jpeg";
import imgR3 from "../../img/v3b.png";

const baners = [
  {
    key: 1,
    title: "Rectificamos Motores Diesel y Nafteros",
    text:
      " Con solo presionar un botón en el espejo retrovisor o en la aplicación, nuestra tecnología ofrece más seguridad y practicidad para tu día a día. Aprovechá esta nueva experiencia a bordo de tu Chevrolet.",
    img: img
  },
  {
    key: 2,
    title: "Rectificamos Motores Diesel y Nafteros",
    text:
      "Con solo presionar un botón en el espejo retrovisor o en la aplicación, nuestra tecnología ofrece más seguridad y practicidad para tu día a día. Aprovechá esta nueva experiencia a bordo de tu Chevrolet.",
    img: img
  }
];

const marcas = [
  {
    key: 1,
    text: "Perfect Circle",
    img: imgR1
  },
  {
    key: 2,
    text: "",
    img: imgR2
  },
  {
    key: 3,
    text: "",
    img: imgR3
  }
];

class Servicios extends Component {
  render() {
    return (
      <div>
        <Divisor text="Nuestros Servicios" id="servicios" />
        <ServiciosLayout>
          {baners.map(baner => {
            return (
              <Baner
                key={baner.key}
                title={baner.title}
                text={baner.text}
                img={baner.img}
              />
            );
          })}
          <Repuestos imgs={marcas} />
        </ServiciosLayout>
      </div>
    );
  }
}
export default Servicios;
