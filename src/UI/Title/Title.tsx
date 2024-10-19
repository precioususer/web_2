import React from "react";

interface componentProps {
  size: string;
  title: string;
}

const Title: React.FC<componentProps> = ({ size, title }) => {
  let localSize: string = size;
  let fontSize: string = "";

  switch (size) {
    case "h1plus":
      localSize = "800";
      fontSize = "72px";
      break;
    case "h1":
      localSize = "800";
      fontSize = "48px";
      break;
    default:
      localSize = "400";
      const acc = size.split("");
      acc.shift();
      fontSize = acc.concat("px").join("");
      break;
  }

  return (
    <h1
      style={{
        color: "#FFFFFF",
        fontFamily: "inherit",
        fontWeight: localSize,
        fontSize: fontSize,
      }}
    >
      {title ? title : "No title"}
    </h1>
  );
};

export default Title;
