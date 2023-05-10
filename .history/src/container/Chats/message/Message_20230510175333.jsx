import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState(true);
  return (
    <div className="mx-4">
      <div className="d-flex justify-content-end ">
        {message ? (
          <div
            className="bg-primary text-white rounded d-flex align-items-center"
            style={{ width: "contain", height: "40px", listStyle: "none" }}
          >
            <li className="list-item">Hey,How may I help you? </li>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Message;
