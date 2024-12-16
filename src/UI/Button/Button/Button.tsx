import React from "react";
import * as stl from "./button.module.css";

interface componentProps {
  size: "small" | "small-gray" | "regular" | "large";
  title: string;
  children?: React.ReactNode | string;
}

const Button: React.FC<componentProps> = ({ size, title, children }) => {
  const classes: string[] = [stl.button, stl[size]];

  return (
    <button className={classes.join(" ")}>{title ? title : children}</button>
  );
};

export default Button;
