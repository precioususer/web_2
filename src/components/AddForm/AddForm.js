import { BorderLine } from "./../UI/BorderLine";
import { Button } from "./../UI/Button";
import { TextInput } from "../UI/TextInput";
import { DropdownMenu } from "../UI/DropdownMenu";
import { picPreview } from "./PicPreview";
import { urlModal } from "./UrlModal";
import heroes from "../../mockdata/heroes";
import { Title } from "../UI/Title";

export function AddForm(carouselRender) {
  let AddFormDiv = document.createElement("div");
  AddFormDiv.id = `AddForm-${Math.random().toString(10).substr(2, 6)}`;

  const modalStl = {
    position: "absolute",

    top: "0",
    left: "0",

    zIndex: "2",
    height: "100vh",
    width: "calc(100%)",

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

  // --------- Form state ---------

  const formState = {
    img: "",
    name: "",
    gender: "",
    race: "",
    side: "",
    desc: "",
    tag: "",
  };

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

  const genderSelect = DropdownMenu(dropdownMenuOptions.gender, "slim");
  filterGroup.appendChild(genderSelect);

  const raceSelect = DropdownMenu(dropdownMenuOptions.race, "slim");
  filterGroup.appendChild(raceSelect);

  const sideSelect = DropdownMenu(dropdownMenuOptions.side, "slim");
  filterGroup.appendChild(sideSelect);

  form.appendChild(filterGroup);

  const descriptionInput = TextInput("144px", "Add description");
  form.appendChild(descriptionInput);
  descriptionInput.style.marginTop = "25px";

  const tagInput = TextInput("32px", "Add tag");
  form.appendChild(tagInput);
  tagInput.style.marginTop = "25px";

  // --------- Upload form ---------

  const picUpload = document.createElement("div");

  const picUploadStl = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",

    width: "167px",

    marginTop: "41px",
    padding: "10px",

    backgroundColor: "#000000",

    border: "solid 1px #3fc4fd",
    borderRadius: "4px",
  };

  Object.assign(picUpload.style, picUploadStl);

  form.appendChild(picUpload);

  // ---

  const buttonStl = {
    position: "relative",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#000000",

    border: "solid 1px #3fc4fd",
    borderRadius: "4px",

    width: "100%",
    height: "32px",

    color: "#FFFFFF",
    fontSize: "18px",

    cursor: "pointer",
  };

  //------

  const chooseBtn = document.createElement("button");
  chooseBtn.type = "file";
  chooseBtn.innerText = "Choose File";
  Object.assign(chooseBtn.style, buttonStl);

  const hiddenInputStl = {
    position: "absolute",
    opacity: "0",
    width: "100%",
    height: "100%",
    cursor: "pointer",
  };

  const hiddenInput = document.createElement("input");
  hiddenInput.type = "file";
  Object.assign(hiddenInput.style, hiddenInputStl);
  chooseBtn.appendChild(hiddenInput);

  picUpload.appendChild(chooseBtn);

  hiddenInput.addEventListener("change", (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        const img = event.target.result;
        formState.img = img;
        previewRender(formState);
      };
      fileReader.readAsDataURL(file);
    }
  });

  //-----

  const urlBtn = document.createElement("button");
  urlBtn.innerText = "Upload by URL";

  const urlInput = urlModal(formState, previewRender);
  form.appendChild(urlInput);

  urlBtn.addEventListener("click", (event) => {
    event.preventDefault();
    urlInput.style.display = "flex";
  });

  Object.assign(urlBtn.style, buttonStl);
  picUpload.appendChild(urlBtn);

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

  saveBtn.addEventListener("click", (event) => {
    event.preventDefault();

    if (
      formState.desc &&
      formState.gender &&
      formState.img &&
      formState.name &&
      formState.race &&
      formState.side
    ) {
      heroes.push(formState);
      carouselRender(heroes);
    } else {
      const filteredState = Object.fromEntries(
        Object.entries(formState).filter(([key, value]) => value == "")
      );

      fillError(filteredState);
    }
  });

  // --------- Fill Error ---------

  function fillError(errors) {
    const app = document.getElementById("app");

    // ---------

    const modalStl = {
      position: "absolute",

      top: "0",
      left: "0",

      zIndex: "4",
      height: "100%",
      width: "100%",

      backgroundColor: "rgba(0, 0, 0, 0.6)",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };

    const modal = document.createElement("div");
    modal.id = "errorModal";
    Object.assign(modal.style, modalStl);

    app.appendChild(modal);

    modal.addEventListener("click", () =>
      app.removeChild(document.getElementById("errorModal"))
    );

    // ---------

    const errorModalStl = {
      display: "flex",
      flexDirection: "column",
      gap: "10px",

      backgroundColor: "rgba(255, 0, 0, 0.5)",

      border: "solid 2px white",
      borderRadius: "6px",

      padding: "10px",
    };

    const errorModal = document.createElement("div");

    const title = Title("p30", "Please fill this fields:");
    errorModal.appendChild(title);

    Object.entries(errors).map(([key, value]) => {
      let errorType = "";
      switch (key) {
        case "desc":
          errorType = "Description";
          break;

        case "gender":
          errorType = "Gender";
          break;

        case "img":
          errorType = "Image";
          break;

        case "name":
          errorType = "Name";
          break;

        case "side":
          errorType = "Side";
          break;

        case "race":
          errorType = "Race";
          break;

        default:
          break;
      }

      const errorTitle = Title("p24", errorType);
      errorModal.appendChild(errorTitle);
    });

    Object.assign(errorModal.style, errorModalStl);

    modal.appendChild(errorModal);

    return errorModal;
  }

  // --------- Border Line ---------

  const line = BorderLine("vertical", "651px", "2px");
  line.style.margin = "auto";
  AddFormDiv.appendChild(line);

  // --------- Right Side ---------

  const preview = picPreview(formState);
  AddFormDiv.appendChild(preview);

  function previewRender(state) {
    preview.innerHTML = "";
    AddFormDiv.removeChild(AddFormDiv.lastChild);
    AddFormDiv.appendChild(picPreview(state));
  }

  previewRender(formState);

  // --------- Actions ---------

  nameInput.addEventListener("input", (event) => {
    formState.name = event.target.value;
    previewRender(formState);
  });

  genderSelect.addEventListener("click", (event) => {
    if (event.target.closest("#dropdownItem")) {
      const value = event.target.parentNode.lastChild.childNodes;
      formState.gender = value[0].data;
      previewRender(formState);
    }
  });

  raceSelect.addEventListener("click", (event) => {
    if (event.target.closest("#dropdownItem")) {
      const value = event.target.parentNode.lastChild.childNodes;
      formState.race = value[0].data;
      previewRender(formState);
    }
  });

  sideSelect.addEventListener("click", (event) => {
    if (event.target.closest("#dropdownItem")) {
      const value = event.target.parentNode.lastChild.childNodes;
      formState.side = value[0].data;
      previewRender(formState);
    }
  });

  descriptionInput.addEventListener("input", (event) => {
    formState.desc = event.target.value;
    previewRender(formState);
  });

  tagInput.addEventListener("input", (event) => {
    formState.tag = event.target.value;
    previewRender(formState);
  });

  // --------- Return ---------

  Object.assign(AddFormDiv.style, stl);
  return modal;
}
