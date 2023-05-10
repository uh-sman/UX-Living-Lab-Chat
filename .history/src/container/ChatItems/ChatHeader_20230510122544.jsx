import React from "react";

const ChatHeader = ({ title, caption }) => {
  return (
    <div className="">
      <header>
        <h1 className="">{title}</h1>
        <small>{caption}</small>
      </header>
    </div>
  );
};

export default ChatHeader;
ChatHeader.defaultProps = {
  title: "Chat Response",
  caption: "Respond to messages, set up automations and more",
};
