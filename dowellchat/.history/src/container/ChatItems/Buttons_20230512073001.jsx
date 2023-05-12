import React from "react";
import "./button.css";
import $ from "jquery";
const Buttons = () => {
  return (
    <div className="d-flex flex-nowrap">
      <div className="d-flex flex-nowrap gap-2  text-nowrap py-3" id="scroll">
        <button type="button" className="rounded btn-sm button3">
          Login
        </button>
        <button type="button" className=" btn btn-sm">
          Extension
        </button>
        <button type="button" className="rounded btn-sm button3 fs-6">
          Living-Lab-Admin
        </button>
        <button
          type="button"
          className="btn btn-sm border-danger border-3 btn-block"
        >
          Sales-Agent
        </button>
        <button type="button" className="rounded btn-sm button3">
          DoWell CSC
          <small className="bg-primary text-white px-2 py-1 rounded">
            {"99"}
          </small>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
