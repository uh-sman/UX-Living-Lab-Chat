import React from "react";
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BiWorld } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
const AboutDetails = ({ title }) => {
  const data = [
    {
      phone: "Phone Number",
      email: "Email",
      web: "Website",
    },
  ];
  return (
    <div>
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
  );
};

export default AboutDetails;

AboutDetails.defaultProps = {
  title: "About",
};
