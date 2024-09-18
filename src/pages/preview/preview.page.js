import img from "./../../../public/bg.png";
import { Title } from "./../../components/UI/Title";
import { SearchBar } from "./../../components/UI/SearchBar";
import { DropdownMenu } from "./../../components/UI/DropdownMenu";
import { Button } from "./../../components/UI/Button";
import { AddForm } from "../../components/AddForm/AddForm";
import { Carousel } from "../../components/Carousel/Carousel";
import heroes from "./../../mockdata/heroes";

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

    width: "1280px",
  };

  const container = document.createElement("div");
  Object.assign(container.style, containerStl);
  previewPageDiv.appendChild(container);

  const app = document.getElementById("app");

  container.appendChild(Title("p35", "Who's Your Favorite Star Wars"));

  // --------- Search ---------

  let searchState = Array.from(heroes);

  const search = SearchBar(carouselRender, searchState);
  search.style.marginTop = "29px";
  container.appendChild(search);

  // ---

  search.firstChild.addEventListener("input", (event) => {
    searchState = Array.from(heroes);
    const searchRequest = Array.from(event.target.value.toLowerCase());

    searchState = searchState.filter((hero) => {
      const name = Array.from(hero.name.toLowerCase());

      return searchRequest.every((el, index) => el === name[index]);
    });

    carouselRender(searchState);
  });

  // --------- Filter group ---------

  const filterGroupStl = {
    position: "relative",

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

  // ---------

  const dropdownMenuOptions = {
    gender: {
      name: "Gender",
      values: ["Male", "Female", "NaH"],
    },
    race: {
      name: "Race",
      values: [],
    },
    side: {
      name: "Side",
      values: ["Dark", "Light", "Neutral"],
    },
  };

  heroes.forEach((el) => {
    if (!dropdownMenuOptions.race.values.includes(`${el.race}`)) {
      dropdownMenuOptions.race.values.push(el.race);
    }
  });

  // ---------

  filterGroup.appendChild(DropdownMenu(dropdownMenuOptions.gender, null, true));
  filterGroup.appendChild(DropdownMenu(dropdownMenuOptions.race, null, true));
  filterGroup.appendChild(DropdownMenu(dropdownMenuOptions.side, null, true));

  const add = Button("addBtn");
  filterGroup.appendChild(add);
  add.style.marginLeft = "auto";
  add.id = "AddBtn";

  container.appendChild(filterGroup);

  // --------- Add form event ---------

  previewPageDiv.addEventListener("click", (event) => {
    if (event.target.closest(`#${add.id}`)) {
      const addForm = AddForm(carouselRender);
      app.appendChild(addForm);
    }
  });

  // --------- Characters ---------

  function carouselRender(heroes) {
    if (container.lastChild.id === "carouselContainer") {
      container.removeChild(container.lastChild);
    }

    const characters = Carousel(heroes);
    characters.style.marginTop = "29px";
    container.appendChild(characters);
  }

  carouselRender(searchState);

  // --------- Return ---------

  Object.assign(previewPageDiv.style, stl);
  return previewPageDiv;
}
