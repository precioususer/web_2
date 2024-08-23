import addImg from "./../../../public/icons/add.png";
import clsImg from "./../../../public/icons/cls.png";

export function Button(size, title) {
  const buttonElement = document.createElement("div");

  if (size === "clsBtn") {
    buttonElement.id = size;
  } else {
    buttonElement.id = `${title}`;
  }

  const buttonTitle = document.createElement("h3");
  const btnAfter = document.createElement("span");

  const mainStl = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3fc4fd",
    color: "#000000",

    borderRadius: "4px",
  };

  const btnSizeStl = {
    small: {
      width: "85px",
      minHeight: "30px",
      height: "30px",
      fontSize: "14px",
    },
    smallGray: {
      width: "85px",
      minHeight: "30px",
      height: "30px",
      fontSize: "14px",
      backgroundColor: "#C4C4C4",
    },
    regular: {
      width: "139px",
      minHeight: "54px",
      height: "54px",
      fontSize: "18px",
    },
    large: {
      width: "180px",
      minHeight: "60px",
      height: "60px",
      fontSize: "20px",
    },
  };

  const addBtnStl = {
    btn: {
      position: "relative",
      display: "block",

      backgroundColor: "#000000",
      border: "1px solid #FFFFFF",
      borderRadius: "6px",

      width: "calc(140px - 13px - 12px)",
      height: "calc(45px - 11px - 11px)",

      paddingTop: "11px",
      paddingBottom: "11px",
      paddingLeft: "13px",
      paddingRight: "12px",

      fontFamily: "inherit",
      fontWeight: "500",
      fontSize: "18px",
      textAlign: "left",
      lineHeight: "20px",
      color: "#ffffff",

      cursor: "pointer",
    },
    after: {
      backgroundImage: `url(${addImg})`,
      backgroundSize: "contain",
      position: "absolute",
      top: "50%",
      right: "15px",
      transform: "translateY(-50%)",
      width: "11px",
      height: "11px",
    },
  };

  const clsBtnStl = {
    btn: {
      position: "relative",
      display: "block",

      backgroundColor: "#000000",
      border: "1px solid #FFFFFF",
      borderRadius: "50%",

      width: "30px",
      height: "30px",

      overflow: "hidden",

      cursor: "pointer",
    },
    after: {
      backgroundImage: `url(${clsImg})`,
      backgroundSize: "contain",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateY(-50%) translateX(-50%)",
      width: "11px",
      height: "11px",

      cursor: "pointer",
    },
  };

  switch (size) {
    case "addBtn":
      Object.assign(btnAfter.style, addBtnStl.after);
      buttonElement.appendChild(btnAfter);
      Object.assign(buttonElement.style, addBtnStl.btn);

      buttonTitle.innerText = "Add";
      buttonElement.appendChild(buttonTitle);

      buttonElement.addEventListener("mouseover", () => {
        buttonElement.style.backgroundColor = "#171717";
      });

      buttonElement.addEventListener("mousedown", () => {
        buttonElement.style.backgroundColor = "#292929";
      });

      buttonElement.addEventListener("mouseup", () => {
        buttonElement.style.backgroundColor = "#171717";
      });

      buttonElement.addEventListener("mouseleave", () => {
        buttonElement.style.backgroundColor = "#000000";
      });

      break;

    case "clsBtn":
      Object.assign(btnAfter.style, clsBtnStl.after);
      buttonElement.appendChild(btnAfter);
      Object.assign(buttonElement.style, clsBtnStl.btn);

      buttonElement.addEventListener("mouseover", () => {
        buttonElement.style.backgroundColor = "#171717";
      });

      buttonElement.addEventListener("mousedown", () => {
        buttonElement.style.backgroundColor = "#292929";
      });

      buttonElement.addEventListener("mouseup", () => {
        buttonElement.style.backgroundColor = "#171717";
      });

      buttonElement.addEventListener("mouseleave", () => {
        buttonElement.style.backgroundColor = "#000000";
      });
      break;

    default:
      Object.assign(buttonElement.style, mainStl);
      switch (size) {
        case "small":
          Object.assign(buttonElement.style, btnSizeStl.small);
          break;
        case "small-gray":
          Object.assign(buttonElement.style, btnSizeStl.smallGray);

          break;
        case "regular":
          Object.assign(buttonElement.style, btnSizeStl.regular);
          break;
        case "large":
          Object.assign(buttonElement.style, btnSizeStl.large);
          break;

        default:
          Object.assign(buttonElement.style, btnSizeStl.regular);
          break;
      }

      buttonTitle.innerText = title ?? "default";
      buttonElement.appendChild(buttonTitle);

      buttonTitle.style.fontSize = "inherit";

      switch (size) {
        case "small-gray":
          buttonElement.addEventListener("mouseover", () => {
            buttonElement.style.backgroundColor = "#777777";
          });

          buttonElement.addEventListener("mousedown", () => {
            buttonElement.style.backgroundColor = "#888888";
          });

          buttonElement.addEventListener("mouseup", () => {
            buttonElement.style.backgroundColor = "#777777";
          });

          buttonElement.addEventListener("mouseleave", () => {
            buttonElement.style.backgroundColor = "#C4C4C4";
          });
          break;

        default:
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
          break;
      }

      break;
  }

  return buttonElement;
}
