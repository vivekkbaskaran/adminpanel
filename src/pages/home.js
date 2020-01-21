import React, { Component } from "react";

export default class Home extends Component {
  render() {
    const mainPanleStyle = {
      paddingTop: "60px"
    };
    return (
      <div className="main-panel" style={mainPanleStyle}>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Basic Table</h4>
                  Dashboard
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
