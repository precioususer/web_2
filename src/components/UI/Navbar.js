import { Navlink } from "./Navlink.js";

export function Navbar(url) {
  let navbarElement = document.createElement("nav");
  navbarElement.id = "Navbar";

  const linkList = [
    { title: "Home", href: `${url}home` },
    { title: "Preview", href: `${url}preview` },
  ];

  const stl = {
    display: "flex",
    flexDirection: "row",
    gap: "45px",
    fontSize: "20px",
  };

  Object.assign(navbarElement.style, stl);

  linkList.map((el) => navbarElement.appendChild(Navlink(el)));

  return navbarElement;
}
