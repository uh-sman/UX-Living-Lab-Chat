import React from "react";
import { FaSearch } from "react-icons/fa";
import Icons from "./Icons";
// BsStarFill;
const SearchBar = () => {
  return (
    <div className="overflow-y-scroll height-4">
      <form>
        <input
          className="input rounded bi bi-search py-2 px-4"
          placeholder="Search..."
        />
        <i className="bi bi-search"></i>
      </form>
      {/* <Icons */}
    </div>
  );
};

export default SearchBar;
