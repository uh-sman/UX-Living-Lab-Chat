import React from "react";
import { BsClock } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
const HeaderButtons = () => {
  return (
    <div className="d-flex ">
      <button type="button" className=" d-flex button align-items-center gap-2">
        <BsClock />
        Available
      </button>
      <button type="button" className="btn py-1 button px-3 bg-warning flex">
        <FaTools />
      </button>
    </div>
  );
};

export default HeaderButtons;
