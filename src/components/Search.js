import React from "react";
import "./styles/search.scss";

// child components
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import Tagbar from "./Tagbar";

const Search = () => {
  return (
    <div>
      <div className="search">
        <Filter />
        <Searchbar />
      </div>
      <hr className="hrBlue" />
      <Tagbar />
    </div>
  );
};

export default Search;