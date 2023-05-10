import React from "react";

const Buttons = () => {
  return (
    <div className="d-flex gap-4 overflow-x-auto">
      <button type="button" className=" button3">
        Login
      </button>
      <button type="button" className=" button2">
        Extension
      </button>
      <button type="button" className=" button3">
        Living-Lab-Admin
      </button>
      <button type="button" className="btn border-danger border-3">
        Sales-Agent
      </button>
      <button type="button" className="button3">
        DoWell CSC
        <small className="bg-success text-white px-2 py-1 rounded">
          {"99"}
        </small>
      </button>
    </div>
  );
};

export default Buttons;
