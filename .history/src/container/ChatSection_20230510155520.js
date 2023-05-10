import React from "react";
import ChatHeader from "./ChatItems/ChatHeader";

const ChatSection = () => {
  return (
    <div className="w-full">
      <ChatHeader />
      {/* chats come here */}
      <div className="d-flex my-2"></div>
    </div>
  );
};

export default ChatSection;
