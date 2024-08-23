import { Title } from "../UI/Title";
import { Card } from "./../UI/Card";

export function picPreview(formData) {
  const picPreviewDiv = document.createElement("div");

  const rightWrapperStl = {
    display: "flex",
    flexDirection: "column",

    width: "445px",
    height: "651px",
  };

  // --------- Title ---------

  const title = Title("p14", "Preview");
  picPreviewDiv.appendChild(title);

  // --------- Preview container ---------

  const containerStl = {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",

    marginTop: "111px",

    width: "100%",
  };

  const container = document.createElement("div");
  Object.assign(container.style, containerStl);

  picPreviewDiv.appendChild(container);

  // --------- View select ---------

  const btnGroupStl = {
    display: "flex",
    flexDirection: "row",
    alignSelf: "start",

    gap: "10px",
  };

  const btnGroup = document.createElement("div");
  Object.assign(btnGroup.style, btnGroupStl);

  container.appendChild(btnGroup);

  function viewBtn(title) {
    const btn = document.createElement("button");
    btn.innerText = title;

    const stl = {
      height: "15px",
      width: "44px",

      color: "white",

      fontSize: "14px",

      padding: "0",
      margin: "0",
      border: "0",

      backgroundColor: "#000000",

      cursor: "pointer",
    };

    Object.assign(btn.style, stl);

    return btn;
  }

  btnGroup.appendChild(viewBtn("View 1"));
  btnGroup.appendChild(viewBtn("View 2"));

  // --------- Preview ---------

  const previewArea = document.createElement("div");

  const previewAreaStl = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    marginTop: "5px",

    width: "100%",
    height: "297px",
  };
  Object.assign(previewArea.style, previewAreaStl);

  function cardView(card) {
    const cardContainer = document.createElement("div");
    const cardContainerStl = {
      position: "relative",
      height: "297px",
      width: "216px",

      boxShadow: "0px 0px 125px -32px rgba(8, 42, 209, 1)",
    };
    Object.assign(cardContainer.style, cardContainerStl);

    const scaledCard = Card(card);

    const cardStl = {
      position: "absolute",
      top: "-127px",
      left: "-97px",
      alignSelf: "center",
      scale: "0.54",
    };
    Object.assign(scaledCard.style, cardStl);

    cardContainer.appendChild(scaledCard);

    return cardContainer;
  }

  previewArea.appendChild(cardView(formData));

  container.appendChild(previewArea);

  // --------- Return ---------
  Object.assign(picPreviewDiv.style, rightWrapperStl);

  return picPreviewDiv;
}
