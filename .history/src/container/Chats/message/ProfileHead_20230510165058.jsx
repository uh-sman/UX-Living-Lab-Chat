import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import user from "../../../assets/user.jpg";
const ProfileHead = () => {
  return (
    <div>
      <div className="">
        <figure className="d-flex gap-2">
          <img src={user} className=" image-style" />
          <div className="">
            {/* Status active now if true show active */}
            <small className="text-primary">Active now</small>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default ProfileHead;
