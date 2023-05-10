import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState(true);
  return (
    <div className="mx-4">
      <div className="d-flex justify-content-end ">
        {message ? (
          <div
            class="bg-primary text-white"
            style={{ width: "18rem", height: "40px" }}
          >
            <li class="list-group-item">An item</li>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Message;
