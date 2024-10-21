import React from "react";
import * as stl from "./header.module.css";
import Navbar from "../../UI/Navbar/Navbar";

function Header(): JSX.Element {
  return (
    <header className={stl.header}>
      <div className={stl.logo}></div>
      <Navbar />
    </header>
  );
}

// Header.appendChild(Navbar());

export default Header;
