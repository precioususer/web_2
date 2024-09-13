import { characterDesc } from "./CharacterDesc";

export function characterModal(props) {
  const modalStl = {
    position: "absolute",

    top: "0",
    left: "0",

    zIndex: "2",
    height: "100vh",
    width: "calc(100vw)",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    display: "none",
    alignItems: "center",
    justifyContent: "center",
  };

  const modal = document.createElement("div");
  modal.id = "modal";
  Object.assign(modal.style, modalStl);

  const character = characterDesc(props);

  modal.appendChild(character);

  modal.addEventListener("click", (event) => {
    if (event.target.id === "modal") {
      modal.style.display = "none";
    }
  });

  // --------- Close button event ---------

  character.addEventListener("click", (event) => {
    if (event.target.closest(`#clsBtn`)) {
      modal.style.display = "none";
    }
  });

  // --------- Return ---------

  return modal;
}
