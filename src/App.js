import React from "react";
import "./App.css";
import Page from "./components/Page";
import Conf from "./components/confirmacion";
import { HashRouter, Route } from "react-router-dom";
import Login from "./admin/containers/loginAdmin";

export default () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Page} />
      <Route exact path="/Servicios" component={Page} />
      <Route exact path="/turnos" component={Page} />
      <Route exact path="/contacto" component={Page} />
      <Route exact path="/admin" component={Login} />
      <Route path="/confirmacion/:id" component={Conf} />
    </div>
  </HashRouter>
);
