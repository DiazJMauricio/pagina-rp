import React, { Component } from "react";
import HomeLayout from "../components/HomeLayout";
import CartelHome from "../components/CartelHome";
import MarcoLogo from "../components/MarcoLogo";

const info =
  "Somos una empresa familiar localizada en la capital de San Luis que busca brindarte el mejor servicio para tu motor. Contacta con nosotros para cualquier consulta.";

const links = [
  {
    titulo: "Servicios",
    id: "#servicios"
  },
  {
    titulo: "Turnos",
    id: "#turnos"
  },
  {
    titulo: "Contacto",
    id: "#contacto"
  }
];

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <CartelHome info={info} />
        <MarcoLogo links={links} />
      </HomeLayout>
    );
  }
}
export default Home;
