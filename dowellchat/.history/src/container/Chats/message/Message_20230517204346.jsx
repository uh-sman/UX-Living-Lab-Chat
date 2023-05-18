import React, { useState } from "react";
import ReplyChat from "./ReplyChat";

const Message = ({ message }) => {
  // const [message, setMessage] = useState(true);
  console.log("message", message);
  const messageUser = (message) => {
    switch (message) {
      case message:
        return {
          display: "flex",
          justifyContent: "end",
        };
      case message.length > 0 + 1:
        return {
          display: "flex",
          justifyContent: "start",
        };

      default:
        return message;
    }
  };

  return (
    <div className="">
      {message &&
        message?.messages?.map(({ message }, user) => {
          const { display, justifyContent } = messageUser(message);
          return (
            <div class="d-flex flex-row justify-content-start mb-4">
              <div class="p-3 ms-3 style">
                <p class="small mb-0 bg-primary">{message}</p>
              </div>
            </div>
          );
        })}
      {/* <ReplyChat /> */}
    </div>
  );
};

export default Message;
// <div
//   className="bg-primary text-white rounded d-flex align-items-center align-self-end"
//   style={{
//     width: "auto",
//     height: "40px",
//     listStyle: "none",
//     marginTop: "8rem",
//   }}
// >
//   <li className="mx-3"></li>
// </div>;
