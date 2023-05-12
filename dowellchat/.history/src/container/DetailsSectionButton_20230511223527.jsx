import React from "react";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { CgCloseR } from "react-icons/cg";
const DetailsSectionButton = () => {
  return (
    <div>
      <div className="d-flex gap-5 mt-4">
        <MdOutlineMoreHoriz />
        <CgCloseR />
      </div>
    </div>
  );
};

export default DetailsSectionButton;
