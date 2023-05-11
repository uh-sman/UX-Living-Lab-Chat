import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <nav className="container border-bottom">
        <div className="d-flex justify-content-between mx-3 my-4 ">
          <a href="" className="text-black fs-3 fb-bold">
            UX Living Lab Chat
          </a>
          <ul className="d-flex gap-4 d-none d-md-none d-lg-flex d-xl-flex d-xxl-flex">
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
