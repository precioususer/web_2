export function Navlink(linkList) {
  let navlinkElement = document.createElement("a");
  navlinkElement.id = "Navlink";
  navlinkElement.href = linkList.href;

  const stl = {
    textDecoration: "none",
    color: "white",
  };

  Object.assign(navlinkElement.style, stl);

  navlinkElement.innerHTML = linkList.title;

  return navlinkElement;
}
