import React from "react";
import {
  FaPhone,
  FaBriefcase,
  FaGraduationCap,
  FaLocationArrow,
  FaRegThumbsUp,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaCaretSquareUp, FaRegEnvelope } from "react-icons/fa";
import { BiWorld, BiLike } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
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
    <div
      className="container"
      style={{ marginBottom: "5rem", marginTop: "1rem" }}
    >
      <div className="lh-lg">
        <h5 className="mb-4 fs-6 fw-bold">{title}</h5>
        <main>
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>Added Details</p>
          <div className="">
            <ul>
              <li className="">
                <small style={{ color: "#94a3b8" }}>
                  <FaPhone className="fw-bold fs-6" /> + Phone Number
                </small>
              </li>
              <li>
                <small style={{ color: "#94a3b8" }}>
                  <FaRegEnvelope className="fw-bold fs-6" /> + Email
                </small>
              </li>
              <li>
                <small style={{ color: "#94a3b8" }}>
                  <BiWorld className="fw-bold fs-5" /> + Website
                </small>
              </li>
              <li>
                <small style={{ color: "#94a3b8" }}>
                  {/* <AiFillHome /> + Address */}
                  <HiHome className="fw-bold fs-5" /> + Address
                </small>
              </li>
            </ul>
          </div>
        </main>
      </div>
      <div className="lh-lg " style={{ marginTop: "2rem" }}>
        <h5 className="fs-6 fw-bold">{ux}</h5>
        <main>
          <div className="">
            <ul>
              <li>
                <small style={{ color: "#94a3b8" }}>
                  <FaRegThumbsUp className="fw-bold fs-6" /> Liked Since Jan
                  18,2023
                </small>
                {/* date from the api */}
              </li>
              <li>
                <small style={{ color: "#94a3b8" }}>
                  <FaBriefcase className="fw-bold fs-6" /> Works at Graphic
                  Designer
                </small>
              </li>
              <li>
                <small style={{ color: "#94a3b8" }}>
                  <FaGraduationCap className="fw-bold fs-6" /> <br /> Studied at
                  Harvard University Cambridge
                </small>
                {/* Place of work from the api */}
              </li>
              <li>
                <small style={{ color: "#94a3b8" }}>
                  <FaLocationArrow className="fw-bold fs-6" /> From Cambridge,
                  USA
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
