import React from "react";

function CartelHome(props) {
  return (
    <div
      className="quien"
      data-aos="fade-up"
      data-aos-delay="1200"
      data-aos-duration="800"
    >
      <p>{props.info}</p>
    </div>
  );
}
export default CartelHome;
