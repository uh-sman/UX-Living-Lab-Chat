import React from "react";
import { BsClock } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
const HeaderButtons = () => {
  return (
    <div className="d-flex">
      <button type="button" className="btn d-flex align-items-center ">
        <BsClock />
        Available
      </button>
      <button type="button" className="btn btn-primary">
        <FaTools />
      </button>
    </div>
  );
};

export default HeaderButtons;
