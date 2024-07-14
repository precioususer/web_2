//TODO

export function homePage() {
  let homePageDiv = document.createElement("div");
  homePageDiv.id = "main";

  const stl = {
    backgroundColor: "green",
    height: "200px",
    width: "400px",
  };

  Object.assign(homePageDiv.style, stl);

  return homePageDiv;
}
