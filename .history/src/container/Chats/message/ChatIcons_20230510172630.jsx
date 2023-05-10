import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BsExclamationLg } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
const ChatIcons = () => {
  return (
    <div className="mx-2">
      <div className="d-flex gap-3">
        <small></small>
        <small>
          <BsExclamationLg />
        </small>
        <small>
          <FaTrashAlt />
        </small>

        <small>
          <CiMail />
        </small>
      </div>
    </div>
  );
};

export default ChatIcons;
