import React from "react";
import "./InputText.css";

function InputText(props) {
  const NombreValid = props.values.NombreValid;
  const EMailValid = props.values.EMailValid;
  let NombreClass = "";
  let EMailClass = "";
  // console.log(EMailValid);
  if (NombreValid === false) {
    NombreClass = "inputError";
  }
  if (EMailValid === null) {
    EMailClass = "inputError";
  }

  return (
    <form onChange={props.handleSubmit}>
      <input
        type="text"
        name="Nombre"
        className={NombreClass}
        placeholder="Nombre"
        onChange={props.handleUserInput}
        value={props.values.Nombre}
      />
      <input
        type="text"
        name="EMail"
        className={EMailClass}
        placeholder="EMail"
        value={props.values.EMail}
        onChange={props.handleUserInput}
      />
      <input
        type="text"
        name="Asunto"
        placeholder="Asunto (Opcional)"
        onChange={props.handleUserInput}
      />
    </form>
  );
}
export default InputText;
