import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./DetailsSection";
const Container = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-around my-4">
        <ChatSection />
        <DetailsSection />
      </div>
    </div>
  );
};

export default Container;
