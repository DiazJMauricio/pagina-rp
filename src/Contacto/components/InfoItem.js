import React from "react";

function InfoItem(props) {
  return (
    <div className="inf">
      <img src={props.img} alt={props.alt} />
      <div className="infText">
        <p className="infT">{props.title}</p>
        <p className="">{props.text}</p>
      </div>
    </div>
  );
}

export default InfoItem;
