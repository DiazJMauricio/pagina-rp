import React, { Component } from "react";
import { createPortal } from "react-dom";

class ContainerModal extends Component {
  render() {
    return createPortal(
      this.props.children,
      document.getElementById("container-modal")
    );
  }
}
export default ContainerModal;
