import React from "react";
import * as stl from "./preview.page.module.css";
import AddBtn from "../../UI/Button/AddBtn/AddBtn";
import ClsBtn from "../../UI/Button/ClsBtn/ClsBtn";
import Button from "../../UI/Button/Button/Button";
import BorderLine from "../../UI/BorderLine/BorderLine";
import TextInput from "../../UI/TextInput/TextInput";
import SearchBar from "../../UI/SearchBar/SearchBar";
import Title from "../../UI/Title/Title";

function PreviewPage(): JSX.Element {
  return (
    <main className={stl.previewPage}>
      <div className={stl.container}>
        <Title size="p24" title="Who's Your Favorite Star Wars" />
        <SearchBar />
        <TextInput height={35} title="Gender" />
        <AddBtn />
        <ClsBtn />
        <Button size="large" title="fff" />
        <BorderLine align="horizontal" length={200} thickness={2} />
      </div>
    </main>
  );
}

export default PreviewPage;
