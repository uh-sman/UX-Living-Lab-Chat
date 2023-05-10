import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div>
      <form>
        <input
          className="input rounded fa fa-search py-2 px-4"
          placeholder=""
        />
      </form>
    </div>
  );
};

export default SearchBar;
