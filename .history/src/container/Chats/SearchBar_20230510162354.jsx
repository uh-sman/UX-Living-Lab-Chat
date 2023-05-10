import React from "react";
import { FaSearch } from "react-icons/fa";
// BsStarFill;
const SearchBar = () => {
  return (
    <div>
      <form>
        <input
          className="input rounded bi bi-search py-2 px-4"
          placeholder="Search..."
        />
        <i className="bi bi-search"></i>
      </form>
    </div>
  );
};

export default SearchBar;
