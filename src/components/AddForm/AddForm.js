import { BorderLine } from "./../UI/BorderLine";
import { Button } from "./../UI/Button";
import { TextInput } from "../UI/TextInput";
import { DropdownMenu } from "../UI/DropdownMenu";
import { picPreview } from "./PicPreview";
import heroes from "./../../mockdata/heroes";

export function AddForm() {
  let AddFormDiv = document.createElement("div");
  AddFormDiv.id = `AddForm-${Math.random().toString(10).substr(2, 6)}`;

  const modalStl = {
    position: "absolute",

    top: "0",
    left: "0",

    zIndex: "2",
    height: "100vh",
    width: "100vw",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    display: "none",
    alignItems: "center",
    justifyContent: "center",
  };

  const modal = document.createElement("div");
  modal.id = "modal";
  Object.assign(modal.style, modalStl);
  modal.appendChild(AddFormDiv);

  modal.addEventListener("click", (event) => {
    if (event.target.id === "modal") {
      modal.style.display = "none";
    }
  });

  const stl = {
    position: "relative",

    display: "flex",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "black",
    color: "white",

    //height: "calc(722px - 4px - 32px)",
    width: "calc(1020px - 4px - 32px)",

    padding: "32px",

    border: "solid 2px white",
    borderRadius: "6px",
  };

  // --------- Close Button ---------

  const closeBtnStl = {
    position: "absolute",

    top: "23px",
    right: "23px",
  };

  const closeBtn = Button("clsBtn");
  Object.assign(closeBtn.style, closeBtnStl);

  AddFormDiv.appendChild(closeBtn);

  AddFormDiv.addEventListener("click", (event) => {
    if (event.target.closest(`#${closeBtn.id}`)) {
      modal.style.display = "none";
    }
  });

  // --------- Left Side ---------

  const form = document.createElement("form");

  const formStl = {
    display: "flex",
    flexDirection: "column",

    width: "445px",
    height: "651px",
  };

  Object.assign(form.style, formStl);

  const nameInput = TextInput("32px", "Add name");
  form.appendChild(nameInput);

  const filterGroup = document.createElement("div");
  Object.assign(filterGroup.style, {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "nowrap",

    marginTop: "25px",
  });

  const dropdownMenuOptions = {
    gender: {
      name: "Gender",
      values: ["Male", "Female", "NaH"],
    },
    race: {
      name: "Race",
      values: ["Human", "Wookiee", "Droid"],
    },
    side: {
      name: "Side",
      values: ["Dark", "Light", "Neutral"],
    },
  };

  filterGroup.appendChild(DropdownMenu(dropdownMenuOptions.gender, "slim"));
  filterGroup.appendChild(DropdownMenu(dropdownMenuOptions.race, "slim"));
  filterGroup.appendChild(DropdownMenu(dropdownMenuOptions.side, "slim"));

  form.appendChild(filterGroup);

  const descriptionInput = TextInput("144px", "Add description");
  form.appendChild(descriptionInput);
  descriptionInput.style.marginTop = "25px";

  const tagInput = TextInput("32px", "Add tag");
  form.appendChild(tagInput);
  tagInput.style.marginTop = "25px";

  // --------- Upload form ---------

  // --------- Save Button ---------

  const saveBtn = Button("large", "Save");

  const saveBtnStl = {
    position: "absolute",

    bottom: "45px",
    right: "30px",
  };

  Object.assign(saveBtn.style, saveBtnStl);

  form.appendChild(saveBtn);

  AddFormDiv.appendChild(form);

  // --------- Border Line ---------

  const line = BorderLine("vertical", "651px", "2px");
  line.style.margin = "auto";
  AddFormDiv.appendChild(line);

  // --------- Right Side ---------

  const preview = picPreview(heroes[1]);

  AddFormDiv.appendChild(preview);

  // --------- Return ---------

  Object.assign(AddFormDiv.style, stl);
  return modal;
}
