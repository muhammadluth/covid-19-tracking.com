import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import "./assets/css/style.css";
import "./components/Header.js";
import "./components/Footer.js";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
