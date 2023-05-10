import React from "react";
import ChatHeader from "./ChatItems/ChatHeader";
import ProfileHead from "./Chats/message/ProfileHead";
import SearchBar from "./Chats/SearchBar";

const ChatSection = () => {
  return (
    <div className="container">
      <ChatHeader />
      {/* chats come here */}
      <div className="d-flex flex-sm-column flex-md-column my-2">
        <SearchBar />
        <ProfileHead />
      </div>
    </div>
  );
};

export default ChatSection;
