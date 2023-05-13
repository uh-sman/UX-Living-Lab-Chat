import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./Details/DetailsSection";
const Container = () => {
  return (
    <div className="container mx-auto">
      <div className="d-flex gap-5 justify-content-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start my-4">
        <ChatSection />
        <div className="d-hidden d-md-block">
          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default Container;
