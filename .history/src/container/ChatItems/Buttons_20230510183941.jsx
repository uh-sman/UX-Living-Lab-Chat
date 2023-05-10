import React from "react";

const Buttons = () => {
  return (
    <div className="d-flex gap-4">
      <button type="button" className="btn btn-primary">
        Login
      </button>
      <button type="button" className="btn btn-primary">
        Extension
      </button>
      <button type="button" className="btn btn-primary">
        Living-Lab-Admin
      </button>
      <button type="button" className="btn border-danger border-2">
        Sales-Agent
      </button>
      <button type="button" className="btn btn-primary">
        DoWell CSC
        <small className="bg-success text-white px-2 py-1 rounded">
          {"99"}
        </small>
      </button>
    </div>
  );
};

export default Buttons;
