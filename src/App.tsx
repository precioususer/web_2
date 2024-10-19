import React from "react";
import * as stl from "./styles/app.module.css";
import Header from "./components/Header/Header";
import PreviewPage from "./pages/preview/preview.page";
import ErrorPage from "./pages/404/error.page";
import HomePage from "./pages/Home/home.page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App(): JSX.Element {
  return (
    <Router>
      <div className={stl.app}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
