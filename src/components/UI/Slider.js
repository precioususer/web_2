import arrow from "./../../../public/icons/arrow.png";

export function Slider(count, size) {
  const sliderDiv = document.createElement("div");

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
    },
    rightBtnStl: {
      backgroundImage: `url(${arrow})`,
      backgroundSize: "contain",

      border: "0",
      backgroundColor: "#000000",

      width: "20px",
      height: "11px",

      transform: "rotate(-90deg)",
    },
    pointStl: {
      backgroundColor: "#FFFFFF",

      width: "8px",
      height: "8px",

      borderRadius: "50%",
    },
  };

  if (size === "slim") {
    mainStl.sliderDivStl = {
      display: "flex",
      flexDirection: "row",
      gap: "12px",
    };
    mainStl.leftBtnStl = {
      backgroundImage: `url(${arrow})`,
      backgroundSize: "contain",

      border: "0",
      backgroundColor: "#000000",

      width: "8px",
      height: "4px",

      transform: "rotate(90deg)",
    };
    mainStl.rightBtnStl = {
      backgroundImage: `url(${arrow})`,
      backgroundSize: "contain",

      border: "0",
      backgroundColor: "#000000",

      width: "8px",
      height: "4px",

      transform: "rotate(-90deg)",
    };
    mainStl.pointStl = {
      backgroundColor: "#FFFFFF",

      width: "4px",
      height: "4px",

      borderRadius: "50%",
    };
  }

  const leftBtn = document.createElement("button");
  const rightBtn = document.createElement("button");

  sliderDiv.appendChild(leftBtn);

  for (let i = 0; i < count / 3; i++) {
    const point = document.createElement("div");
    sliderDiv.appendChild(point);
    Object.assign(point.style, mainStl.pointStl);
  }

  sliderDiv.appendChild(rightBtn);

  Object.assign(leftBtn.style, mainStl.leftBtnStl);
  Object.assign(rightBtn.style, mainStl.rightBtnStl);

  Object.assign(sliderDiv.style, mainStl.sliderDivStl);

  return sliderDiv;
}
