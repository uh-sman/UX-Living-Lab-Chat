import React from "react";
import { CiMail } from "react-icons/ci";
import { BsStarFill } from "react-icons/bs";
const Icons = () => {
  return (
    <div>
      <div className="d-flex">
        <a>
          <CiMail /> Unread
        </a>
        <a>
          <BsStarFill />
        </a>
        <a></a>
      </div>
    </div>
  );
};

export default Icons;
