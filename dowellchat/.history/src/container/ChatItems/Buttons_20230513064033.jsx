import React from "react";
import "./button.css";
import $ from "jquery";
const Buttons = () => {
  return (
    <div className="container-full">
      <div className=" d-flex flex-nowrap">
        <div className="d-flex flex-nowrap gap-3  text-nowrap py-3" id="scroll">
          <button type="button" className="rounded  button3">
            Login
          </button>
          <button type="button" className="rounded button4">
            Extension
          </button>
          <button type="button" className="rounded button3 fs-6">
            Living-Lab-Admin
          </button>
          <button type="button" className="rounded buttonCustom">
            Sales-Agent
          </button>
          <button type="button" className="rounded button3">
            DoWell CSC
            <small className="bg-primary text-white px-2 py-1 rounded">
              {"99"}
            </small>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
