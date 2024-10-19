import React from "react";
import * as stl from "./button.module.css";
import { Link } from "react-router-dom";

interface componentProps {
  size: string;
  title: string;
}

const Button: React.FC<componentProps> = ({ size, title }) => {
  const classes: string[] = [stl.button, stl[size]];

  return (
    <button className={classes.join(" ")}>
      <Link to="/preview">{title ? title : "No title"}</Link>
    </button>
  );
};

export default Button;
