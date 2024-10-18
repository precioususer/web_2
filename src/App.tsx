import React from "react";
import * as stl from "./styles/app.module.css";
import Header from "./components/Header/Header";
import PreviewPage from "./pages/Home/home.page";
import ErrorPage from "./pages/404/error.page";

function App(): JSX.Element {
  return (
    <div className={stl.app}>
      <Header />
      <PreviewPage />
    </div>
  );
}

export default App;
