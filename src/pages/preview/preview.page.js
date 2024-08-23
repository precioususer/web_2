import img from "./../../../public/bg.png";
import { Title } from "./../../components/UI/Title";
import { SearchBar } from "./../../components/UI/SearchBar";
import { DropdownMenu } from "./../../components/UI/DropdownMenu";
import { Button } from "./../../components/UI/Button";
import { AddForm } from "../../components/AddForm/AddForm";
import mockData from "./../../mockdata/heroes";
import { Carousel } from "../../components/Carousel/Carousel";
import { characterModal } from "../../components/CharacterModal/CharacterModal";

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

  const addForm = AddForm();
  container.appendChild(addForm);

  container.appendChild(Title("p35", "Who's Your Favorite Star Wars"));

  // --------- Search ---------

  const search = SearchBar();
  search.style.marginTop = "29px";
  container.appendChild(search);

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

  const dropdownMenuOptions = {
    gender: {
      name: "Gender",
      values: ["Male", "Female", "NaH"],
    },
    race: {
      name: "Race",
      values: ["Human", "Wookiee", "Droid"],
    },
    side: {
      name: "Side",
      values: ["Dark", "Light", "Neutral"],
    },
  };

  filterGroup.appendChild(DropdownMenu(dropdownMenuOptions.gender));
  filterGroup.appendChild(DropdownMenu(dropdownMenuOptions.race));
  filterGroup.appendChild(DropdownMenu(dropdownMenuOptions.side));

  const add = Button("addBtn");
  filterGroup.appendChild(add);
  add.style.marginLeft = "auto";

  container.appendChild(filterGroup);

  // --------- Add form event ---------

  previewPageDiv.addEventListener("click", (event) => {
    if (event.target.closest(`#${add.id}`)) {
      addForm.style.display = "flex";
    }
  });

  // --------- Characters ---------

  const characters = Carousel(mockData);
  characters.style.marginTop = "29px";
  container.appendChild(characters);

  // --------- Card click event ---------

  const cards = characters.childNodes[0].childNodes;

  previewPageDiv.addEventListener("click", (event) => {
    const clickedElement = event.target;

    cards.forEach((card) => {
      const newClass = `card-${card.id}`;
      card.classList.add(newClass);

      if (clickedElement.closest(`.${newClass}`)) {
        const character = characterModal(mockData[card.id]);
        previewPageDiv.appendChild(character);
        character.style.display = "flex";
      }
    });
  });

  // --------- Return ---------

  Object.assign(previewPageDiv.style, stl);
  return previewPageDiv;
}
