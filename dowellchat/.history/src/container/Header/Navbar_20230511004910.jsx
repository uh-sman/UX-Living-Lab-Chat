import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="d-flex justify-content-between">
          <a href="" className="text-black">
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
