import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCKooj4yI9I7H8DzqYOyFTgj8cU9TRcK2o",
  authDomain: "rectificadora-pueyrredon.firebaseapp.com",
  databaseURL: "https://rectificadora-pueyrredon.firebaseio.com",
  projectId: "rectificadora-pueyrredon",
  storageBucket: "rectificadora-pueyrredon.appspot.com",
  messagingSenderId: "717142157393",
  timestampsInSnapshots: true
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById("root"));
