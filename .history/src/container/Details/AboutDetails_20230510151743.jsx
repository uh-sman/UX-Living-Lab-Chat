import React from "react";

const AboutDetails = ({ title }) => {
  return (
    <div>
      <h5>{title}</h5>
    </div>
  );
};

export default AboutDetails;

AboutDetails.defaultProps = {
  title: "About",
};
