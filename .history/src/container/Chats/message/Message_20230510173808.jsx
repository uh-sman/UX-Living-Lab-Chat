import React, { useState } from "react";

const Message = () => {
  const [message, setMessage] = useState(null);
  return (
    <div>
      <div className="">
        <form action="">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder=".form-control-lg"
            aria-label=".form-control-lg example"
            style={message ? { width: "200px" } : null}
          />
        </form>
      </div>
    </div>
  );
};

export default Message;
