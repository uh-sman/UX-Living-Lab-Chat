import React, { useState } from "react";
import ReplyChat from "./ReplyChat";

const Message = ({ message }) => {
  // const [message, setMessage] = useState(true);
  console.log("message", message);
  const messageUser = (user) => {
    switch (user) {
      case "author":
        return {
          display: "flex",
          justifyContent: "end",
        };
      case "receiver":
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
      <div className="d-flex justify-content-end ">
        {message &&
          message?.messages?.map(({ message }) => {
            return (
              <div
                className="bg-primary text-white rounded d-flex align-items-center align-self-end"
                style={{
                  width: "auto",
                  height: "40px",
                  listStyle: "none",
                  marginTop: "8rem",
                }}
              >
                <li className="mx-3">{message}</li>
              </div>
            );
          })}
      </div>
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
