import React, { useContext, useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import user from "../../../assets/avatar.png";
import ChatIcons from "./ChatIcons";
import Message from "./Message";
import ProductContext from "../../ContextProvider/DataContext";
import ReplyChat from "./ReplyChat";
import axios from "axios";
import SearchBar from "../SearchBar";
const ProfileHead = ({ chatHeader }) => {
  // const { handleProductClick } = useContext(ProductContext);
  const [result, setResult] = useState([]);

  const getMessages = async () => {
    try {
      const res = await axios.get(
        `https://100096.pythonanywhere.com/room_list/${chatHeader}`
      );

      console.log("res.data", res.data);
      setResult(res.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    if (Boolean(chatHeader)) getMessages();
  }, [chatHeader]);
  console.log("result", result);
  const { rooms } = result;
  return (
    <div
      className=" d-flex justify-content-around flex-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row mb-5 mb-md-5 mb-lg-2 mb-lg-2 mb-xl-2 mb-xxl-2 "
      style={{ gap: "2rem" }}
    >
      <SearchBar results={result} />
      <div className="">
        <div className="w-full d-flex gap-3 align-items-center border-bottom my-0 my-md-0 my-lg-0 my-xl-0 my-xxl-0 ">
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
              <h1 className="fs-5 fb-extrabold">
                {result?.rooms?.[0]?.room_id}
              </h1>
              <small className="text-primary text-nowrap">Active now</small>
            </div>
          </figure>
          <ChatIcons />
        </div>
        <Message message={result} />
      </div>
      {/* <ReplyChat /> */}
    </div>
  );
};

export default ProfileHead;
