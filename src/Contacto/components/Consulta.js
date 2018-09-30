import React from "react";
import "./Consulta.css";

function Consulta() {
  return (
    <section className="content-consulta col-2" id="consulta">
      <div className="content-form-consulta">
        <h3>Envia tu Consulta</h3>
        <form>
          <input className="inp" type="text" placeholder="Nombre" />
          <input className="inp" type="text" placeholder="E-mail" />
          <input className="inp" type="text" placeholder="Asunto" />
          <textarea
            placeholder="Consulta"
            cols="auto"
            rows="5"
            wrap="hard"
            maxLength="1000"
          />
          <input type="submit" value="Enviar Consulta" className="btn" />
        </form>
      </div>
    </section>
  );
}
export default Consulta;
