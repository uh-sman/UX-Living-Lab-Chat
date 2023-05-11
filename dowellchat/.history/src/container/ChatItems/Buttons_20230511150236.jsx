import React from "react";

const Buttons = () => {
  return (
    <div className="d-flex flex-nowrap">
      <div className="d-flex flex-nowrap gap-2 overflow-x-scroll text-nowrap">
        <button type="button" className="btn btn-sm btn-success">
          Login
        </button>
        <button type="button" className=" btn btn-sm btn-danger">
          Extension
        </button>
        <button type="button" className="btn btn-success btn-sm fs-6">
          Living-Lab-Admin
        </button>
        <button
          type="button"
          className="btn btn-sm border-danger border-3 btn-block"
        >
          Sales-Agent
        </button>
        <button type="button" className="btn btn-sm btn-success">
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
