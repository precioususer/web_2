import img from "./../../../public/bg.png";
import Yoda from "./../../../public/Character.png";
import { Title } from "./../../components/UI/Title";
import { SearchBar } from "./../../components/UI/SearchBar";
import { DropdownMenu } from "./../../components/UI/DropdownMenu";
import { Button } from "./../../components/UI/Button";
import { Card } from "../../components/UI/Card";
import { AddForm } from "../../components/AddForm/AddForm";

const props = {
  img: Yoda,
  name: "Yoda",
  gender: "Male",
  race: "@#$!",
  side: "Light",
};

export function previewPage() {
  let previewPageDiv = document.createElement("div");
  previewPageDiv.id = "main";

  const stl = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",

    borderTop: "solid 1px white",

    minHeight: "calc(100vh - 130px - 1px)",
    width: "calc(100vw)",
  };

  // --------- Main container ---------

  const containerStl = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    paddingTop: "35px",

    width: "60vw",
  };

  const container = document.createElement("div");
  Object.assign(container.style, containerStl);
  previewPageDiv.appendChild(container);

  container.appendChild(AddForm());

  container.appendChild(Title("p35", "Who's Your Favorite Star Wars"));

  // --------- Search ---------

  const search = SearchBar();
  search.style.marginTop = "29px";
  container.appendChild(search);

  // --------- Filter group ---------

  const filterGroupStl = {
    display: "flex",
    flexDirection: "row",
    alignSelf: "start",
    justifyContent: "space-between",
    gap: "12px",

    width: "100%",

    marginTop: "14px",
  };

  const filterGroup = document.createElement("div");
  Object.assign(filterGroup.style, filterGroupStl);

  filterGroup.appendChild(DropdownMenu());
  filterGroup.appendChild(DropdownMenu());
  filterGroup.appendChild(DropdownMenu());

  const add = Button("addBtn");
  filterGroup.appendChild(add);
  add.style.marginLeft = "auto";

  container.appendChild(filterGroup);

  // --------- Characters ---------

  container.appendChild(Card(props));

  Object.assign(previewPageDiv.style, stl);
  return previewPageDiv;
}
