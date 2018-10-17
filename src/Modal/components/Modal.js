import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div className="ModalCapa">
      <div className="ModalContainer col-2">
        <div className="ModalFunction">
          <h2>Pedir Turno</h2>
          <button className="close-btn" onClick={props.handleCloseClick}>
            +
          </button>
        </div>
        <div className="ModalContent">{props.children}</div>
      </div>
    </div>
  );
}
export default Modal;
