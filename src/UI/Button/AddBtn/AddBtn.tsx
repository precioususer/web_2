import React from "react";
import * as stl from "./button.module.css";

interface componentProps {
  size: string;
  title: string;
}

const AddBtn: React.FC<componentProps> = ({ size, title }) => {
  return <button className={stl.addbtn}>{title}</button>;
};

export default AddBtn;
