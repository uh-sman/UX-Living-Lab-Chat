import React from "react";

const AboutDetails = () => {
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
