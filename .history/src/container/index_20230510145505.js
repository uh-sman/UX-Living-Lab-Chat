import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./DetailsSection";
const Container = () => {
  return (
    <div
      className="container-sm
    m-5 container-md container-lg container-xl container-xxl m"
    >
      <div className="d-flex justify-content-around">
        <ChatSection />
        <DetailsSection />
      </div>
    </div>
  );
};

export default Container;
