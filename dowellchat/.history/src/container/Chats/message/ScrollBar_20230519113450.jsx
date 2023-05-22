import React from "react";
import "./scrollbar.css";
import Message from "./Message";
import ReplyChat from "./ReplyChat";
const ScrollBar = ({ message }) => {
  return (
    <div>
      <div id="wrapper">
        <div class="scrollbar" id="style-1">
          <div class="force-overflow">
            <Message message={message} />
          </div>
        </div>

        {/* <div class="scrollbar" id="style-2">
          <div class="force-overflow"></div>
        </div> */}
        <ReplyChat />
      </div>
    </div>
  );
};

export default ScrollBar;
