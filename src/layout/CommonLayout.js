import React, { Fragment } from "react";

class CommonLayout extends React.Component {
  render() {
    return (
      <section>
        <div className="left-side sticky-left-side">
          <div className="logo">
            <h1>
              <a href="index.html">Admin</a>
            </h1>
          </div>

          <div className="left-side-inner">
            <ul className="nav nav-pills nav-stacked custom-nav">
              <li>
                <a href="index.html">
                  <i className="lnr lnr-power-switch"></i>
                  <span>Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          <div className="header-section">
            <div className="menu-right">
              <div className="user-panel-top">
                <div className="profile_details">
                  <ul>
                    <li className="dropdown profile_details_drop">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="profile_img">
                          <span> </span>
                          <div className="user-name">
                            <p>
                              Michael<span>Administrator</span>
                            </p>
                          </div>
                          <i className="lnr lnr-chevron-down"></i>
                          <i className="lnr lnr-chevron-up"></i>
                          <div className="clearfix"></div>
                        </div>
                      </a>
                      <ul className="dropdown-menu drp-mnu">
                        <li>
                          {" "}
                          <a href="#">
                            <i className="fa fa-cog"></i> Settings
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="#">
                            <i className="fa fa-user"></i>Profile
                          </a>{" "}
                        </li>
                        <li>
                          {" "}
                          <a href="sign-up.html">
                            <i className="fa fa-sign-out"></i> Logout
                          </a>{" "}
                        </li>
                      </ul>
                    </li>
                    <div className="clearfix"> </div>
                  </ul>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
          <div id="page-wrapper"></div>
        </div>
      </section>
    );
  }
}

export default CommonLayout;
