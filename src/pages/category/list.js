import React, { Component } from "react";
import { Link } from "react-router-dom";
import { get_category } from "../../actions/categoryAction";
import { connect } from "react-redux";

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    this.props.get_category();
  }

  render() {
    const mainPanleStyle = {
      paddingTop: "60px"
    };
    if (!this.props.category.length) {
      return "Loading";
    }

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
                      {this.props.category.map(res => {
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

const mapStateToProps = state => ({
  category: state.categories.category
});
export default connect(mapStateToProps, { get_category })(CategoryList);
