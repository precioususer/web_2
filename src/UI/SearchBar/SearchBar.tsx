import React from "react";
import * as stl from "./searchbar.module.css";

function SearchBar(): JSX.Element {
  return (
    <div className={stl.searchbarElement}>
      <input
        type="text"
        placeholder="Search for Heroes"
        className={stl.searchbar}
      />
    </div>
  );
}

export default SearchBar;
