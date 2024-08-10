import img from "./../../../public/bg_1.png";
import { DropDown } from "./../../components/UI/DropdownMenu";
import { Button } from "./../../components/UI/Button";
import { SearchBar } from "./../../components/UI/SearchBar";

export function homePage() {
  let homePageDiv = document.createElement("div");
  homePageDiv.id = "main";

  const stl = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",

    padding: "20px",

    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",

    minHeight: "calc(100vh - 130px)",
  };

  Object.assign(homePageDiv.style, stl);

  const types = [
    {
      name: "Gender",
      values: ["Male", "Female", "NaH"],
    },
    {
      name: "Side",
      values: ["Light", "Darkness"],
    },
  ];

  homePageDiv.appendChild(SearchBar());

  homePageDiv.appendChild(DropDown(types[0]));

  homePageDiv.appendChild(DropDown(types[1]));

  homePageDiv.appendChild(Button("large", "CHEWBACCA"));
  homePageDiv.appendChild(Button("regular", "Djedai"));
  homePageDiv.appendChild(Button("small", "druid"));
  homePageDiv.appendChild(Button("small-gray", "cancel"));
  homePageDiv.appendChild(Button("addBtn"));
  homePageDiv.appendChild(Button("clsBtn"));

  return homePageDiv;
}
