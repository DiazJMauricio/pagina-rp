import React from "react";
import Divisor from "../../Recursos/containers/Divisor";
import Dia from "./Dia";
import "./Turnos.css";

function TurnosLayout(props) {
  return (
    <div>
      <Divisor text="Turnos" id="turnos" />
      <div className="ContainerDias col-0">
        <div className="DiaFila">
          <div className="celdaHora" />
          <h4 className="celdaHora"> 8 hs</h4>
          <h4 className="celdaHora"> 9 hs</h4>
          <h4 className="celdaHora">10 hs</h4>
          <h4 className="celdaHora border-r">11 hs</h4>
          <h4 className="celdaHora">16 hs</h4>
          <h4 className="celdaHora">17 hs</h4>
          <h4 className="celdaHora">18 hs</h4>
          <h4 className="celdaHora">19 hs</h4>
        </div>
        <Dia dia="Lun 1/11" />
        <Dia dia="Mar 2/11" />
        <Dia dia="Mie 3/11" />
        <Dia dia="Jue 4/11" />
        <Dia dia="Vie 5/11" />
        <Dia dia="Sab 6/11" />
        <div className="containerButton">
          <button onClick={props.handleButton}>Pedir Turno</button>
        </div>
        {props.turnos.map(turno => {
          return (
            <div>
              <p>{turno.nombre}</p>
              <p>{turno.email}</p>
              <p>{turno.asunto}</p>
              <p>{turno.fecha}</p>
              <p>{turno.hora}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default TurnosLayout;
