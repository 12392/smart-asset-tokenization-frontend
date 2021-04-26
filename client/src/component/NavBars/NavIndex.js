import React from "react";

const navIndex = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg_custom border_radius">
        <div className="collapse navbar-collapse m-1">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ml-4">
              <a className="nav-link" href="#">
                DASHBOARD
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link clicked" href="#">
                SYSTEM
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link" href="#">
                ACCOUNT
              </a>
            </li>
            <li className="nav-item ml-4">
              <a className="nav-link" href="#">
                SUPPORT
              </a>
            </li>
          </ul>
          <form className="form-inline my-lg-0">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown mr-4">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Account
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    Dashboard
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Signout
                  </a>
                </div>
              </li>
              <li className="nav-item mr-4">
                <a className="nav-link" href="#">
                  HELP
                </a>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default navIndex;
