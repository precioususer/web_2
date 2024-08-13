import { Title } from "./Title";

export function TextInput(height, title, counter) {
  console.log(counter);

  const mainStl = {
    textInputElement: {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
    },
    textInput: {
      backgroundColor: "#000000",
      border: "1px solid #FFFFFF",
      borderRadius: "6px",

      width: `calc(100% - 14px - 14px - 2px)`,
      height: `calc(${height} - 3px - 3px - 2px)`,
      resize: "none",

      paddingTop: "3px",
      paddingBottom: "3px",
      paddingLeft: "14px",
      paddingRight: "14px",

      fontFamily: "inherit",
      fontWeight: "500",
      fontSize: "18px",
      //lineHeight: "24px",
      color: "#ffffff",
      cursor: "pointer",
    },
  };

  const textInputElement = document.createElement("div");
  textInputElement.id = `input-${Math.random().toString(10).substr(2, 6)}`;

  if (title) {
    textInputElement.appendChild(Title("p14", title));
  }

  const textInput = document.createElement("textarea");
  Object.assign(textInput.style, mainStl.textInput);

  textInputElement.appendChild(textInput);
  Object.assign(textInputElement.style, mainStl.textInputElement);

  return textInputElement;
}
