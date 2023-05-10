import React from "react";
import ChatHeader from "./ChatItems/ChatHeader";
import ProfileHead from "./Chats/message/ProfileHead";
import ReplyChat from "./Chats/message/ReplyChat";
import SearchBar from "./Chats/SearchBar";

const ChatSection = () => {
  return (
    <div className="container">
      <ChatHeader />
      {/* chats come here */}
      <div className="d-flex  flex-column flex-md-column flex-lg-row flex-xl-row flex-xxl-row my-2">
        <SearchBar />
        <ProfileHead />
      </div>
      <ReplyChat />
    </div>
  );
};

export default ChatSection;
