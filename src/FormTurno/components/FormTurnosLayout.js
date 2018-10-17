import React from "react";
import "./FormTurnosLayout.css";

function FormTurnosLayout(props) {
  return (
    <form className="FormTurnosLayout" onSubmit={props.handleSubmit}>
      <label>Nombre Obligatorio</label>
      <input type="text" className="TurnosInput error" placeholder="Nombre" />
      <input type="text" className="TurnosInput" placeholder="E-mail" />
      <input type="text" className="TurnosInput" placeholder="Asunto" />
      <div className="InputTime">
        <input type="date" className="TurnosInput" placeholder="Fecha" />
        <select className="TurnosInput" name="Hora">
          <option value="8">8 hs </option>
          <option value="9">9 hs </option>
          <option value="10">10 hs</option>
          <option value="11">11 hs</option>
          <option value="16">16 hs</option>
          <option value="17">17 hs</option>
          <option value="18">18 hs</option>
          <option value="19">19 hs</option>
        </select>
      </div>
      <input type="submit" value="PedirTurno" />
    </form>
  );
}
export default FormTurnosLayout;
