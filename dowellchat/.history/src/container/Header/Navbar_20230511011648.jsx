import React from "react";
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  return (
    <div className="">
      <nav className="container border-bottom ">
        <div className="d-flex justify-content-between align-items-center mx-3 my-4">
          <a href="" className="text-black fs-3 fb-bold">
            UX Living Lab Chat
          </a>
          <button className="btn bg-primary d-block d-md-block d-lg-none d-xl-none d-xxl-none">
            <BiMenu />
          </button>
          <ul className="d-none gap-4 d-none d-md-none d-lg-flex d-xl-flex d-xxl-flex">
            <a>chatrespones</a>
            <a>Glossary</a>
            <a>Home</a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
