import { Card } from "../UI/Card";
import { Slider } from "../UI/Slider";

export function Carousel(array) {
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
    },
  };

  // --------- Characters ---------

  const wrapper = document.createElement("div");
  carouselDiv.appendChild(wrapper);

  array.forEach((el, index) => {
    const characterCard = Card(el, index);
    wrapper.appendChild(characterCard);
    Object.assign(wrapper.style, mainStl.wrapperStl);
  });

  // --------- Slider ---------

  const slider = Slider(array.length);
  carouselDiv.appendChild(slider);

  // --------- Return ---------

  Object.assign(carouselDiv.style, mainStl.carouselStl);

  return carouselDiv;
}
