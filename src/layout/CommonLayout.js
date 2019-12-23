import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class CommonLayout extends React.Component {
  constructor(props) {
    super(props);
  }

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
                <Link to={"/dashboard"} className="nav-link">
                  <i className="lnr lnr-power-switch"></i>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to={"/category"} className="nav-link">
                  <i className="lnr lnr-power-switch"></i>
                  <span>Category</span>
                </Link>
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
                    </li>
                    <div className="clearfix"> </div>
                  </ul>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
          {this.props.children}
          <div id="page-wrapper"></div>
        </div>
      </section>
    );
  }
}

export default CommonLayout;
