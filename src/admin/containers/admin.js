import React, { Component } from "react";
import AdminLayout from "../components/adminLayout";
import TurnoLabel from "../components/TurnoLabel";

import * as firebase from "firebase";
import ContainerModal from "../../Modal/containers/containerModal";
import Modal from "../../Modal/components/Modal";
import EditTurno from "./EditTurno";
import CreateTurno from "./createTurno";

import "./turnos.css";

class Admin extends Component {
  state = {
    mensaje: "Cargando...",
    modalDeltVisible: false,
    modalFormVisible: false,
    modalAddTurnoVisible: false,
    turnos: []
  };

  getData = () => {
    this.setState({ mensaje: "Cargando..." });
    let turnos = [];
    var firestore = firebase.firestore();
    const docRef = firestore.collection("Turnos").orderBy("Fecha");
    docRef
      .get()
      .then(query => {
        query.forEach(doc => {
          // Por cada Turno
          let d = new Date(doc.data().Fecha);
          if (d > new Date() && doc.data().Confirmado === true) {
            turnos.push(doc);
          }
        });
        this.setState({ turnos, mensaje: "No se han encontrado registros" });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
        this.setState({
          mensaje: "Ah ocurrido un error al buscar los registros"
        });
      });
  };
  mostrar = () => {
    if (this.state.turnos.length === 0) {
      return <div>{this.state.mensaje}</div>;
    } else {
      return this.state.turnos.map(turno => {
        return (
          <TurnoLabel
            id={turno.id}
            info={turno.data()}
            delTurno={this.handleDelTurno}
            editTurno={this.ModificarTurno}
          />
        );
      });
    }
  };
  ModificarTurno = (id, data) => {
    this.setState({
      modalFormVisible: true,
      data,
      idTurno: id
    });
  };
  handleDelTurno = id => {
    this.setState({
      idTurno: id
    });
    this.setState({ modalDeltVisible: true });
  };
  DelTurno = () => {
    var firestore = firebase.firestore();
    firestore
      .collection("Turnos")
      .doc(this.state.idTurno)
      .delete()
      .then(() => {
        this.getData();
        this.setState({ modalDeltVisible: false });
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  };
  handleCloseClickDel = () => {
    this.setState({ modalDeltVisible: false });
  };
  handleCloseEditTurno = () => {
    this.setState({
      modalFormVisible: false
    });
  };
  handleCloseAddTurno = () => {
    this.setState({
      modalAddTurnoVisible: false
    });
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="Admin-Page">
        {this.state.modalDeltVisible && (
          <ContainerModal>
            <Modal
              title="Eliminar Turno"
              handleCloseClick={this.handleCloseClickDel}
            >
              <div>Esta seguro de elimnar este turno?</div>
              <button className="adm-btn" onClick={this.DelTurno}>
                Si
              </button>
              <button className="adm-btn" onClick={this.handleCloseClickDel}>
                No
              </button>
            </Modal>
          </ContainerModal>
        )}
        {this.state.modalFormVisible && (
          <ContainerModal>
            <Modal
              title="Modificar Turno"
              handleCloseClick={this.handleCloseEditTurno}
            >
              <EditTurno
                data={this.state.data}
                idTurno={this.state.idTurno}
                closeModal={this.handleCloseEditTurno}
                actualizar={this.getData}
              />
            </Modal>
          </ContainerModal>
        )}
        {this.state.modalAddTurnoVisible && (
          <ContainerModal>
            <Modal
              title="Añadir Turno"
              handleCloseClick={this.handleCloseAddTurno}
            >
              <CreateTurno
                closeModal={this.handleCloseAddTurno}
                actualizar={this.getData}
              />
            </Modal>
          </ContainerModal>
        )}

        {/* Pagina */}
        <div className="col-0">
          <AdminLayout>
            <div>
              <h3>Turnos</h3>
              <button
                onClick={() => this.setState({ modalAddTurnoVisible: true })}
              >
                <i class="far fa-calendar-plus" />
                {"  "}Añadir Turno
              </button>
            </div>
            <div className="TurnosLabel">{this.mostrar()}</div>
          </AdminLayout>
        </div>
      </div>
    );
  }
}
export default Admin;
