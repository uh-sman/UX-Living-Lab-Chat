import React from "react";
import { CiMail } from "react-icons/ci";
import { BsStarFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa";
const Icons = () => {
  return (
    <div>
      <div className="d-flex text-primary">
        <a className="d-flex align-items-center">
          <CiMail /> Unread
        </a>
        <a className="d-flex align-items-center">
          <BsStarFill /> Follow Up
        </a>
        <a className="d-flex align-items-center">
          <FaTag />
          Labels
        </a>
      </div>
    </div>
  );
};

export default Icons;
