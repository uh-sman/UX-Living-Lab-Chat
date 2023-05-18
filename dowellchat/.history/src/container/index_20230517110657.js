import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./Details/DetailsSection";
const Container = () => {
  return (
    <div className="">
      <div className="w-full d-flex justify-content-start justify-content-md-start justify-content-around justify-content-around justify-content-around flex-1">
        <ChatSection />
        <div className=""></div>
        {/* <DetailsSection /> */}
      </div>
    </div>
  );
};

export default Container;
