import { Header } from "./components/Header";

const root = document.getElementById("root");

const stl = {
  display: "flex",
  flexDirection: "column",
  fontFamily: "Roboto, sans-serif",
  fontStyle: "normal",
  fontWeight: "400",
};

Object.assign(root.style, stl);

root.appendChild(Header());
