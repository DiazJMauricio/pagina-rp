import React from "react";

function Repuestos(props) {
  return (
    <div className="cartel-marco">
      <div className="cartel">
        <div>
          <h4>Venta de Repuestos</h4>
        </div>
        <div className="cartel-imagenes">
          {props.imgs.map(marca => {
            return <img src={marca.img} alt={marca.text} />;
          })}
        </div>
        <div>
          <h5>Y otras marcas</h5>
        </div>
      </div>
    </div>
  );
}
export default Repuestos;
