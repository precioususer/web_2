export function BorderLine(align, size, thickness) {
  const border = document.createElement("div");

  const mainStl = {
    vertical: {
      height: `${size}`,
      width: `${thickness ?? "1px"}`,
      backgroundColor: "#FFFFFF",
    },
    horizontal: {
      height: `${thickness ?? "1px"}`,
      width: `${size}`,
      backgroundColor: "#FFFFFF",
    },
  };

  switch (align) {
    case "vertical":
      Object.assign(border.style, mainStl.vertical);
      break;
    case "horizontal":
      Object.assign(border.style, mainStl.horizontal);
      break;
    default:
      break;
  }

  return border;
}
