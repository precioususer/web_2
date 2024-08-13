import { BorderLine } from "./../UI/BorderLine";
import { Button } from "./../UI/Button";
import { SideWrapper } from "./SideWrapper";
import { TextInput } from "../UI/TextInput";
import { DropdownMenu } from "../UI/DropdownMenu";

export function AddForm() {
  let AddFormDiv = document.createElement("div");
  AddFormDiv.id = `AddForm-${Math.random().toString(10).substr(2, 6)}`;

  const stl = {
    position: "absolute",
    zIndex: "2",

    top: "50%",
    left: "50%",
    transform: "translateY(-50%) translateX(-50%)",

    display: "none",
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
      AddFormDiv.style.display = "none";
    }
  });

  // --------- Left Side ---------

  //const leftWrapperStl = {};

  const leftWrapper = SideWrapper();
  //Object.assign(leftWrapper.style, leftWrapperStl);

  const nameInput = TextInput("32px", "Add name");
  leftWrapper.appendChild(nameInput);

  const filterGroup = document.createElement("div");
  Object.assign(filterGroup.style, {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "nowrap",

    marginTop: "25px",
  });

  filterGroup.appendChild(DropdownMenu(null, "slim"));
  filterGroup.appendChild(DropdownMenu(null, "slim"));
  filterGroup.appendChild(DropdownMenu(null, "slim"));

  leftWrapper.appendChild(filterGroup);

  const descriptionInput = TextInput("144px", "Add description");
  leftWrapper.appendChild(descriptionInput);
  descriptionInput.style.marginTop = "25px";

  const tagInput = TextInput("32px", "Add tag");
  leftWrapper.appendChild(tagInput);
  tagInput.style.marginTop = "25px";

  AddFormDiv.appendChild(leftWrapper);

  // --------- Border Line ---------

  const line = BorderLine("vertical", "651px", "2px");
  line.style.margin = "auto";
  AddFormDiv.appendChild(line);

  // --------- Right Side ---------

  const rightWrapperStl = {};

  const rightWrapper = SideWrapper();
  Object.assign(rightWrapper.style, rightWrapperStl);

  AddFormDiv.appendChild(rightWrapper);

  // --------- Return ---------

  Object.assign(AddFormDiv.style, stl);
  return AddFormDiv;
}
