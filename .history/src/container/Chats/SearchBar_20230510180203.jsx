import React from "react";
import { FaSearch } from "react-icons/fa";
import Icons from "./Icons";
// BsStarFill;
const SearchBar = () => {
  return (
    <div className="">
      <div className="overflow-y-scroll">
        <form>
          <input
            className="input rounded bi bi-search py-2"
            placeholder="Search..."
          />
          {/* <i className="bi bi-search"></i> */}
        </form>
        <Icons />
      </div>
    </div>
  );
};

export default SearchBar;
