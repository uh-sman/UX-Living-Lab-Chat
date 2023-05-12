import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./Details/DetailsSection";
const Container = () => {
  return (
    <div className="container mx-4">
      <div className="d-flex justify-content-center my-4">
        <ChatSection />
        <div className="d-hidden d-md-block">
          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default Container;
