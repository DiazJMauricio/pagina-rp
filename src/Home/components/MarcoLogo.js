import React from "react";
import logo from "../../img/logoUse.png";

function MarcoLogo(props) {
  return (
    <div className="marco-logo">
      <div className="marcoContent">
        <img src={logo} alt="Rectificadora Pueyrredon" />
        <div className="links">
          {props.links.map(link => {
            return <a href={link.id}>{link.titulo}</a>;
          })}
        </div>
      </div>
    </div>
  );
}
export default MarcoLogo;
