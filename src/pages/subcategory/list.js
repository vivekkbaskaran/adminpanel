import React from "react";
import { Link } from "react-router-dom";
import { get_subcategory } from "../../actions/subcategoryAction";
import { connect } from "react-redux";

class SubcategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subcategories: []
    };
  }
  componentDidMount() {
    this.props.get_subcategory();
  }
  navigate(add) {
    console.log("test" + add);
  }
  render() {
    if (!this.props.subcategory.length) {
      return "Loading";
    }

    return (
      <div className="main-panel padding-60">
        <div className="content-wrapper">
          <Link to="subcategoryadd">
            <button>ADD</button>
          </Link>
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
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.subcategory.map(res => {
                        return (
                          <tr key={res._id}>
                            <td>{res.subcatgory_name}</td>
                            <td>{res.catgory_name}</td>
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
  subcategory: state.subcategories.subcategory1
});

export default connect(mapStateToProps, { get_subcategory })(SubcategoryList);
