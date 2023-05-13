import React from "react";
import user from "../../assets/avatar.png";
import AboutDetails from "./AboutDetails";
import DetailsSectionButton from "./DetailsSectionButton";
const DetailsSection = ({ title, about }) => {
  return (
    <div className="d-none d-md-none d-lg-block d-xl-block d-xxl-block">
      <div className=" " style={{ width: "19rem" }}>
        <div className="cardBody">
          <div className="mx-4">
            <div
              className="d-flex gap-5 my-4 "
              style={{ borderBottom: "1px solid #7A7A7A" }}
            >
              <figure className="d-flex">
                <img src={user} className=" image-style" />
                <div className="d-flex flex-column">
                  <p
                    className="body fw-bold text-nowrap"
                    style={{ fontSize: "18px" }}
                  >
                    {title}
                  </p>
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
