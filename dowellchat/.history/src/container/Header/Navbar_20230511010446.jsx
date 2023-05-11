import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <nav className="container border-bottom ">
        <div className="d-flex justify-content-between mx-3 my-4 ">
          <a href="" className="text-black fs-3 fb-bold">
            UX Living Lab Chat
          </a>
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className="d-none gap-4 d-none d-md-none d-lg-flex d-xl-flex d-xxl-flex">
                <a>chatrespones</a>
                <a>Glossary</a>
                <a>Home</a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
