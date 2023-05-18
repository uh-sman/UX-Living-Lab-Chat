import React from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./Details/DetailsSection";
const Container = () => {
  return (
    <div className="container">
      <div>
        <ChatSection />
        <div className=""></div>
        {/* <DetailsSection /> */}
      </div>
    </div>
  );
};

export default Container;
