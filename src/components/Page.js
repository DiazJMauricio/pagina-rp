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

class Page extends Component {
  state = {
    NavBarClass: "NavBar-container",
    modalVisible: false
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
        <Turnos handleButton={this.handleOpenModal} />
        <Contacto />
        <Footer />
        {this.state.modalVisible && (
          <ContainerModal>
            <Modal handleCloseClick={this.handleCloseClick}>
              <FormTurnos />
            </Modal>
          </ContainerModal>
        )}
      </div>
    );
  }
}
export default Page;
