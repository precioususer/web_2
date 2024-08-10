import { Header } from "./components/Header";
import { previewPage } from "./pages/preview/preview.page";

const root = document.getElementById("root");

const stl = {
  display: "flex",
  flexDirection: "column",

  fontFamily: "Roboto, sans-serif",
  fontStyle: "normal",
  fontWeight: "400",
  backgroundColor: "black",

  height: "100vh",
};

Object.assign(root.style, stl);

root.appendChild(Header());
root.appendChild(previewPage());
