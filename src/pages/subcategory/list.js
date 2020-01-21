import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class SubcategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subcategories: []
    };
  }
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_DB}api/subcategory/list`)
      .then(res => {
        console.log(res.data.data);
        this.setState({ subcategories: res.data.data });
      })
      .catch(err => console.log(err));
  }

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
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Subcategory Name</th>
                        <th>Category Name</th>
                        <th>VIEW</th>
                        <th>EDIT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.subcategories.map(res => {
                        return (
                          <tr key={res._id}>
                            <td>{res.subcatgory_name}</td>
                            <td>{res.catgory_name}</td>
                            <td>
                              <Link to={`/subcategory/view/${res._id}`}>
                                VIEW
                              </Link>
                            </td>
                            <td>
                              <Link to={`/category/edit/${res._id}`}>EDIT</Link>
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
