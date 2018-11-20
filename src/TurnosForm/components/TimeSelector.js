import React from "react";
import "./TimeSelectorLayout.css";

function TimeSelector(props) {
  const valid = props.validacion;
  const horas = props.horas;
  const selectedTime = props.selectedTime;
  const turnosDia = props.turnosDia;
  const ListButtons = horas.map((hora, i) => {
    if (turnosDia.includes(hora)) {
      return (
        <button key={i} disabled>
          {hora}
        </button>
      );
    } else {
      if (selectedTime === hora) {
        return (
          <button
            key={i}
            className="ts-selected"
            value={hora}
            onClick={props.selectTime}
          >
            {hora}
          </button>
        );
      } else {
        return (
          <button key={i} value={hora} onClick={props.selectTime}>
            {hora}
          </button>
        );
      }
    }
  });
  if (valid === false) {
    return <div className="TimeSelector error">{ListButtons}</div>;
  } else return <div className="TimeSelector">{ListButtons}</div>;
}
export default TimeSelector;
