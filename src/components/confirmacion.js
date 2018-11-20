import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Confirmacion extends Component {
  render() {
    return (
      <div>
        Pagina de Confirmacion
        <div>{this.props.match.params.id}</div>
      </div>
    );
  }
}
export default Confirmacion;
