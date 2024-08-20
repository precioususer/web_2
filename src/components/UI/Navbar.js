import { Navlink } from "./Navlink.js";

const linkList = [
  { title: "Home", href: "/home" },
  { title: "Preview", href: "/preview" },
];

export function Navbar() {
  let navbarElement = document.createElement("nav");
  navbarElement.id = "Navbar";

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
