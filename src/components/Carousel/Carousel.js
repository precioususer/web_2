import { Card } from "../UI/Card";
import arrow from "./../../../public/icons/arrow.png";

export function Carousel(heroes) {
  const container = document.createElement("div");
  container.id = "carouselContainer";
  const containerStl = {
    display: "flex",
    flexDirection: "column",

    alignItems: "center",

    width: "1280px",

    marginBottom: "20px",
  };
  Object.assign(container.style, containerStl);

  function carouselDiv(data) {
    const carousel = document.createElement("div");
    carousel.id = "carousel";
    const carouselStl = {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      gap: "25px",

      width: "100%",

      overflowX: "auto",
      scrollSnapType: "x mandatory",
      overflow: "hidden",
    };
    Object.assign(carousel.style, carouselStl);

    //let pageIterator = 1;

    data.map((hero, id) => {
      const heroCard = Card(hero, id);
      heroCard.style.scrollSnapAlign = "start";
      carousel.appendChild(heroCard);
    });

    return carousel;
  }
  const carousel = carouselDiv(heroes);

  container.appendChild(carousel);

  // ---------

  let _PAGE = 1;
  let currentIndex = 1;
  const scrollDist = 435;

  function setIndex() {
    const scrollPosition = Math.round(
      document.getElementById("carousel").scrollLeft / scrollDist
    );

    currentIndex = scrollPosition;
  }

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

        cursor: "pointer",
      },
    };

    const prewBtn = document.createElement("button");
    const nextBtn = document.createElement("button");
    function pagePoint(page, i) {
      const point = document.createElement("div");
      point.id = `${i + 1}`;

      Object.assign(point.style, mainStl.pointStl);

      _PAGE - 1 === i
        ? (point.style.backgroundColor = "#3fc4fd")
        : (point.style.backgroundColor = "#FFFFFF");

      return point;
    }

    sliderDiv.appendChild(prewBtn);

    for (let i = 0; i < count / 3; i++) {
      const point = pagePoint(page, i);
      sliderDiv.appendChild(point);

      point.addEventListener("click", (event) => {
        const page = event.target.id;

        const scrollDist = 1280 * (page - 1);

        carousel.scrollTo({ left: scrollDist, behavior: "smooth" });

        setIndex();

        _PAGE = page;

        sliderRender(heroes.length, _PAGE);
      });
    }

    sliderDiv.appendChild(nextBtn);

    // ---------

    nextBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: scrollDist, behavior: "smooth" });

      setIndex();

      const scrollPosition = Math.round(
        document.getElementById("carousel").scrollLeft / scrollDist / 3
      );

      _PAGE = scrollPosition + 1;

      sliderRender(heroes.length, _PAGE);
    });

    prewBtn.addEventListener("click", () => {
      carousel.scrollBy({ left: -scrollDist, behavior: "smooth" });

      setIndex();

      const scrollPosition = Math.round(
        document.getElementById("carousel").scrollLeft / scrollDist / 3
      );

      _PAGE = scrollPosition + 1;

      sliderRender(heroes.length, _PAGE);
    });

    // ---------

    Object.assign(prewBtn.style, mainStl.leftBtnStl);
    Object.assign(nextBtn.style, mainStl.rightBtnStl);

    Object.assign(sliderDiv.style, mainStl.sliderDivStl);

    // ---------

    return sliderDiv;
  }

  function sliderRender(length, page) {
    if (container.lastChild.id === "slider") {
      container.removeChild(container.lastChild);
    }
    const carouselSlider = slider(length, page);
    container.appendChild(carouselSlider);
  }

  sliderRender(heroes.length, _PAGE);

  // ---------

  console.log(currentIndex);

  return container;
}
