import React from "react";

function Baner(props) {
  return (
    <div className="baner">
      <div className="sub-baner" data-aos="fade-up">
        <div>
          <h4>{props.title}</h4>
          <p>{props.text}</p>
        </div>
      </div>
      <div className="sub-baner" data-aos="fade-up">
        <img src={props.img} />
      </div>
    </div>
  );
}
export default Baner;
