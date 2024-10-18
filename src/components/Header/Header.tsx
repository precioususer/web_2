import React from "react";
import * as stl from "./header.module.css";

function Header(): JSX.Element {
  return (
    <header className={stl.header}>
      <div className={stl.logo}></div>
    </header>
  );
}

// Header.appendChild(Navbar());

export default Header;
