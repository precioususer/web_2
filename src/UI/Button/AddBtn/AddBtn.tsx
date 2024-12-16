import React from "react";
import * as stl from "./addBtn.module.css";
import Title from "../../Title/Title";

const AddBtn: React.FC = () => {
  return (
    <button className={stl.addbtn}>
      <Title size="p18" title="Add" />
    </button>
  );
};

export default AddBtn;
