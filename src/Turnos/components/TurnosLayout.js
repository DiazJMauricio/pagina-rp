import React from "react";
import Divisor from "../../Recursos/containers/Divisor";
import Dia from "./Dia";
import "./Turnos.css";

function TurnosLayout(props) {
  return (
    <div>
      <Divisor text="Turnos" id="turnos" />
      <div className="ContainerDias">
        <div className="Horas">
          <h4>8 hs</h4>
          <h4>9 hs</h4>
          <h4>10 hs</h4>
          <h4>11 hs</h4>
          <h4>16 hs</h4>
          <h4>17 hs</h4>
          <h4>18 hs</h4>
          <h4>19 hs</h4>
        </div>
        <Dia dia="Lunes 1/11" />
        <Dia dia="Martes 2/11" />
        <Dia dia="Miercoles 3/11" />
        <Dia dia="Jueves 4/11" />
      </div>
      <button onClick={props.handleButton}>Pedir Turno</button>
    </div>
  );
}
export default TurnosLayout;
