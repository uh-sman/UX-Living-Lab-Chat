import { useState } from "react";
import ChatSection from "./ChatSection";
import DetailsSection from "./Details/DetailsSection";
const Container = () => {
  // const [chatHeader, setChatHeader] = useState("");

  // const onSetChatHeader = (header) => setChatHeader(header);
  return (
    <div className="">
      <div className="d-flex gap-5 justify-content-start justify-content-md-start justify-content-lg-center justify-content-xl-center justify-content-xxl-center">
        <ChatSection />
        <div className="">
          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default Container;
