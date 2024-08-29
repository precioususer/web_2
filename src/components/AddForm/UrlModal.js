export function urlModal(state, previewRender) {
  const modalStl = {
    position: "absolute",

    top: "0",
    left: "0",

    zIndex: "4",
    height: "100%",
    width: "100%",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    display: "none",
    alignItems: "center",
    justifyContent: "center",
  };

  const modal = document.createElement("div");
  modal.id = "urlModal";
  Object.assign(modal.style, modalStl);

  // ------

  function localBtn(title) {
    const btn = document.createElement("button");

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

    Object.assign(btn.style, buttonStl);
    btn.innerText = title;
    return btn;
  }
  function textInput() {
    const mainStl = {
      textInputElement: {
        display: "flex",
        flexDirection: "column",
        gap: "3px",

        width: "100%",
      },
      textInput: {
        backgroundColor: "#000000",
        border: "1px solid #FFFFFF",
        borderRadius: "6px",

        width: `calc(100% - 14px - 14px - 2px)`,
        height: `calc(${32}px - 3px - 3px - 2px)`,
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

    const textInput = document.createElement("textarea");
    Object.assign(textInput.style, mainStl.textInput);

    textInputElement.appendChild(textInput);
    Object.assign(textInputElement.style, mainStl.textInputElement);

    return textInputElement;
  }

  const containerStl = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    width: "90%",

    padding: "20px",

    border: "solid 1px #3fc4fd",
    borderRadius: "4px",

    backgroundColor: "#000000",
  };
  const container = document.createElement("div");
  Object.assign(container.style, containerStl);

  const urlInput = textInput();
  urlInput.placeholder = "Enter image URL";

  container.appendChild(urlInput);

  const btnGroupStl = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",

    marginTop: "10px",

    width: "100%",
  };
  const btnGroup = document.createElement("div");
  Object.assign(btnGroup.style, btnGroupStl);

  const uploadBtn = localBtn("Upload");
  const cancelBtn = localBtn("Cancel");

  btnGroup.appendChild(uploadBtn);
  btnGroup.appendChild(cancelBtn);
  container.appendChild(btnGroup);

  modal.appendChild(container);

  // --------- Actions ---------

  uploadBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (urlInput.childNodes[0].value) {
      const imageUrl = urlInput.childNodes[0].value.trim();
      if (imageUrl) {
        state.img = imageUrl;
        previewRender(state);
        modal.style.display = "none";
      }
    }
  });

  cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "none";
  });

  // --------- Return ---------

  return modal;
}

// https://avatars.mds.yandex.net/i?id=d7bab57b4caeabb7f811b342d98a1fcc2fa64b4e-5906238-images-thumbs&n=13
