import { Header } from "./components/Header";
import { previewPage } from "./pages/preview/preview.page";
import { homePage } from "./pages/Home/home.page";
import { errorPage } from "./pages/404/error.page";

const stl = {
  display: "flex",
  flexDirection: "column",

  fontFamily: "Roboto, sans-serif",
  fontStyle: "normal",
  fontWeight: "400",
  backgroundColor: "black",

  minHeight: "100vh",
  overflow: "hidden",
};

const app = document.getElementById("app");
Object.assign(app.style, stl);

function render() {
  app.innerHTML = "";

  app.appendChild(Header());

  console.log(window.location.pathname);

  switch (window.location.pathname) {
    case "/home":
    case "":
    case "/":
      app.appendChild(homePage());
      break;
    case "/preview":
      app.appendChild(previewPage());
      break;
    default:
      app.appendChild(errorPage());
      break;
  }
}

function handlerNavigation(event) {
  if (event.target.tagName === "A") {
    event.preventDefault();

    const href = event.target.getAttribute("href");
    window.history.pushState(null, "", href);
    render();
  }
}
console.log(window.location.pathname);
render();

window.addEventListener("popstate", render);

document.addEventListener("click", handlerNavigation);
