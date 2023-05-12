import React from "react";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "./Icons";
// BsStarFill;
const SearchBar = () => {
  return (
    <div className="container px-4">
      <div className="overflow-y-scroll">
        <form className="mb-4">
          <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" />

          <input
            className="inputs  rounded py-2 mr-4"
            placeholder="Search..."
          />
          <i className="fa fa-search"></i>
        </form>
        <Icons />
      </div>
    </div>
  );
};

export default SearchBar;
