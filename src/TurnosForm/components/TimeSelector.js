import React from "react";
import "./TimeSelectorLayout.css";

function TimeSelector(props) {
  const horas = props.horas;
  const selectedTime = props.selectedTime;
  const turnosDia = props.turnosDia;
  const ListButtons = horas.map(hora => {
    if (turnosDia.includes(hora)) {
      return <button disabled>{hora}</button>;
    } else {
      if (selectedTime == hora) {
        return (
          <button
            className="ts-selected"
            value={hora}
            onClick={props.selectTime}
          >
            {hora}
          </button>
        );
      } else {
        return (
          <button value={hora} onClick={props.selectTime}>
            {hora}
          </button>
        );
      }
    }
  });
  return <div className="TimeSelector">{ListButtons}</div>;
}
export default TimeSelector;
