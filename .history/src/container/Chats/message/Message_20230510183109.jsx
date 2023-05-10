import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState(true);
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
            <li className=" ">Hey, How may I help you? </li>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Message;
