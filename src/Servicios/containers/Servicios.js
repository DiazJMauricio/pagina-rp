import React, { Component } from "react";
import Divisor from "../../Recursos/containers/Divisor";
import ServiciosLayout from "../components/ServiciosLayout";
import Baner from "../components/Baner";
import Repuestos from "../components/Repuestos";

import pruebasHImg from "../../img/PruebasHidraulicas.jpg";
import rectifiImg from "../../img/Rectificacion.jpg";

import imgR1 from "../../img/pc.jpg";
import imgR2 from "../../img/persan.jpeg";
import imgR3 from "../../img/v3b.png";

const baners = [
  {
    key: 1,
    title: "Rectificamos Motores Diesel y Nafteros",
    text:
      "Las piezas del motor, con el uso se desgastan y pierden su forma original a causa del rozamiento que se produce entre ellas; esto provoca  pérdida de potencia en el motor, exceso de temperatura, humo, etc. Para recuperar el funcionamiento normal del motor se debe rectificar; la rectificación es una técnica por el cual se mecanizan las piezas hasta hacer iguales las superficies de contacto lo que mejora la lubricación evitando la fricción.",
    img: rectifiImg
  },
  {
    key: 2,
    title: "Pruebas Hidraulicas",
    text:
      "Confirmar la integridad estructural y hermeticidad de los equipos y sistemas de tuberías que manejan hidrocarburos líquidos y gaseosos, y sustancias peligrosas, en instalaciones terrestres e instalaciones marinas incluyendo sus servicios auxiliares, con la finalidad de garantizar la confiabilidad de la instalación durante su operación normal.",
    img: pruebasHImg
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
    text: "Pistones Persan",
    img: imgR2
  },
  {
    key: 3,
    text: "valvulas 3B",
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
