import React from "react";
import user from "../assets/user.jpg";
import DetailsSectionButton from "./DetailsSectionButton";
const DetailsSection = ({ title }) => {
  return (
    <div>
      <div className="card " style={{ width: "18rem" }}>
        <div className="">
          <div className="d-flex gap-5 mt-4 mx-4">
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
          <div className="card-body mb-3">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};
DetailsSection.defaultProps = {
  title: "John Doe",
};

export default DetailsSection;
