import React from "react";
import "./scrollbar.css";
// import Message from "./Message";
import Rooms from "./Rooms";
const Scroll = ({ results }) => {
  return (
    <div>
      <div id="wrapper">
        <div class="scrollbar" id="style-1">
          <div class="force-overflow">
            <Rooms results={results} />
          </div>
        </div>

        {/* <div class="scrollbar" id="style-2">
          <div class="force-overflow"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Scroll;
