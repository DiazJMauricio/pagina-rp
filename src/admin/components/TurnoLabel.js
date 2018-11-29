import React from "react";
import "./TurnosLabel.css";
function TurnosLabel(props) {
  var calendarOpc = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric"
  };
  return (
    <div className="TurnoLabel">
      <div className="section-inf">
        <div className="inf">
          <div>
            Fecha: {props.info.Fecha.toLocaleDateString("es-ES", calendarOpc)}
          </div>
          <div>{props.info.Hora}</div>
        </div>
        <div className="inf">
          <div>Cliente: {props.info.Cliente}</div>
          <div>{props.info.Email}</div>
        </div>
        <div className="inf">
          <div>Asunto: {props.info.Asunto}</div>
        </div>
      </div>
      <div className="section-btns">
        <div>
          <button onClick={() => props.editTurno(props.id, props.info)}>
            {/*editar*/}
            <i className="fas fa-edit" />
          </button>
          <button onClick={() => props.delTurno(props.id)}>
            <i className="fas fa-trash-alt" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TurnosLabel;
