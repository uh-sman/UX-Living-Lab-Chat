import React from "react";
import { BsClock } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
const HeaderButtons = () => {
  return (
    <div className="d-flex ">
      <button type="button" className="btn d-flex align-items-center ">
        <BsClock />
        Available
      </button>
      <button type="button" className="btn py-5 px-5 bg-warning ">
        <FaTools />
      </button>
    </div>
  );
};

export default HeaderButtons;
