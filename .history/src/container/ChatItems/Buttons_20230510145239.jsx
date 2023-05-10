import React from "react";

const Buttons = () => {
  return (
    <div className="d-flex gap-4">
      <button type="button" className="button3 ">
        Login
      </button>
      <button type="button" className="button ">
        Extension
      </button>
      <button type="button" className="button3 ">
        Living-Lab-Admin
      </button>
      <button type="button" className="button ">
        Sales-Agent
      </button>
      <button type="button" className="button3 ">
        DoWell CSC
        <small className="bg-primary text-white">{"99"}</small>
      </button>
    </div>
  );
};

export default Buttons;
