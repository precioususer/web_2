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
  maxHeight: "100vh",
  overflowX: "hidden",
};

const url = window.location.href;

const app = document.getElementById("app");
const title = document.getElementById("title");
Object.assign(app.style, stl);

app.appendChild(Header(url, render));

function render(page) {
  if (app.childNodes.length > 1) {
    app.removeChild(app.lastChild);
  }

  app.appendChild(page());
}

function goTo(page, url) {
  history.pushState(null, "", url);
  render(page);
}

function pageLoad(url) {
  console.log(url);
  switch (window.location.href) {
    case `${url}home`:
    case `${url}`:
      goTo(homePage, url);
      title.innerText = "StarWars: Home";
      break;
    case `${url}preview`:
      goTo(previewPage, url);
      title.innerText = "StarWars: Preview";
      break;
    default:
      goTo(errorPage, url);
      title.innerText = "StarWars: Not found";
      break;
  }
}

pageLoad(url);

window.addEventListener("popstate", pageLoad);

document.addEventListener("click", (event) => {
  if (event.target.id === "Start") {
    goTo(previewPage, `${url}preview`);
    title.innerText = "StarWars: Preview";
  } else if (event.target.id === "Return") {
    goTo(homePage, `${url}home`);
    title.innerText = "StarWars: Home";
  } else if (
    event.target.tagName === "A" &&
    event.target.innerText.toLowerCase() == "home"
  ) {
    event.preventDefault();

    goTo(homePage, `${url}home`);
    title.innerText = "StarWars: Home";
  } else if (
    event.target.tagName === "A" &&
    event.target.innerText.toLowerCase() == "preview"
  ) {
    event.preventDefault();

    goTo(previewPage, `${url}preview`);
    title.innerText = "StarWars: Preview";
  }
});
