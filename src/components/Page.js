import React, { Component } from "react";
import Home from "../Home/containers/home";
import NavBar from "./NavBar";
import Servicios from "../Servicios/containers/Servicios";
import Contacto from "../Contacto/containers/Contacto";
import Footer from "../Footer/containers/Footer";
import Turnos from "../Turnos/containers/turnos";
import FormTurnos from "../FormTurno/containers/FormTurnos";
import Modal from "../Modal/components/Modal";
import ContainerModal from "../Modal/containers/containerModal";

import firebase from "firebase";
import { DB_CONFIG } from "../config/config";
import "firebase/database";

class Page extends Component {
  constructor() {
    super();
    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = this.app
      .database()
      .ref()
      .child("turnos");
  }
  state = {
    NavBarClass: "NavBar-container",
    modalVisible: false,

    turnos: [
      {
        nombre: "Juan Perez",
        email: "jp@gmail.com",
        asunto: "motor",
        fecha: "2018-10-04",
        hora: "16 hs"
      },
      {
        nombre: "Juan Perez2",
        email: "jp2@gmail.com",
        asunto: "motor",
        fecha: "2018-10-05",
        hora: "17 hs"
      },
      {
        nombre: "Juan Perez3",
        email: "jp3@gmail.com",
        asunto: "motor3",
        fecha: "2018-10-06",
        hora: "18 hs"
      }
    ]
  };

  handleOpenModal = () => {
    this.setState({
      modalVisible: true
    });
  };
  handleCloseClick = event => {
    this.setState({
      modalVisible: false
    });
  };
  render() {
    return (
      <div className="Page">
        <Home />
        <Servicios />
        <Turnos
          handleButton={this.handleOpenModal}
          turnos={this.state.turnos}
        />
        <Contacto />
        <Footer />
        {this.state.modalVisible && (
          <ContainerModal>
            <Modal
              handleCloseClick={this.handleCloseClick}
              addTurno={this.addTurno}
            >
              <FormTurnos />
            </Modal>
          </ContainerModal>
        )}
      </div>
    );
  }
}
export default Page;
