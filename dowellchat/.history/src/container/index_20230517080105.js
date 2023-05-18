import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./Details/DetailsSection";
const Container = () => {
  return (
    <div className="">
      <div className="w-full d-flex gap-5 justify-content-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start m-auto ">
        <ChatSection />
        <div className="">
          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default Container;
