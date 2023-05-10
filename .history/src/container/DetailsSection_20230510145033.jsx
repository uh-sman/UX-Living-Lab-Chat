import React from "react";
import user from "../assets/user.jpg";
import DetailsSectionButton from "./DetailsSectionButton";
const DetailsSection = ({ title, about }) => {
  return (
    <div>
      <div className="card " style={{ width: "18rem" }}>
        <div className="mx-2">
          <div className="d-flex gap-5 mt-4 ">
            <figure className="d-flex gap-2">
              <img src={user} className=" image-style" />
              <div className="">
                <h4 className="body fw-bold" style={{ fontSize: "18px" }}>
                  {title}
                </h4>
                <a href="" className="fw-bold" style={{ fontSize: "14px" }}>
                  View Profile
                </a>
              </div>
            </figure>
            <DetailsSectionButton />
          </div>
          <div className="border-bottom border-danger mx-2 my-3"></div>
          <div className="">
            <h5>{about}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
DetailsSection.defaultProps = {
  title: "John Doe",
  about: "About",
};

export default DetailsSection;
