import React from "react";

const ChatHeader = ({ title, caption }) => {
  return (
    <div>
      <title>
        <h1 className="">{title}</h1>
        <small>{caption}</small>
      </title>
    </div>
  );
};

export default ChatHeader;
ChatHeader.defaultProps = {
  title: "Chat Response",
  caption: "Respond to messages, set up automations and more",
};
