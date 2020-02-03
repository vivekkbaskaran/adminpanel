import React, { Component } from "react";
import { view_category, update_category } from "../../actions/categoryAction";
import { connect } from "react-redux";
import { withRouter, browserHistory } from "react-router-dom";

class CategoryEdit extends Component {
  state = {
    catgory_name: "",
    category_id: ""
  };

  componentDidMount() {
    this.props.view_category(this.props.match.params.id);
  }

  onChange = e => {
    this.props.viewcategory.viewData = e.target.value;
  };

  onSubmit = (event, val) => {
    event.preventDefault();
    this.props.update_category(this.props.match.params.id, {
      catgory_name: this.props.viewcategory.viewData.catgory_name
    });
  };

  render() {
    if (this.props.updatedcategory.status == 200) {
      //  this.props.history.push("/category");
    }

    const mainPanleStyle = {
      paddingTop: "60px"
    };
    const { viewData } = this.props.viewcategory;
    if (!this.props.viewcategory) {
      return "Loading";
    }
    return (
      <div className="main-panel" style={mainPanleStyle}>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Category Edit</h4>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="catgory_name"
                        className="form-control form-control-lg"
                        defaultValue={viewData.catgory_name || ""}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="mt-3">
                      <input
                        type="submit"
                        className="btn btn-block btn-gradient-primary auth-form-btn"
                        value="submit"
                      />
                    </div>
                  </form>
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
  viewcategory: state.categories,
  updatedcategory: state.categories.updateData
});
export default connect(mapStateToProps, { view_category, update_category })(
  withRouter(CategoryEdit)
);
