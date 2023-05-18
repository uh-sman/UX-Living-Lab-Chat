import React from "react";
import "./scrollbar.css";
import Message from "./Message";
const ScrollBar = ({ message }) => {
  return (
    <div>
      <div id="wrapper">
        <div class="scrollbar" id="style-1">
          <div class="force-overflow"></div>
        </div>
        <Message message={message} />

        {/* <div class="scrollbar" id="style-2">
          <div class="force-overflow"></div>
        </div> */}
      </div>
    </div>
  );
};

export default ScrollBar;
