export function Button(size, title) {
  let buttonElement = document.createElement("div");
  buttonElement.id = "button";

  const stl = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3fc4fd",

    borderRadius: "4px",
  };

  const btnSize = {
    small: { width: "85px", height: "30px", fontSize: "14px" },
    regular: { width: "139px", height: "54px", fontSize: "18px" },
    large: { width: "180px", height: "60px", fontSize: "20px" },
  };

  switch (size) {
    case "small":
      Object.assign(buttonElement.style, btnSize.small);
      break;
    case "regular":
      Object.assign(buttonElement.style, btnSize.regular);
      break;
    case "large":
      Object.assign(buttonElement.style, btnSize.large);
      break;

    default:
      Object.assign(buttonElement.style, btnSize.regular);
      break;
  }

  buttonElement.addEventListener("mouseover", () => {
    buttonElement.style.backgroundColor = "#0c92cc";
  });

  buttonElement.addEventListener("mousedown", () => {
    buttonElement.style.backgroundColor = "#03b3ff";
  });

  buttonElement.addEventListener("mouseup", () => {
    buttonElement.style.backgroundColor = "#0c92cc";
  });

  buttonElement.addEventListener("mouseleave", () => {
    buttonElement.style.backgroundColor = "#3fc4fd";
  });

  const buttonTitle = document.createElement("h3");
  buttonTitle.innerText = title ?? "default";
  buttonElement.appendChild(buttonTitle);

  Object.assign(buttonElement.style, stl);
  buttonTitle.style.fontSize = "inherit";

  return buttonElement;
}
