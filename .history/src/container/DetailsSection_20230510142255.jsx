import React from "react";
import user from "../assets/user.jpg";
import DetailsSectionButton from "./DetailsSectionButton";
const DetailsSection = ({ title }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="d-flex mt-4 mx-4">
          <figure className="d-flex">
            <img src={user} className=" image-style" />
            <div className="">
              <h4 className="body fw-bold">{title}</h4>
              <a href="">View Profile</a>
            </div>
          </figure>
          <DetailsSectionButton />
        </div>
        <div className="card-body">
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
    </div>
  );
};
DetailsSection.defaultProps = {
  title: "John Doe",
};

export default DetailsSection;
