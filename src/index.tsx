import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
