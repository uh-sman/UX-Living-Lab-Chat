import React from "react";

const Buttons = () => {
  return (
    <div className="d-flex gap-4 overflow-x-scroll overflow-lg-none overflow-xl-none overflow-xxl-none">
      <button type="button" className="btn btn-lg-full button2">
        Login
      </button>
      <button type="button" className="btn button3">
        Extension
      </button>
      <button type="button" className="btn button2">
        Living-Lab-Admin
      </button>
      <button type="button" className="btn border-danger border-3">
        Sales-Agent
      </button>
      <button type="button" className="btn button2">
        DoWell CSC
        <small className="bg-success text-white px-2 py-1 rounded">
          {"99"}
        </small>
      </button>
    </div>
  );
};

export default Buttons;
