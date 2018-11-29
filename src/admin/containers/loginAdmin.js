import React, { Component } from "react";
import Admin from "./admin";
import "./loginAdmin.css";

class Login extends Component {
  state = {
    mensaje: "",
    usuario: "",
    pass: "",
    login: false
  };
  OnSubmit = () => {
    if (this.state.usuario === "admin" && this.state.pass === "admin") {
      this.setState({ login: true });
    } else {
      this.setState({ mensaje: "Usuario o Contraseña Incorrecta" });
    }
  };
  render() {
    if (this.state.login) {
      return (
        <div>
          <Admin />
        </div>
      );
    } else {
      return (
        <div className="col-0">
          <center>
            <div className="login-container">
              <p>{this.state.mensaje}</p>
              <input
                type="text"
                onChange={e => this.setState({ usuario: e.target.value })}
                value={this.state.usuario}
                placeholder="Usuario"
              />
              <input
                type="password"
                value={this.state.pass}
                onChange={e => this.setState({ pass: e.target.value })}
                placeholder="Contraseña"
              />
              <button className="log-btn" onClick={this.OnSubmit}>
                Entrar
              </button>
            </div>
          </center>
        </div>
      );
    }
  }
}
export default Login;
