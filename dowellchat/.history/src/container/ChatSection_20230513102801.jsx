import React from "react";
import ChatHeader from "./ChatItems/ChatHeader";
import ProfileHead from "./Chats/message/ProfileHead";
import ReplyChat from "./Chats/message/ReplyChat";
import SearchBar from "./Chats/SearchBar";

const ChatSection = () => {
  return (
    <div className="container-full">
      <ChatHeader />
      {/* chats come here */}
      <div
        className="
      "
      >
        <div className="d-flex myStyle flex-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row mb-5 mb-md-5 mb-lg-2 mb-lg-2 mb-xl-2 mb-xxl-2">
          <SearchBar />
          <ProfileHead />
        </div>
      </div>
      <ReplyChat />
    </div>
  );
};

export default ChatSection;
