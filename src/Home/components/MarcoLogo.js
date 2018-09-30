import React from "react";
import logo from "../../img/logoUse.png";

function MarcoLogo(props) {
  return (
    <div
      className="marco-logo"
      data-aos="fade-in"
      data-aos-delay="100"
      data-aos-duration="300"
    >
      <div className="marcoContent">
        <img src={logo} alt="Rectificadora Pueyrredon" />
        <div className="links">
          {props.links.map(link => {
            return (
              <a href={link.id} key={link.id}>
                {link.titulo}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default MarcoLogo;
