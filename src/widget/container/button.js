import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="btn-Container">
        <button onClick={this.props.handleClick}>{this.props.title}</button>
      </div>
    );
  }
}
export default Button;
