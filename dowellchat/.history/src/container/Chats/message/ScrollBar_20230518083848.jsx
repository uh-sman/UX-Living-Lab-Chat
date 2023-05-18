import React from "react";
import "./scrollbar.css";
const ScrollBar = () => {
  return (
    <div>
      <div id="wrapper">
        <div class="scrollbar" id="style-1">
          <div class="force-overflow"></div>
        </div>

        {/* <div class="scrollbar" id="style-2">
          <div class="force-overflow"></div>
        </div> */}
      </div>
    </div>
  );
};

export default ScrollBar;
