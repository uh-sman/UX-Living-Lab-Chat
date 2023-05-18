import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./Details/DetailsSection";
const Container = () => {
  return (
    <div className="">
      <div className="d-flex gap-5 justify-content-start justify-content-md-start justify-content-lg-around justify-content-xl-around justify-content-xxl-around my-4 mx-2 mx-md-3 mx-lg-0 mx-xl-0 mx-xxl-0">
        <ChatSection />
        <div className="">
          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default Container;
