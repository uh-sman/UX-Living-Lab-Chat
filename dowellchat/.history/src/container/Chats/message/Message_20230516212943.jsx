import React, { useState } from "react";
import ReplyChat from "./ReplyChat";

const Message = ({ message }) => {
  // const [message, setMessage] = useState(true);
  console.log("message", message?.messages);
  return (
    <div className="">
      <div className="d-flex justify-content-end ">
        {message ? (
          <div
            className="bg-primary text-white rounded d-flex align-items-center align-self-end"
            style={{
              width: "auto",
              height: "40px",
              listStyle: "none",
              marginTop: "8rem",
            }}
          >
            <li className="mx-3"></li>
          </div>
        ) : null}
      </div>
      {/* <ReplyChat /> */}
    </div>
  );
};

export default Message;
