import React from "react";

function Dia(props) {
  return (
    <div className="DiaFila">
      <div className="celdaHora">{props.dia}</div>
      <div className="celdaHora Turno av" />
      <div className="celdaHora Turno" />
      <div className="celdaHora Turno" />
      <div className="celdaHora Turno " />

      <div className="celdaHora Turno" />
      <div className="celdaHora Turno" />
      <div className="celdaHora Turno" />
      <div className="celdaHora Turno" />
    </div>
  );
}
export default Dia;
