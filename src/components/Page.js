import React, { Component } from "react";
import Home from "../Home/containers/home";
import Servicios from "../Servicios/containers/Servicios";
import Contacto from "../Contacto/containers/Contacto";
import Footer from "../Footer/containers/Footer";
import Turnos from "../Turnos/containers/turnos";
import Modal from "../Modal/components/Modal";
import Alert from "../widget/components/CartelConfirmacion";
import ContainerModal from "../Modal/containers/containerModal";
import TurnosForm from "../TurnosForm/container/TurnosForm";

class Page extends Component {
  state = {
    NavBarClass: "NavBar-container",
    modalFormVisible: false,
    modalAlertVisible: false,
    Email: ""
  };

  // Modal Form
  handleOpenModalForm = () => {
    this.setState({
      modalFormVisible: true
    });
  };
  handleCloseClickForm = () => {
    this.setState({
      modalFormVisible: false
    });
  };
  handleCompleteModalForm = email => {
    this.handleCloseClickForm();
    this.setState({ Email: email });
    this.handleOpenModalAlert();
  };

  // Modal Alert
  handleOpenModalAlert = () => {
    this.setState({
      modalAlertVisible: true
    });
  };
  handleCloseClickAlert = () => {
    this.setState({
      modalAlertVisible: false
    });
  };

  render() {
    return (
      <div className="Page">
        <Home />
        <Servicios />

        <Turnos handleButton={this.handleOpenModalForm} />
        <Contacto />
        <Footer />
        {this.state.modalFormVisible && (
          <ContainerModal>
            <Modal
              title="Solicitud de Turno"
              handleCloseClick={this.handleCloseClickForm}
            >
              <TurnosForm handleCompleteClick={this.handleCompleteModalForm} />
            </Modal>
          </ContainerModal>
        )}
        {this.state.modalAlertVisible && (
          <ContainerModal>
            <Modal title="" handleCloseClick={this.handleCloseClickAlert}>
              <Alert Email={this.state.Email} />
            </Modal>
          </ContainerModal>
        )}
      </div>
    );
  }
}
export default Page;
