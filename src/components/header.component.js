import { Logo } from "./UI/Logo.js";
import { Navbar } from "./UI/Navbar.js";

export function Header() {
  let Header = document.createElement("header");
  Header.id = "header";

  const stl = {
    display: "flex",
    alignItems: "center",
    gap: "45px",
    backgroundColor: "black",
    color: "white",
    height: "130px",
    width: "100wh",
    paddingLeft: "80px",
  };

  Header.appendChild(Logo());
  Header.appendChild(Navbar());

  Object.assign(Header.style, stl);

  return Header;
}
