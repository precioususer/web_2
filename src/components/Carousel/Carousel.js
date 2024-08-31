import { Card } from "../UI/Card";
import arrow from "./../../../public/icons/arrow.png";

export function Carousel(characters) {
  const carouselDiv = document.createElement("div");
  carouselDiv.id = "carousel";

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

      overflowX: "auto",
      scrollSnapType: "x mandatory",
      overflow: "hidden",
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

  let sectionIterator = 1;

  localState.forEach((card, index) => {
    if (index + 1 === 1 || index % 3 === 0) {
      card.style.scrollSnapAlign = "start";
      card.classList.add(`${sectionIterator}-next`);
      sectionIterator = sectionIterator + 1;
    }
    wrapper.appendChild(card);
  });

  // --------- Slider ---------

  let page = 1;

  function slider(count, page) {
    const sliderDiv = document.createElement("div");
    sliderDiv.id = "slider";

    const mainStl = {
      sliderDivStl: {
        display: "flex",
        flexDirection: "row",
        gap: "29px",
      },
      leftBtnStl: {
        backgroundImage: `url(${arrow})`,
        backgroundSize: "contain",

        border: "0",
        backgroundColor: "#000000",

        width: "20px",
        height: "11px",

        transform: "rotate(90deg)",

        cursor: "pointer",
      },
      rightBtnStl: {
        backgroundImage: `url(${arrow})`,
        backgroundSize: "contain",

        border: "0",
        backgroundColor: "#000000",

        width: "20px",
        height: "11px",

        transform: "rotate(-90deg)",
        cursor: "pointer",
      },
      pointStl: {
        backgroundColor: "#FFFFFF",

        width: "8px",
        height: "8px",

        borderRadius: "50%",
      },
    };

    const prewBtn = document.createElement("button");
    const nextBtn = document.createElement("button");

    sliderDiv.appendChild(prewBtn);

    for (let i = 0; i < count / 3; i++) {
      const point = document.createElement("div");
      sliderDiv.appendChild(point);
      Object.assign(point.style, mainStl.pointStl);

      page - 1 === i
        ? (point.style.backgroundColor = "#3fc4fd")
        : (point.style.backgroundColor = "#FFFFFF");
    }

    sliderDiv.appendChild(nextBtn);

    // ---------

    nextBtn.addEventListener("click", () => {
      if (page < characters.length / 3) {
        page = page + 1;
      }

      const nextSection = document.getElementsByClassName(`${page}-next`)[0];

      nextSection.scrollIntoView({ behavior: "smooth" });

      sliderRender(characters.length, page);
    });

    prewBtn.addEventListener("click", () => {
      if (page > 1) {
        page = page - 1;
      }

      const prewSection = document.getElementsByClassName(`${page}-next`)[0];

      prewSection.scrollIntoView({ behavior: "smooth" });

      sliderRender(characters.length, page);
    });

    // ---------

    Object.assign(prewBtn.style, mainStl.leftBtnStl);
    Object.assign(nextBtn.style, mainStl.rightBtnStl);

    Object.assign(sliderDiv.style, mainStl.sliderDivStl);

    // ---------

    return sliderDiv;
  }

  function sliderRender(length, page) {
    if (carouselDiv.lastChild.id === "slider") {
      carouselDiv.removeChild(carouselDiv.lastChild);
    }
    const carouselSlider = slider(length, page);
    carouselDiv.appendChild(carouselSlider);
  }

  sliderRender(characters.length, page);

  // --------- Return ---------

  Object.assign(carouselDiv.style, mainStl.carouselStl);

  return carouselDiv;
}
