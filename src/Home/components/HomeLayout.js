import React from "react";

import "./HomeLayout.css";

function HomeLayout(props) {
  return (
    <div className="home-container">
      <div className="col-0">{props.children}</div>
    </div>
  );
}
export default HomeLayout;
