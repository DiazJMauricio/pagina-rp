import React from "react";
import PropTypes from "prop-types";

function Repuestos(props) {
  return (
    <div className="cartel-marco" data-aos="fade-right">
      <div className="cartel">
        <div>
          <h4>Venta de Repuestos</h4>
        </div>
        <div className="cartel-imagenes">
          {props.imgs.map(marca => {
            return <img src={marca.img} key={marca.key} alt={marca.text} />;
          })}
        </div>
        <div>
          <h5>Y otras marcas</h5>
        </div>
      </div>
    </div>
  );
}
Repuestos.propTypes = {
  imgs: PropTypes.array.isRequired
};

export default Repuestos;
