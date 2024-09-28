import { Card } from "../UI/Card";
import { Title } from "../UI/Title";
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

  let currentDistance = 0;
  const scrollDist = 435;

  function setDist() {
    return (currentDistance = Math.round(
      document.getElementById("carousel").scrollLeft
    ));
  }

  if (heroes.length) {
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

      data.map((hero, id) => {
        const heroCard = Card(hero, id);
        heroCard.style.scrollSnapAlign = "start";
        carousel.appendChild(heroCard);
      });

      carousel.addEventListener("scroll", () => {
        setDist();
        sliderRender(heroes.length, currentDistance);
      });

      return carousel;
    }
    const carousel = carouselDiv(heroes);

    container.appendChild(carousel);

    // ---------

    function slider(count, dist) {
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

      function pagePoint(dist, i) {
        const point = document.createElement("div");
        point.id = `${i + 1}`;

        Object.assign(point.style, mainStl.pointStl);

        Math.round(dist / scrollDist / 3) === i
          ? (point.style.backgroundColor = "#3fc4fd")
          : (point.style.backgroundColor = "#FFFFFF");

        return point;
      }

      sliderDiv.appendChild(prewBtn);

      for (let i = 0; i < count / 3; i++) {
        const point = pagePoint(dist, i);
        sliderDiv.appendChild(point);

        point.addEventListener("click", (event) => {
          const page = event.target.id;

          const scrollDist = 1280 * (page - 1);

          carousel.scrollTo({ left: scrollDist, behavior: "smooth" });

          sliderRender(heroes.length, setDist());
        });
      }

      sliderDiv.appendChild(nextBtn);

      // ---------

      nextBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: scrollDist, behavior: "smooth" });

        sliderRender(heroes.length, setDist());
      });

      prewBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollDist, behavior: "smooth" });

        sliderRender(heroes.length, setDist());
      });

      // ---------

      Object.assign(prewBtn.style, mainStl.leftBtnStl);
      Object.assign(nextBtn.style, mainStl.rightBtnStl);

      Object.assign(sliderDiv.style, mainStl.sliderDivStl);

      // ---------

      return sliderDiv;
    }

    function sliderRender(length, dist) {
      if (container.lastChild.id === "slider") {
        container.removeChild(container.lastChild);
      }
      const carouselSlider = slider(length, dist);
      container.appendChild(carouselSlider);
    }

    sliderRender(heroes.length, currentDistance);
  } else {
    const res = Title("h1", "No result :(");
    container.appendChild(res);
  }

  return container;
}
