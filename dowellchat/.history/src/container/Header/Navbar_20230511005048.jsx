import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="container">
        <div className="d-flex justify-content-between">
          <a href="" className="text-black fs-3 fb-bold">
            UX Living Lab Chat
          </a>
          <ul className="d-flex justify-content-evenly">
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
