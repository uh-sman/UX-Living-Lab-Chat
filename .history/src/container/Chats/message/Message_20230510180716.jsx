import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState(true);
  return (
    <div className="">
      <div className="d-flex justify-content-end align-items-last-baseline">
        {message ? (
          <div
            className="bg-primary text-white rounded d-flex align-items-center "
            style={{ width: "auto", height: "40px", listStyle: "none" }}
          >
            <li className="mx-4">Hey, How may I help you? </li>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Message;
