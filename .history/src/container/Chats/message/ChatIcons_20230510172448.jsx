import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BsExclamationLg } from "react-icons/bs";
const ChatIcons = () => {
  return (
    <div>
      <div className="">
        <small>
          <BsExclamationLg />
        </small>
        <small>
          <FaTrashAlt />
        </small>

        <small></small>
        <small></small>
      </div>
    </div>
  );
};

export default ChatIcons;
