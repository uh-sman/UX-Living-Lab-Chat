import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./Details/DetailsSection";
const Container = () => {
  return (
    <div className="container">
      <div className="w-full d-flex justify-content-start justify-content-md-start justify-content-lg-around justify-content-xl-around justify-content-xxl-around flex-1 gap-3">
        <ChatSection />
        <div className=""></div>
        <DetailsSection />
      </div>
    </div>
  );
};

export default Container;
