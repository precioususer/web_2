import img from "./../../../public/logo.png";

export function Logo() {
  let logoElement = document.createElement("div");
  logoElement.id = "logo";

  const stl = {
    display: "flex",
    backgroundImage: `url(${img})`,
    height: "90px",
    width: "150px",
  };

  Object.assign(logoElement.style, stl);

  return logoElement;
}
