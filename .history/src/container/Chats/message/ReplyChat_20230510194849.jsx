import React from "react";
import user from "../../../assets/user.jpg";
import {
  FaRegPaperPlane,
  FaPaperPlane,
  FaTelegramPlane,
  FaReply,
} from "react-icons/fa";
import { HiOutlineEmojiHappy, HiHandThumbUp } from "react-icons/hi";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
const ReplyChat = () => {
  return (
    <div>
      <div className="d-flex justify-content-end my-5">
        <div
          class="border rounded d-flex align-self-end"
          style={{ width: "35rem", height: "10rem" }}
        >
          <div class="card-body">
            <div className="d-flex align-items-center justify-content-between mx-3">
              <div className="d-flex gap-4  my-3">
                <img src={user} alt="user-image" className=" image-styles" />
                <div className="form">
                  <input
                    className="py-2 px-2 rounded input-"
                    type="text"
                    placeholder="Reply in Chat..."
                    style={{ width: "15rem" }}
                  />
                </div>
              </div>
              <div className="">
                <div className="">
                  <button className="btn">
                    <FaPaperPlane className="fs-4 text-primary" />
                  </button>
                </div>
                <div className="">
                  <ul>
                    <button className="btn text-primary"></button>
                    <button className="btn text-primary">
                      {" "}
                      <FaReply />
                    </button>
                    <button className="btn text-primary">
                      <HiOutlineEmojiHappy />
                    </button>
                    <button className="btn text-primary">
                      <HiOutlineHandThumbUp />
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyChat;
