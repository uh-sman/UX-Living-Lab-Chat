import React from "react";
import { BsClock } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
const HeaderButtons = () => {
  return (
    <div className="d-flex ">
      <button type="button" className="button">
        <BsClock />
        Available
      </button>
      <button type="button" className="button">
        <FaTools />
      </button>
    </div>
  );
};

export default HeaderButtons;
