import React from "react";

const Buttons = () => {
  return (
    <div className="d-flex gap-4">
      <button type="button" className="button3 d-flex align-items-center">
        Login
      </button>
      <button type="button" className="button4 d-flex align-items-center">
        Extension
      </button>
      <button type="button" className="button3 d-flex align-items-center">
        Living-Lab-Admin
      </button>
      <button type="button" className="button d-flex align-items-center">
        Sales-Agent
      </button>
      <button type="button" className="button3 d-flex align-items-center">
        DoWell CSC
        <small className="bg-primary text-white px-2 py-1 rounded">
          {"99"}
        </small>
      </button>
    </div>
  );
};

export default Buttons;
