import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./Details/DetailsSection";
const Container = () => {
  return (
    <div className="w-full">
      <div className="d-flex gap-5 justify-content-start justify-content-md-start justify-content-lg-around justify-content-xl-around justify-content-xxl-around my-4 mx-2">
        <ChatSection />
        <div className="">
          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default Container;
