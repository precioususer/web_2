import React from "react";
import * as stl from "./navbar.module.css";
import { Link } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/preview", label: "Preview" },
];

function Navbar(): JSX.Element {
  return (
    <nav className={stl.navbar}>
      {navLinks.map((link) => (
        <Link key={link.path} to={link.path}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;
