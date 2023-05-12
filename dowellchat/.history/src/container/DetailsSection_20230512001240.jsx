import React from "react";
import user from "../assets/user.jpg";
import AboutDetails from "./Details/AboutDetails";
import DetailsSectionButton from "./DetailsSectionButton";
const DetailsSection = ({ title, about }) => {
  return (
    <div className="d-none d-md-none d-lg-block d-xl-block d-xxl-block">
      <div className=" " style={{ width: "18rem" }}>
        <div className="cardBody">
          <div className="mx-4">
            <div
              className="d-flex gap-5 my-4 "
              style={{ borderBottom: "1px solid #7A7A7A" }}
            >
              <figure className="d-flex gap-2">
                <img src={user} className=" image-style" />
                <div className="">
                  <h5
                    className="body fw-bold text-nowrap"
                    style={{ fontSize: "18px" }}
                  >
                    {title}
                  </h5>
                  <a
                    href=""
                    className=""
                    style={{
                      fontSize: "14px",
                      textDecoration: "none",
                      paddingTop: "-40px",
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
