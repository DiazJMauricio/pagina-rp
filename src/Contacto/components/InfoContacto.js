import React from "react";
import InfoItem from "./InfoItem";
import "./InfoContacto.css";

function InfoContacto(props) {
  return (
    <section id="info" className="col-2">
      <div className="infocontacto">
        {props.info.map(inf => {
          return (
            <InfoItem
              key={inf.key}
              title={inf.title}
              text={inf.text}
              img={inf.img}
            />
          );
        })}
        <div className="container-chatWS">
          <a href="https://api.whatsapp.com/send?phone=5492664822358">
            Envíanos un mensaje de WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
export default InfoContacto;
