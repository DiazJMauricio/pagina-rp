import React from "react";
import Divisor from "../../Recursos/containers/Divisor";
function TurnosLayout() {
  return (
    <div>
      <Divisor text="Turnos" id="turnos" />
      <div className="Semana">
        <div className="Dia" />
        <div className="Dia" />
        <div className="Dia" />
        <div className="Dia" />
        <div className="Dia" />
        <div className="Dia" />
        <div className="Dia" />
      </div>
    </div>
  );
}
export default TurnosLayout;
