import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState(null);
  return (
    <div className="mx-4">
      <div className="d-flex justify-content-end ">
        <form action="">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder=".form-control-lg"
            aria-label=".form-control-lg example"
            style={{ width: message ? "auto" : "200px" }}
          />
        </form>
      </div>
    </div>
  );
};

export default Message;
