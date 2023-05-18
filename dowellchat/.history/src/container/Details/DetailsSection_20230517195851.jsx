import React from "react";
import user from "../../assets/avatar.png";
import AboutDetails from "./AboutDetails";
import DetailsSectionButton from "./DetailsSectionButton";
const DetailsSection = ({ title, about }) => {
  return (
    <div className="container d-none d-md-none d-lg-none d-xl-block d-xxl-block">
      <div className=" " style={{ width: "19rem" }}>
        <div className="cardBody">
          <div className="mx-4 my-4">
            <div
              className="d-flex gap-5  "
              style={{ borderBottom: "1px solid #7A7A7A" }}
            >
              <figure className="d-flex gap-2">
                <img src={user} className=" image-style" />
                <div className="d-flex flex-column">
                  <h1
                    className="fw-bold text-nowrap"
                    style={{ fontSize: "18px" }}
                  >
                    {title}
                  </h1>
                  <a
                    href=""
                    className=" text-nowrap text-primary text-decoration-none"
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    View Profile
                  </a>
                </div>
              </figure>
              <DetailsSectionButton />
            </div>
            {/* DETAILS */}
            <AboutDetails />
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
