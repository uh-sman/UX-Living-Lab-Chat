import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./DetailsSection";
const Container = () => {
  return (
    <div className="">
      <div className="d-flex justify-content-between">
        <ChatSection />
        <DetailsSection />
      </div>
    </div>
  );
};

export default Container;
