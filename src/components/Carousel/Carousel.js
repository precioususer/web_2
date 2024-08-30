import { Card } from "../UI/Card";
import { Slider } from "./Slider";

export function Carousel(characters) {
  const carouselDiv = document.createElement("div");

  const mainStl = {
    carouselStl: {
      display: "flex",
      flexDirection: "column",

      alignItems: "center",

      width: "1280px",
    },
    wrapperStl: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      gap: "25px",

      width: "100%",

      //overflow: "hidden",
      overflowY: "auto",
    },
  };

  // --------- Characters ---------

  const wrapper = document.createElement("div");
  carouselDiv.appendChild(wrapper);
  Object.assign(wrapper.style, mainStl.wrapperStl);

  const localState = characters.map((el, index) => Card(el, index));

  // ---------

  function emptyCard(id) {
    const card = document.createElement("div");
    card.id = id;
    const cardStl = {
      height: "550px",
      width: "410px",
      minWidth: "410px",

      pointerEvents: "none",
    };
    Object.assign(card.style, cardStl);

    return card;
  }

  const arrCondition = characters.length % 3;

  if (arrCondition % 3 === 2) {
    localState.push(emptyCard(localState.length));
  } else if (arrCondition % 3 === 1) {
    localState.push(
      emptyCard(localState.length),
      emptyCard(localState.length + 1)
    );
  }

  // ---------

  const page = 1;

  localState.forEach((card) => wrapper.appendChild(card));

  // --------- Slider ---------

  const slider = Slider(characters.length, page);
  carouselDiv.appendChild(slider);

  // --------- Return ---------

  Object.assign(carouselDiv.style, mainStl.carouselStl);

  return carouselDiv;
}
