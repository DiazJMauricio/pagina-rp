import React from "react";
import "./App.css";
import Page from "./components/Page";
import { HashRouter } from "react-router-dom";
// import ApiCalendar from "react-google-calendar-api";

export default () => (
  <HashRouter>
    <Page />
  </HashRouter>
);
