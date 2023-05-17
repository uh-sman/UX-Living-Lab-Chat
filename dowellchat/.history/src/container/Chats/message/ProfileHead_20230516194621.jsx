import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import user from "../../../assets/avatar.png";
import ChatIcons from "./ChatIcons";
import Message from "./Message";
import ProductContext from "../../ContextProvider/DataContext";
import ReplyChat from "./ReplyChat";
const ProfileHead = () => {
  // const { handleProductClick } = useContext(ProductContext);

  return (
    <div className="container overflow-y-scroll  my-0 my-md-0 my-lg-0 my-xl-0 my-xxl-0">
      <div className="d-flex justify-content-between gap-3 align-items-center border-bottom my-0 my-md-0 my-lg-0 my-xl-0 my-xxl-0">
        <figure className="d-flex gap-3 align-items-center">
          <img src={user} className=" image-style" />
          <small
            className="bg-success rounded"
            style={{
              position: "absolute",
              height: "7px",
              width: "7px",
              marginLeft: "2.7rem",
              marginTop: "1.9rem",
            }}
          ></small>
          <div className="">
            {/* Room number */}
            <h1 className="fs-5 fb-extrabold">84</h1>
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
