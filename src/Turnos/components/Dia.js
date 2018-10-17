import React from "react";

function Dia(props) {
  return (
    <div className="TurnoDia">
      <p>{props.dia}</p>
      <div className="TurnoHora" />
      <div className="TurnoHora" />
      <div className="TurnoHora" />
      <div className="TurnoHora border-b" />

      <div className="TurnoHora" />
      <div className="TurnoHora" />
      <div className="TurnoHora" />
      <div className="TurnoHora" />
    </div>
  );
}
export default Dia;
