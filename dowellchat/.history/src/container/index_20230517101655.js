import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./Details/DetailsSection";
const Container = () => {
  return (
    <div className="">
      <div className="w-full justify-content-start justify-content-md-start justify-content-around justify-content-around justify-content-around ">
        <ChatSection />
        <div className=""></div>
      </div>
      {/* <DetailsSection /> */}
    </div>
  );
};

export default Container;
