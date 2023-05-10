import React from "react";

const ChatHeader = ({ title, caption }) => {
  return (
    <div className="m">
      <header>
        <h1 className="Header-font fs-3">{title}</h1>
        <small className="fs-1">{caption}</small>
      </header>
    </div>
  );
};

export default ChatHeader;
ChatHeader.defaultProps = {
  title: "Chat Response",
  caption: "Respond to messages, set up automations and more",
};
