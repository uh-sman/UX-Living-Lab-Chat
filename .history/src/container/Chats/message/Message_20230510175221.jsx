import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState(true);
  return (
    <div className="mx-4">
      <div className="d-flex justify-content-end ">
        {message ? (
          <div
            class="bg-primary text-white rounded d-flex align-items-center"
            style={{ width: "12rem", height: "40px" }}
          >
            <li class="">Hey,How may I help you? </li>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Message;
