import arrowImg from "./../../../public/icons/arrow.png";
import checkBoxImg from "./../../../public/icons/checkbox.png";

export function DropDown(props) {
  // Default data \/

  const defaultObj = {
    name: "Dropdown",
    values: ["Option 1", "Option 2", "Option 3"],
  };

  // Main Styles \/

  const mainStl = {
    dropdownElement: {
      position: "relative",
      width: "140px",
    },
    dropdownButton: {
      position: "relative",
      display: "block",
      textAlign: "left",
      backgroundColor: "#000000",
      border: "1px solid #FFFFFF",
      borderRadius: "6px",
      width: "100%",
      height: "45px",
      paddingTop: "11px",
      paddingBottom: "13px",
      paddingLeft: "14px",
      paddingRight: "35px",
      fontFamily: "inherit",
      fontWeight: "500",
      fontSize: "18px",
      lineHeight: "20px",
      color: "#ffffff",
      cursor: "pointer",
    },
    dropdownButtonAfter: {
      backgroundImage: `url(${arrowImg})`,
      position: "absolute",
      top: "50%",
      right: "15px",
      transform: "translateY(-50%)",
      width: "14px",
      height: "8px",
      pointerEvents: "none",
    },
    dropdownList: {
      display: "none",
      flexDirection: "column",
      gap: "15px",
      position: "absolute",
      top: "52px",
      margin: "0",
      padding: "20px 14px",
      listStyleType: "none",
      backgroundColor: "#000000",
      overflow: "hidden",
      border: "1px solid #FFFFFF",
      borderRadius: "6px",
      width: "calc(100% - 2px - 14px * 2)",
      zIndex: "1",
    },
    dropdownItem: {
      margin: "0",
      padding: "0",
      fontWeight: "500",
      fontSize: "14px",
      color: "#ffffff",
    },
    dropdownItemLabel: {
      display: "flex",
      flexDirection: "row",
      gap: "12px",
      fontWeight: "500",
      fontSize: "14px",
      color: "#494949",
      transition: "border-color 0.3s ease",
    },
    realCheckbox: {
      display: "none",
    },
    customCheckbox: {
      position: "relative",
      height: "calc(15px - 3px)",
      width: "calc(15px - 3px)",
      border: "1.5px solid #ffffff",
      borderRadius: "4px",
    },
    customCheckboxAfter: {
      display: "none",
      borderRadius: "4px",
      backgroundImage: `url(${checkBoxImg})`,
      backgroundSize: "contain",
      position: "absolute",
      top: "-1.5px",
      left: "-1.5px",
      width: "15px",
      height: "15px",
      pointerEvents: "none",
    },
  };

  // CREATE function for creating HTML elements with needed actions and styles \/

  const create = (tag, className) => {
    const HTML = document.createElement(tag);

    HTML.id = `${className}-${Math.random().toString(10).substr(2, 6)}`;

    HTML.classList.add(className);
    Object.assign(HTML.style, mainStl[className]);

    // Menu opening \/

    if (className === "dropdownButton") {
      HTML.addEventListener("click", () => {
        const dropdownMenu = HTML.parentNode.lastChild;

        if (dropdownMenu.style.display === "none") {
          dropdownMenu.style.display = "flex";
        } else {
          dropdownMenu.style.display = "none";
        }
      });
    }

    if (className === "dropdownItemLabel") {
      // Hover effect for custom checkbox \/

      HTML.addEventListener("mouseover", () => {
        HTML.firstChild.style.borderColor = "#3fc4fd";
      });

      HTML.addEventListener("mouseout", () => {
        HTML.firstChild.style.borderColor = "#FFFFFF";
      });

      // Actions when some option is checked

      HTML.addEventListener("click", () => {
        const realCheckbox = HTML.querySelector(".realCheckbox");
        const customCheckboxAfter = HTML.querySelector(".customCheckboxAfter");
        const title = HTML.querySelector("h3");
        const buttonTitle =
          HTML.parentNode.parentNode.parentNode.firstChild.firstChild;
        const dropdownMenu = HTML.parentNode.parentNode.parentNode.lastChild;

        HTML.parentNode.parentNode.addEventListener("click", () => {
          // Showing "V" logic \/

          if (realCheckbox.checked) {
            customCheckboxAfter.style.display = "block";
            state.name = title.innerText;
            buttonTitle.innerText = state.name;
          } else {
            customCheckboxAfter.style.display = "none";
          }

          // Closing Menu when smthing was choosen logic \/

          if (dropdownMenu.style.display === "none") {
            dropdownMenu.style.display = "flex";
          } else {
            dropdownMenu.style.display = "none";
          }
        });
      });
    }

    return HTML;
  };

  // Set local state \/

  const state = { ...defaultObj, ...props };

  //Creating HTML structure \/

  const dropdownElement = create("div", "dropdownElement");

  const dropdownButton = create("button", "dropdownButton");
  const dropdownButtonTitle = create("h3", "dropdownButtonTitle");

  dropdownButtonTitle.textContent = state.name;
  dropdownButton.appendChild(dropdownButtonTitle);
  dropdownElement.appendChild(dropdownButton);

  const dropdownButtonAfter = create("span", "dropdownButtonAfter");
  dropdownButton.appendChild(dropdownButtonAfter);

  const dropdownList = create("ul", "dropdownList");
  dropdownList.setAttribute("name", state.name.toLowerCase());
  dropdownElement.appendChild(dropdownList);

  //Creating list of items \/

  state.values.forEach((element) => {
    const dropdownItem = create("li", "dropdownItem");
    const dropdownItemLabel = create("label", "dropdownItemLabel");

    const realCheckbox = create("input", "realCheckbox");
    realCheckbox.type = "radio";
    realCheckbox.setAttribute("name", state.name.toLowerCase());

    const customCheckbox = create("span", "customCheckbox");
    const customCheckboxAfter = create("span", "customCheckboxAfter");

    const title = create("h3");
    title.innerText = element;

    customCheckbox.appendChild(customCheckboxAfter);

    dropdownItemLabel.append(customCheckbox, realCheckbox, title);

    dropdownItem.appendChild(dropdownItemLabel);

    dropdownList.appendChild(dropdownItem);
  });

  return dropdownElement;
}
