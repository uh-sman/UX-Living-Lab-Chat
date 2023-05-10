import React from "react";
import user from "../../../assets/user.jpg";
import { FaRegPaperPlane, FaPaperPlane, FaTelegramPlane } from "react-icons/fa";
const ReplyChat = () => {
  return (
    <div>
      <div className="d-flex justify-content-end my-5">
        <div
          class="border rounded d-flex align-self-end"
          style={{ width: "35rem", height: "10rem" }}
        >
          <div class="card-body">
            <div className="d-flex">
              <div className="d-flex gap-4 mx-2 my-3">
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
                <FaTelegramPlane />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyChat;
