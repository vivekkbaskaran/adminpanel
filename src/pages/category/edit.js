import React, { Component } from "react";
import axios from "axios";

export default class CategoryEdit extends Component {
  state = {
    catgory_name: "",
    category_id: ""
  };

  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_DB}api/category/list/${this.props.match.params.id}`
      )
      .then(res => {
        this.setState({
          catgory_name: res.data.data.catgory_name,
          category_id: res.data.data._id
        });
      })
      .catch(err => console.log(err));
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (event, val) => {
    event.preventDefault();
    axios
      .put(
        `${process.env.REACT_APP_DB}api/category/list/${this.state.category_id}`,
        this.state
      )
      .then(res => {
        if (res.status === 200) {
          console.log(res);
        }
        //this.setState({ categories: res.data.data });
      })
      .catch(err => console.log(err));
  };
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
                  <h4 className="card-title">Category Edit</h4>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="catgory_name"
                        className="form-control form-control-lg"
                        value={this.state.catgory_name}
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
