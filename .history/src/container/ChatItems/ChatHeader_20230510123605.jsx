import React from "react";
import HeaderButtons from "./HeaderButtons";

const ChatHeader = ({ title, caption }) => {
  return (
    <div className="m-0 d-flex flex-row">
      <header>
        <h1 className="Header-font fs-3">{title}</h1>
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
