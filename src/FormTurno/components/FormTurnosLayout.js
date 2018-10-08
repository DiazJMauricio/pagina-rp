import React from "react";

function FormTurnosLayout(props) {
  return (
    <form className="FormTurnosLayout" onSubmit={props.handleSubmit}>
      <input type="text" className="TurnosInput" placeholder="Nombre" />
      <input type="text" className="TurnosInput" placeholder="E-mail" />
      <input type="text" className="TurnosInput" placeholder="Asunto" />
      <input type="text" className="TurnosInput" placeholder="Fecha" />
      <input type="text" className="TurnosInput" placeholder="Hora" />
      <input type="submit" value="PedirTurno" />
    </form>
  );
}
export default FormTurnosLayout;
