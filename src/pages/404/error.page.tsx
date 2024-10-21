import React from "react";
import * as stl from "./error.page.module.css";
import Title from "../../UI/Title/Title";
import Button from "../../UI/Button/Button/Button";
import { Link } from "react-router-dom";

function ErrorPage(): JSX.Element {
  return (
    <main className={stl.main}>
      <Title size="p35" title="This page is not fully armed and operational." />

      <Button size="regular" title="">
        <Link to="/preview">Return</Link>
      </Button>
    </main>
  );
}

export default ErrorPage;
