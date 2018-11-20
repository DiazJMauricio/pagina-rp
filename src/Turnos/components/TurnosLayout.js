import React from "react";
import Divisor from "../../Recursos/containers/Divisor";
import "./Turnos.css";
import icon from "../../img/iconTurnosB.png";

function TurnosLayout(props) {
  return (
    <div>
      <Divisor text="Turnos" id="turnos" />
      <div className="ContainerPedirTurno col-0">
        <div className="containerInfo">
          <img src={icon} alt="Turnos" />
          <h2>Pedí tu Turno, vení y te atendemos al instante</h2>
          <p>
            Atendemos de <b>Lunes a Sabados</b> de <b>8hs a 12hs</b> y de
            <b>16hs a 20hs</b>
          </p>
        </div>
        <div className="containerButton">
          <button onClick={props.handleButton} className="btn">
            Pedir Turno
          </button>
        </div>
      </div>
    </div>
  );
}
export default TurnosLayout;
