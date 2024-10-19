import React from "react";
import * as stl from "./button.module.css";

interface componentProps {
  size: string;
  title: string;
}

const ClsBtn: React.FC<componentProps> = ({ size, title }) => {
  return <button className={stl.clsBtn}>{title}</button>;
};

export default ClsBtn;
