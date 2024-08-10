import { Title } from "../../components/UI/Title";
import { Button } from "../../components/UI/Button";
import img from "./../../../public/bg_1.png";
export function homePage() {
  let homePageDiv = document.createElement("div");
  homePageDiv.id = "main";

  const stl = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "35px",

    paddingRight: "50vw",
    paddingLeft: "213px",

    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",

    minHeight: "calc(100vh - 130px)",
    width: "calc(50vw - 213px)",
  };

  Object.assign(homePageDiv.style, stl);

  homePageDiv.appendChild(
    Title("h1plus", "Find all your favorite heroes “Star Wars”")
  );
  homePageDiv.appendChild(
    Title(
      "p24",
      "You can know the type of heroes, its strengths, disadvantages and abilities"
    )
  );
  homePageDiv.appendChild(Button("regular", "Start"));

  return homePageDiv;
}
