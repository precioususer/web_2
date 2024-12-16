import React from "react";
import * as stl from "./textinput.module.css";
import Title from "../Title/Title";

interface componentProps {
  height: number;
  title?: string;
}

const TextInput: React.FC<componentProps> = ({ height, title }) => {
  return (
    <div className={stl.textinput}>
      {title ? <Title size="p14" title={title} /> : ""}
      <textarea
        style={{ height: `calc(${height}px - 3px - 3px - 2px)` }}
        className={stl.textarea}
      ></textarea>
    </div>
  );
};

export default TextInput;
