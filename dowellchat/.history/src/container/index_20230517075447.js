import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./Details/DetailsSection";
const Container = () => {
  return (
    <div className="">
      <div className="d-flex gap-5 justify-content-start justify-content-md-start m-auto my-4 mx-2 mx-md- mx-lg-5 mx-xl-5 mx-xxl-5">
        <ChatSection />
        <div className="">
          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default Container;
