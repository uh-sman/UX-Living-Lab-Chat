import React from "react";

const InputBox = () => {
  return (
    <div>
      <input
        className="py-2 px-2 rounded input-"
        type="text"
        placeholder="Reply in Chat..."
        style={{ minWidth: "7rem" }}
      />
    </div>
  );
};

export default InputBox;
