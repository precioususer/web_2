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

    borderTop: "solid 1px white",

    minHeight: "calc(100vh - 130px - 60vh - 1px)",
    width: "calc(100vw)",
  };

  Object.assign(errorPageDiv.style, stl);

  errorPageDiv.appendChild(
    Title("p35", "This page is not fully armed and operational.")
  );
  errorPageDiv.appendChild(Button("regular", "Return"));

  return errorPageDiv;
}
