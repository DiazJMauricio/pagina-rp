import React from "react";
import Divisor from "../../Recursos/containers/Divisor";
import Dia from "./Dia";
import "./Turnos.css";

function TurnosLayout(props) {
  return (
    <div>
      <Divisor text="Turnos" id="turnos" />
      <div className="ContainerDias col-0">
        <div className="containerButton">
          <button onClick={props.handleButton} className="btn">
            Pedir Turno
          </button>
        </div>
        {props.turnos.map(turno => {
          return (
            <div>
              <p key="1">{turno.nombre}</p>
              <p key="2">{turno.email}</p>
              <p key="3">{turno.asunto}</p>
              <p key="4">{turno.fecha}</p>
              <p key="5">{turno.hora}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default TurnosLayout;
