export function SideWrapper() {
  const SideWrapperDiv = document.createElement("div");

  const mainStl = {
    display: "flex",
    flexDirection: "column",

    width: "445px",
    height: "651px",
  };

  Object.assign(SideWrapperDiv.style, mainStl);

  return SideWrapperDiv;
}
