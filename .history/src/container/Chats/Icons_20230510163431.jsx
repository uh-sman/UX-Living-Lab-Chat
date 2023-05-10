import React from "react";
import { CiMail } from "react-icons/ci";
import { BsStarFill } from "react-icons/bs";
import { FaTag } from "react-icons/fa";
const Icons = () => {
  return (
    <div>
      <div className="d-flex">
        <a>
          <CiMail /> Unread
        </a>
        <a>
          <BsStarFill /> Follow Up
        </a>
        <a>
          <FaTag />
          Labels
        </a>
      </div>
    </div>
  );
};

export default Icons;
