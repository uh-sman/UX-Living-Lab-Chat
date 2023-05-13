import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./Details/DetailsSection";
const Container = () => {
  return (
    <div className="container">
      <div className="d-flex gap-5 justify-content-start  justify-content-lg-center justify-content-xl-center justify-content-xxl-center my-4">
        <ChatSection />
        <div className="">
          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default Container;
