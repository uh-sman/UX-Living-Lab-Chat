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
    <div>
      <div className="">
        <h5>{title}</h5>
        <main>
          <h6>Added Details</h6>
          <div className="">
            <ul>
              <li>
                <FaPhone /> + Phone Number
              </li>
              <li>
                <CiMail /> + Email
              </li>
              <li>
                <BiWorld /> + Website
              </li>
              <li>
                <AiFillHome /> + Address
              </li>
            </ul>
          </div>
        </main>
      </div>
      <div className="">
        <h5>{ux}</h5>
        <main>
          <h6>Added Details</h6>
          <div className="">
            <ul>
              <li>
                <BiLike /> + Liked Since Jan 18,2023
                {/* date from the api */}
              </li>
              <li>
                <FaBriefcase /> + Works at Graphic Designer
              </li>
              <li>
                <FaGraduationCap /> + Studied at Harvard University Cambridge
                {/* Place of work from the api */}
              </li>
              <li>
                <FaLocationArrow /> + From Cambridge, USA
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
  ux: "UX LIVING LAB PROFILE",
};
