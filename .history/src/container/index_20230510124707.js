import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./DetailsSection";
const Container = () => {
  return (
    <div className="container-sm container-md container-lg container-xl container-xxl m">
      <div className="d-flex justify-content-between">
        <ChatSection />
        <DetailsSection />
      </div>
    </div>
  );
};

export default Container;
