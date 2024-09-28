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

  const searchState = {
    heroes: Array.from(heroes),
    filter: {
      search: [],
      gender: [],
      race: [],
      side: [],
    },
    set refresh(request) {
      this.heroes = Array.from(heroes);

      switch (request.type) {
        case "textarea":
          this.filter.search = request.body;
          break;
        case "gender":
          this.filter.gender = request.body;
          break;
        case "race":
          this.filter.race = request.body;
          break;
        case "side":
          this.filter.side = request.body;
          break;
        default:
          break;
      }

      const isFilled = Boolean(
        this.filter.search.length ||
          this.filter.gender.length ||
          this.filter.race.length ||
          this.filter.side.length
      );

      if (isFilled) {
        if (this.filter.search.length) {
          this.heroes = this.heroes.filter((hero) => {
            const name = Array.from(hero.name.toLowerCase());
            return this.filter.search.every((el, index) => el === name[index]);
          });
        }

        if (this.filter.race.length) {
          this.heroes = this.heroes.filter((hero) => {
            return this.filter.race.includes(hero["race"].toLowerCase());
          });
        }

        if (this.filter.gender.length) {
          this.heroes = this.heroes.filter((hero) => {
            return this.filter.gender.includes(hero["gender"].toLowerCase());
          });
        }

        if (this.filter.side.length) {
          this.heroes = this.heroes.filter((hero) => {
            return this.filter.side.includes(hero["side"].toLowerCase());
          });
        }
      }

      carouselRender(this.heroes);
    },
  };

  // ---

  const search = SearchBar();
  search.style.marginTop = "29px";
  container.appendChild(search);

  // ---

  search.firstChild.addEventListener("input", () => {
    const input = document.getElementById("searchBarElementTextarea");

    const searchRequest = {
      body: Array.from(input.value.toLowerCase()),
      type: "textarea",
    };

    searchState.refresh = searchRequest;
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

  // ---------

  function filterFn(event, type) {
    const dropdownMenuListTyped = document.getElementById(
      `dropDownList-${type}`
    );

    const filterRequest = {
      body: [],
      type: type,
    };

    dropdownMenuListTyped.childNodes.forEach((node) => {
      const checkbox = node.childNodes[0].childNodes[1];
      const value = checkbox.parentNode.innerText.toLowerCase();
      if (checkbox.checked) {
        filterRequest.body.push(value);
      }
    });

    searchState.refresh = filterRequest;
  }

  filterGroup.childNodes[0].addEventListener("click", (event) =>
    filterFn(event, "gender")
  );
  filterGroup.childNodes[1].addEventListener("click", (event) =>
    filterFn(event, "race")
  );
  filterGroup.childNodes[2].addEventListener("click", (event) =>
    filterFn(event, "side")
  );

  // --------- Add Button ---------

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

  carouselRender(searchState.heroes);

  // --------- Return ---------

  Object.assign(previewPageDiv.style, stl);
  return previewPageDiv;
}
