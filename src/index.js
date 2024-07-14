import { Header } from "./components/header.component";
// import fontHtml from "./styles";

// let Head = document.head;

// Head.appendChild(fontHtml);

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
