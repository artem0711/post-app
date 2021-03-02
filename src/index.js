import "react-app-polyfill/ie11";
import 'react-app-polyfill/stable';

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/";

import "bootstrap/dist/css/bootstrap.css";
import "./index.sass";

ReactDOM.render(<App />, document.getElementById("root"));