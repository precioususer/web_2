import img from "./../../../public/404.png";
import { Title } from "./../../components/UI/Title";
import { Button } from "./../../components/UI/Button";

export function errorPage() {
  let errorPageDiv = document.createElement("div");
  errorPageDiv.id = "404";

  const stl = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "49px",

    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",

    paddingTop: "60vh",

    minHeight: "calc(100vh - 130px - 60vh)",
    width: "calc(100vw)",
  };

  Object.assign(errorPageDiv.style, stl);

  const errorTitle = Title(
    "p24",
    "This page is not fully armed and operational."
  );
  errorTitle.style.fontSize = "35px";

  errorPageDiv.appendChild(errorTitle);
  errorPageDiv.appendChild(Button("regular", "Return"));

  return errorPageDiv;
}
