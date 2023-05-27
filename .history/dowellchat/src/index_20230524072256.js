import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter,BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <HashRouter>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  {/* </HashRouter> */}
);
