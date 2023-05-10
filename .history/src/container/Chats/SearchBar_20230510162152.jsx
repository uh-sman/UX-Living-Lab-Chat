import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div>
      <form>
        <input
          className="input rounded bi bi-search py-2 px-4"
          placeholder="Search..."
        />
        <i className="BsStarFill"></i>
      </form>
    </div>
  );
};

export default SearchBar;
