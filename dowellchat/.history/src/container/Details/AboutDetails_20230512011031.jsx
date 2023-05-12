import React from "react";
import {
  FaPhone,
  FaBriefcase,
  FaGraduationCap,
  FaLocationArrow,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BiWorld, BiLike } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
const AboutDetails = ({ title, ux }) => {
  const data = [
    {
      phone: "Phone Number",
      email: "Email",
      web: "Website",
    },
  ];
  return (
    <div className="container" style={{ marginBottom: "5rem" }}>
      <div className="lh-lg">
        <h5 className="mb-4 fs-6 fw-bold">{title}</h5>
        <main>
          <p style={{ color: "#A9A9A9", fontSize: "14px" }}>Added Details</p>
          <div className="">
            <ul>
              <li className="">
                <small style={{ color: "#A9A9A9" }}>
                  <FaPhone /> + Phone Number
                </small>
              </li>
              <li>
                <small style={{ color: "#A9A9A9" }}>
                  <CiMail /> + Email
                </small>
              </li>
              <li>
                <small style={{ color: "#A9A9A9" }}>
                  <BiWorld /> + Website
                </small>
              </li>
              <li>
                <small style={{ color: "#A9A9A9" }}>
                  <AiFillHome /> + Address
                </small>
              </li>
            </ul>
          </div>
        </main>
      </div>
      <div className="lh-lg mt-5">
        <h5 className="fs-6 fw-bold">{ux}</h5>
        <main>
          <div className="">
            <ul>
              <li>
                <small style={{ color: "#A9A9A9" }}>
                  <BiLike /> Liked Since Jan 18,2023
                </small>
                {/* date from the api */}
              </li>
              <li>
                <small style={{ color: "#A9A9A9" }}>
                  <FaBriefcase /> + Works at Graphic Designer
                </small>
              </li>
              <li>
                <small style={{ color: "#A9A9A9" }}>
                  <FaGraduationCap className="fs-4" /> +<br /> Studied at
                  Harvard University Cambridge
                </small>
                {/* Place of work from the api */}
              </li>
              <li>
                <small style={{ color: "#A9A9A9" }}>
                  <FaLocationArrow /> + From Cambridge, USA
                </small>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AboutDetails;

AboutDetails.defaultProps = {
  title: "About",
  ux: "UX Living Lab Profile",
};
// color: "#54595F",
