import searchImg from "./../../../public/icons/search.png";

export function SearchBar() {
  // Main Styles \/

  const mainStl = {
    searchBarElement: {
      position: "relative",

      width: "100%",
    },
    searchBarElementTextarea: {
      backgroundColor: "#000000",
      border: "1px solid #FFFFFF",
      borderRadius: "6px",

      width: `calc(100% - 14px - 35px - 2px)`,
      height: `calc(50px - 9px - 15px - 2px)`,

      paddingTop: "15px",
      paddingBottom: "9px",
      paddingLeft: "14px",
      paddingRight: "35px",

      fontFamily: "inherit",
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "24px",
      color: "#ffffff",
      cursor: "pointer",
    },
    searchBarElementAfter: {
      content: "",
      backgroundImage: `url(${searchImg})`,
      position: "absolute",
      top: "50%",
      right: "17px",
      transform: "translateY(-50%)",
      width: "22px",
      height: "20px",
      pointerEvents: "none",
    },
  };

  const create = (tag, className) => {
    const HTML = document.createElement(tag);

    HTML.id = `${className}-${Math.random().toString(10).substr(2, 6)}`;

    HTML.classList.add(className);
    Object.assign(HTML.style, mainStl[className]);

    if (className === "searchBarElementTextarea") {
      HTML.style.resize = "none";
    }

    return HTML;
  };

  const searchBarElement = create("div", "searchBarElement");
  const searchBarElementTextarea = create(
    "textarea",
    "searchBarElementTextarea"
  );
  searchBarElementTextarea.placeholder = "Search heroes";

  const searchBarElementAfter = create("span", "searchBarElementAfter");

  searchBarElement.appendChild(searchBarElementTextarea);
  searchBarElement.appendChild(searchBarElementAfter);

  return searchBarElement;
}
