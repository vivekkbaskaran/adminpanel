import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_DB}api/category/list`)
      .then(res => {
        this.setState({ categories: res.data.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const mainPanleStyle = {
      paddingTop: "60px"
    };
    console.log(this.state.categories);
    return (
      <div className="main-panel" style={mainPanleStyle}>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Basic Table</h4>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.categories.map(res => {
                        return (
                          <tr key={res._id}>
                            <td>{res.catgory_name}</td>
                            <td>
                              <Link to={`/category/${res._id}`}>VIEW</Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
