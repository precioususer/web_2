import React from "react";
import * as stl from "./clsBtn.module.css";

interface ComponentProps {
  children?: React.ReactNode | string;
}

const ClsBtn: React.FC<ComponentProps> = ({ children }) => {
  return <button className={stl.clsBtn}>{children}</button>;
};

export default ClsBtn;
