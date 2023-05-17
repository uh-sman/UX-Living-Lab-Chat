import React, { useState } from "react";
import ReplyChat from "./ReplyChat";

const Message = ({ message }) => {
  // const [message, setMessage] = useState(true);
  console.log("message", message);
  const messageUser = (message) => {
    switch (message) {
      case (message.length = 0 && +2):
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
          const { display, justifyContent } = messageUser;
          return (
            <div
              className="d-flex justify-content-end "
              style={{ display, justifyContent }}
            >
              <div
                className="bg-primary text-white rounded d-flex align-items-center align-self-end "
                style={{
                  width: "auto",
                  height: "auto",
                  listStyle: "none",
                  marginTop: "8rem",
                }}
              >
                <li className="mx-3 text-wrap">{message}</li>
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
