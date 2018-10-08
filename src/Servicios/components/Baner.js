import React from "react";

function Baner(props) {
  return (
    <div className="baner" data-aos="fade-up">
      <div className="sub-baner">
        <div>
          <h4>{props.title}</h4>
          <p>{props.text}</p>
        </div>
      </div>
      <div className="sub-baner">
        <img src={props.img} alt={props.title} />
      </div>
    </div>
  );
}
export default Baner;
