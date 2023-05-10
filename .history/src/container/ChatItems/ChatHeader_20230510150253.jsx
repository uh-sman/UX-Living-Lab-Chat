import React from "react";
import Buttons from "./Buttons";
import HeaderButtons from "./HeaderButtons";

const ChatHeader = ({ title, caption }) => {
  return (
    <div>
      <div className=" d-flex gap-20">
        <header>
          <h1 className="header fs-4 fw-bold text-success">{title}</h1>
          <p className="fw-medium  Header-font">{caption}</p>
        </header>
        <HeaderButtons />
      </div>
      <Buttons />
      <div className="border-bottom border-success my-4"></div>
    </div>
  );
};

export default ChatHeader;
ChatHeader.defaultProps = {
  title: "Chat Response",
  caption: "Respond to messages, set up automations and more",
};
