import { BorderLine } from "./BorderLine";
import { Title } from "./Title";

export function Card(props, id) {
  const cardDiv = document.createElement("div");
  cardDiv.id = id;

  const mainStl = {
    position: "relative",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    height: "550px",
    width: "410px",

    borderRadius: "6px",
    overflow: "hidden",

    backgroundColor: "#000000",
  };

  //-------- Title --------

  const titleStl = {
    position: "absolute",

    top: "29px",
    left: "26px",

    color: "#FFFFFF",
  };

  const cardTitle = Title("p30", props.name);
  Object.assign(cardTitle.style, titleStl);
  cardDiv.appendChild(cardTitle);

  //-------- Image --------

  const imgStl = {
    height: "400px",
    width: "100%",
  };

  const cardImg = document.createElement("img");
  cardImg.src = props.img;
  Object.assign(cardImg.style, imgStl);
  cardDiv.appendChild(cardImg);

  //-------- Information --------

  const wrapperInfoStl = {
    display: "flex",
    flexDirection: "column",
    gap: "14px",

    width: "357px",

    marginTop: "12px",
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

  heroPropGender.appendChild(Title("p18", "Gender"));
  heroPropGender.appendChild(Title("p18", props.gender));
  wrapperInfo.appendChild(heroPropGender);
  wrapperInfo.appendChild(BorderLine("horizontal", "100%"));
  heroPropRace.appendChild(Title("p18", "Race"));
  heroPropRace.appendChild(Title("p18", props.race));
  wrapperInfo.appendChild(heroPropRace);
  wrapperInfo.appendChild(BorderLine("horizontal", "100%"));
  heroPropSide.appendChild(Title("p18", "Side"));
  heroPropSide.appendChild(Title("p18", props.side));
  wrapperInfo.appendChild(heroPropSide);

  cardDiv.appendChild(wrapperInfo);

  //-------- Return --------

  Object.assign(cardDiv.style, mainStl);
  return cardDiv;
}
