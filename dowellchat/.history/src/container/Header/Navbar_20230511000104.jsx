import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* <!-- Navigation --> */}
      <nav class="navbar navbar-default navbar-fixed-top navbar-shrink">
        <div class="container">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div class="navbar-header page-scroll">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand page-scroll" href="#page-top">
              Kristin Fincken
            </a>
          </div>

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div
            class="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul class="nav navbar-nav navbar-right">
              <li class="hidden active">
                <a href="#page-top"></a>
              </li>
              <li class="">
                <a class="page-scroll" href="design.html">
                  Design
                </a>
              </li>
              <li class="">
                <a class="page-scroll" href="photos.html">
                  Photos
                </a>
              </li>
              <li class="">
                <a class="page-scroll" href="web.html">
                  Web
                </a>
              </li>
              <li class="">
                <a class="page-scroll" href="words.html">
                  Words
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </nav>
    </div>
  );
};

export default Navbar;
