import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./Details/DetailsSection";
const Container = () => {
  return (
    <div className="container mx-auto">
      <div className="d-flex gap-5 justify-content-start justify-content-md-start justify-content-lg-center justify-content-xl-center justify-content-xxl-center my-4 mx-2">
        <ChatSection />
        <div className="d-hidden d-lg-block">
          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default Container;
