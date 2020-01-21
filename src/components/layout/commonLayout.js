import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CommonLayout extends Component {
  render() {
    return (
      <div>
        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            {/* <a className="navbar-brand brand-logo" href="../../index.html">
              <img src="../../assets/images/logo.svg" alt="logo" />
            </a>
            <a className="navbar-brand brand-logo-mini" href="../../index.html">
              <img src="../../assets/images/logo-mini.svg" alt="logo" />
            </a> */}
          </div>
        </nav>
        <div className="container-fluid p-0 page-body-wrapper">
          <div className="row no-gutters">
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    <span className="menu-title">Dashboard</span>
                    <i className="mdi mdi-home menu-icon"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category">
                    <span className="menu-title">Category</span>
                    <i className="mdi mdi-home menu-icon"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/subcategory">
                    <span className="menu-title">Subcategory</span>
                    <i className="mdi mdi-home menu-icon"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    <span className="menu-title">Products</span>
                    <i className="mdi mdi-home menu-icon"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
