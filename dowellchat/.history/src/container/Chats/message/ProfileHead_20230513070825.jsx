import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import user from "../../../assets/avatar.png";
import ChatIcons from "./ChatIcons";
import Message from "./Message";
import ReplyChat from "./ReplyChat";
const ProfileHead = () => {
  return (
    <div className="container overflow-y-scroll  my-3 my-md-3 my-lg-0 my-xl-0 my-xxl-0">
      <div className="d-flex justify-content-between gap-3 align-items-center border-bottom my-5 my-md-4 my-lg-0 my-xl-0 my-xxl-0">
        <figure className="d-flex gap-2 align-items-center">
          <a>
            <img src={user} className=" image-style" />
            <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
              <span class="visually-hidden">New alerts</span>
            </span>
          </a>
          <div className="">
            {/* Status active now if true show active */}
            <small className="text-primary text-nowrap">Active now</small>
          </div>
        </figure>
        <ChatIcons />
      </div>
      <Message />
      {/* <ReplyChat /> */}
    </div>
  );
};

export default ProfileHead;
