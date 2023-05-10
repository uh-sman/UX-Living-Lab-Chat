import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import user from "../../../assets/user.jpg";
import ChatIcons from "./ChatIcons";
const ProfileHead = () => {
  return (
    <div className="container w-full">
      <div className="d-flex justify-content-between overflow-y-scroll align-items-center">
        <figure className="d-flex gap-2 align-items-center">
          <img src={user} className=" image-style" />
          <div className="">
            {/* Status active now if true show active */}
            <small className="text-primary">Active now</small>
          </div>
        </figure>
        <ChatIcons />
      </div>
    </div>
  );
};

export default ProfileHead;
