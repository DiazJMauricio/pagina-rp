import React from "react";
import "./CartelConfirmacion.css";

function CartelConfirmacion(props) {
  return (
    <div className="CartelConfirmacion">
      <div className="check_mark">
        <div className="sa-icon sa-success animate">
          <span className="sa-line sa-tip animateSuccessTip" />
          <span className="sa-line sa-long animateSuccessLong" />
          <div className="sa-placeholder" />
          <div className="sa-fix" />
        </div>
      </div>
      <div className="CartelConftext">
        <h2>¡Solicitud de turno Exitosa!</h2>
        <p>
          Hemos enviado un Email de confirmación a <b>{props.Email}</b>
        </p>
        <p>
          Por favor revise su casilla de correo y confirme su turno para que
          aparezca en nuestros registros.
        </p>
        <p>Gracias por solicitar su turno y confiar en nosotros.</p>
      </div>
    </div>
  );
}
export default CartelConfirmacion;
