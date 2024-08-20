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

function render(page) {
  app.innerHTML = "";

  app.appendChild(Header());
  app.appendChild(page());
}

function goTo(page, url) {
  history.pushState(null, "", url);
  render(page);
}

function pageLoad() {
  const url = window.location.pathname;
  switch (url) {
    case "/home":
    case "":
    case "/":
      goTo(homePage, url);
      break;
    case "/preview":
      goTo(previewPage, url);
      break;
    default:
      goTo(errorPage, url);
      break;
  }
}

pageLoad();

window.addEventListener("popstate", pageLoad);

document.addEventListener("click", (event) => {
  if (event.target.id === "Start") {
    goTo(previewPage, "http://localhost:3000/preview");
  } else if (event.target.id === "Return") {
    goTo(homePage, "http://localhost:3000/home");
  } else if (event.target.tagName === "A") {
    event.preventDefault();

    const href = event.target.getAttribute("href");
    window.history.pushState(null, "", href);
    pageLoad();
  }
});
