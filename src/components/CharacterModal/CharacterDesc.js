import { Title } from "../UI/Title";
import { Button } from "../UI/Button";
import { BorderLine } from "../UI/BorderLine";

export function characterDesc(props) {
  let characterModalDiv = document.createElement("div");
  characterModalDiv.id = `characterModal-${Math.random().toString(10).substr(2, 6)}`;

  const stl = {
    position: "relative",

    display: "flex",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "black",
    color: "white",

    height: "calc(700px - 4px)",
    width: "calc(1000px - 4px)",

    //padding: "32px",

    border: "solid 2px white",
    borderRadius: "6px",
  };

  // --------- Close Button ---------

  const closeBtnStl = {
    position: "absolute",

    zIndex: "4",

    top: "23px",
    right: "23px",
  };

  const closeBtn = Button("clsBtn");
  Object.assign(closeBtn.style, closeBtnStl);

  characterModalDiv.appendChild(closeBtn);

  // --------- Left Side ---------

  const info = document.createElement("div");

  const infoStl = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    height: "calc(100% - 4px - 50px - 42px)",
    width: "calc(373px - 4px - 42px)",

    paddingTop: "50px",
    paddingLeft: "42px",
    paddingBottom: "42px",
  };

  Object.assign(info.style, infoStl);

  characterModalDiv.appendChild(info);

  // --------- Title ---------

  const nameTitle = Title("h1", props.name);

  info.appendChild(nameTitle);

  // --------- Details ---------

  const wrapperInfoStl = {
    display: "flex",
    flexDirection: "column",
    gap: "14px",

    width: "253px",
  };

  const wrapperInfo = document.createElement("div");
  Object.assign(wrapperInfo.style, wrapperInfoStl);

  const heroPropStl = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  const heroPropGender = document.createElement("div");
  const heroPropRace = document.createElement("div");
  const heroPropSide = document.createElement("div");
  Object.assign(heroPropGender.style, heroPropStl);
  Object.assign(heroPropRace.style, heroPropStl);
  Object.assign(heroPropSide.style, heroPropStl);

  heroPropGender.appendChild(Title("p18", props.gender));
  heroPropGender.appendChild(Title("p18", "Gender"));
  wrapperInfo.appendChild(heroPropGender);
  wrapperInfo.appendChild(BorderLine("horizontal", "100%"));
  heroPropRace.appendChild(Title("p18", "Race"));
  heroPropRace.appendChild(Title("p18", props.race));
  wrapperInfo.appendChild(heroPropRace);
  wrapperInfo.appendChild(BorderLine("horizontal", "100%"));
  heroPropSide.appendChild(Title("p18", "Side"));
  heroPropSide.appendChild(Title("p18", props.side));
  wrapperInfo.appendChild(heroPropSide);

  info.appendChild(wrapperInfo);

  // --------- Description ---------

  const desc = Title("p20", props.desc);

  desc.style.lineHeight = "35px";

  info.appendChild(desc);

  // --------- Right Side ---------

  const rightContainer = document.createElement("div");

  const rightContainerStl = {
    position: "relative",
    height: "calc(100% - 2px)",
    width: "627px",

    overflow: "hidden",
  };

  Object.assign(rightContainer.style, rightContainerStl);

  characterModalDiv.appendChild(rightContainer);

  const image = document.createElement("img");
  image.src = props.img;
  image.alt = "Here can be picture of hero, or villain, or whatever you want.";

  const imageStl = {
    height: "calc(100% - 2px)",
  };

  Object.assign(image.style, imageStl);

  rightContainer.appendChild(image);

  // --------- Fade Element ---------

  const fade = document.createElement("div");

  const fadeStl = {
    position: "absolute",
    top: "0",
    left: "0",

    width: "100%",
    height: "100%",

    background:
      "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 12%)",
    pointerEvents: "none",
  };

  Object.assign(fade.style, fadeStl);

  rightContainer.appendChild(fade);

  Object.assign(characterModalDiv.style, stl);
  return characterModalDiv;
}
