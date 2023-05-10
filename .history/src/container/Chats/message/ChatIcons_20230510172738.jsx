import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BsExclamationLg } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
const ChatIcons = () => {
  return (
    <div className="mx-3">
      <div className="d-flex gap-3">
        <small className="text-primary fs-4"></small>
        <small className="text-primary fs-4">
          <BsExclamationLg />
        </small>
        <small className="text-primary fs-4">
          <FaTrashAlt />
        </small>

        <small className="text-primary fs-4">
          <CiMail />
        </small>
      </div>
    </div>
  );
};

export default ChatIcons;
