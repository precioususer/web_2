import React from "react";
import * as stl from "./home.page.module.css";
import Title from "../../UI/Title/Title";
import Button from "../../UI/Button/Button/Button";
import { Link } from "react-router-dom";

function HomePage(): JSX.Element {
  return (
    <main className={stl.homePage}>
      <Title size="h1plus" title="Find all your favorite heroes “Star Wars”" />
      <Title
        size="p24"
        title="You can know the type of heroes, its strengths, disadvantages and abilities"
      />

      <Button size="regular" title="">
        <Link to="/preview">Start</Link>
      </Button>
    </main>
  );
}

export default HomePage;
