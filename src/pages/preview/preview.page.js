//TODO

export function previewPage() {
  let previewPageDiv = document.createElement("div");
  previewPageDiv.id = "main";

  const stl = {
    backgroundColor: "green",
    height: "200px",
    width: "400px",
  };

  Object.assign(previewPageDiv.style, stl);

  previewPageDiv.addEventListener("click", () => {
    document.location.pathname = "/about";
  });

  return previewPageDiv;
}
