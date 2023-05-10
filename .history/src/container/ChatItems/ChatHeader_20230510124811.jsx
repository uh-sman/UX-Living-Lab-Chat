import React from "react";
import HeaderButtons from "./HeaderButtons";

const ChatHeader = ({ title, caption }) => {
  return (
    <div className="m-5 d-flex justify-content-between">
      <header>
        <h1 className="Header-font fs-3 fw-bold">{title}</h1>
        <p className="fw-bold Header-font">{caption}</p>
      </header>
      <HeaderButtons />
    </div>
  );
};

export default ChatHeader;
ChatHeader.defaultProps = {
  title: "Chat Response",
  caption: "Respond to messages, set up automations and more",
};
