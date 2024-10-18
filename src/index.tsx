import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const INJECT_ID: string = "app";
const rootElement = document.getElementById(INJECT_ID)!;

console.log(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
