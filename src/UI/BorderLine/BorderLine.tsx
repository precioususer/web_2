import React from "react";

interface componentProps {
  length: number;
  align: "vertical" | "horizontal";
  thickness: number;
}

const BorderLine: React.FC<componentProps> = ({ length, align, thickness }) => {
  const localLength: string = `${length}px`;
  const localThickness: string = `${thickness}px`;

  return (
    <div
      style={{
        backgroundColor: "white",
        width: align === "horizontal" ? localLength : localThickness,
        height: align === "horizontal" ? localThickness : localLength,
      }}
    ></div>
  );
};

export default BorderLine;
