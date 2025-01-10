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

const app = document.getElementById("app");
const title = document.getElementById("title");
Object.assign(app.style, stl);

app.appendChild(Header());

function render(page) {
  app.innerHTML = "";

  app.appendChild(page());
}

function goTo(page, url) {
  history.pushState(null, "", url);
  render(page);
}

const url = window.location.href;

function pageLoad(url) {
  "/home";
  switch (url) {
    case "/home":
    case "":
    case "/":
      goTo(homePage, url);
      title.innerText = "StarWars: Home";
      break;
    case "/preview":
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
    goTo(previewPage, `${url}/preview`);
    title.innerText = "StarWars: Preview";
  } else if (event.target.id === "Return") {
    goTo(homePage, `${url}/home`);
    title.innerText = "StarWars: Home";
  } else if (event.target.tagName === "A") {
    event.preventDefault();

    const href = event.target.getAttribute("href");
    window.history.pushState(null, "", href);
    pageLoad();
  }
});
