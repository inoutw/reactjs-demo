import React from "react";
import ReactDOM from "react-dom";
import "styles/main.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

if (process.env.NODE_ENV !== "development") {
  console.log = () => {
    return;
  };
  window.addEventListener("unhandledrejection", err => {
    err.preventDefault();
  });
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
