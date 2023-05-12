import React from "react";
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "./Icons";
// BsStarFill;
const SearchBar = () => {
  return (
    <div className="">
      <div className="overflow-y-scroll">
        <form className="mb-4">
          <div className="d-flex gap-2 inputBody rounded px-2 align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ width: "15px", height: "30px", color: "lightgray" }}
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            <input
              className="inputs  rounded py-2 mr-4"
              placeholder="Search..."
            />
          </div>
          {/* <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" /> */}

          {/* <i className="fa fa-search"></i> */}
        </form>
        <Icons />
      </div>
    </div>
  );
};

export default SearchBar;
