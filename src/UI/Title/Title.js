export function Title(size, title) {
  let titleElement = "";

  const mainStl = {
    color: "#FFFFFF",
    fontFamily: "inherit",
  };

  const titleSizeStl = {
    h1plus: { fontWeight: "800", fontSize: "72px" },
    h1: { fontWeight: "800", fontSize: "48px" },
    p35: { fontWeight: "400", fontSize: "35px" },
    p30: { fontWeight: "400", fontSize: "30px" },
    p24: { fontWeight: "400", fontSize: "24px" },
    p20: { fontWeight: "400", fontSize: "20px" },
    p18: { fontWeight: "400", fontSize: "18px" },
    p16: { fontWeight: "400", fontSize: "16px" },
    p14: { fontWeight: "400", fontSize: "14px" },
    p9: { fontWeight: "400", fontSize: "9px" },
  };

  switch (size) {
    case "h1plus":
      titleElement = document.createElement("h1");
      Object.assign(titleElement.style, titleSizeStl.h1plus);
      break;
    case "h1":
      titleElement = document.createElement("h1");
      Object.assign(titleElement.style, titleSizeStl.h1);
      break;
    default:
      titleElement = document.createElement("p");
      switch (size) {
        case "p35":
          Object.assign(titleElement.style, titleSizeStl.p35);
          break;
        case "p30":
          Object.assign(titleElement.style, titleSizeStl.p30);
          break;
        case "p24":
          Object.assign(titleElement.style, titleSizeStl.p24);
          break;
        case "p20":
          Object.assign(titleElement.style, titleSizeStl.p20);
          break;
        case "p18":
          Object.assign(titleElement.style, titleSizeStl.p18);
          break;
        case "p16":
          Object.assign(titleElement.style, titleSizeStl.p16);
          break;
        case "p14":
          Object.assign(titleElement.style, titleSizeStl.p14);
          break;
        case "p9":
          Object.assign(titleElement.style, titleSizeStl.p9);
          break;

        default:
          break;
      }
      break;
  }

  titleElement.innerHTML = title ?? "noTitle";

  Object.assign(titleElement.style, mainStl);
  titleElement.id = `${size}-${Math.random().toString(10).substr(2, 6)}`;

  return titleElement;
}
