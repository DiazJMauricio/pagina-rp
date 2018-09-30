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
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1667.0897152207435!2d-66.33737245556641!3d-33.31412425540022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d43bf983742e7d%3A0xe03e8e5628e1ebcc!2sRectificacion+Pueyrredon!5e0!3m2!1ses-419!2sar!4v1536720575012"
        width="100%"
        frameBorder="0"
        style={{ bottom: 0 }}
        allowFullScreen
      />
    </section>
  );
}
export default InfoContacto;
