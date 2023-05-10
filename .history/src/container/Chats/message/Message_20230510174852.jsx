import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState(true);
  return (
    <div className="mx-4">
      <div className="d-flex justify-content-end ">
        {message ? (
          <div class="card bg-primary text-white" style={{ width: "18rem" }}>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Message;
