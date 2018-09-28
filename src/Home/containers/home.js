import React, { Component } from "react";
import HomeLayout from "../components/HomeLayout";
import CartelHome from "../components/CartelHome";
import MarcoLogo from "../components/MarcoLogo";

const info =
  "Con solo presionar un botón en el espejo retrovisor o en la aplicación, nuestra tecnología ofrece más seguridad y practicidad para tu día a día. Aprovechá esta nueva experiencia a bordo de tu Chevrolet.";

const links = [
  {
    titulo: "Servicios",
    id: "#servicios"
  },
  {
    titulo: "Contacto",
    id: "#contacto"
  },
  {
    titulo: "Turnos",
    id: "#turnos"
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
