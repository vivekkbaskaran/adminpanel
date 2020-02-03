import React from "react";
import TextFieldGroup from "../../components/common/TextFieldGroup";
import SelectFieldGroup from "../../components/common/selectFieldGroup";
import axios from "axios";

class SubcategoryADD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subcatgory_name: "",
      category_id: "",
      options: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.FormOnSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_DB}api/category/list`)
      .then(res => {
        if (res.status == 200) {
          this.setState({ options: res.data.data });
        }
      })
      .catch(err => console.log(err));
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    let formdata = {
      subcatgory_name: this.state.subcatgory_name,
      category_id: this.state.category_id
    };
    axios
      .post(`${process.env.REACT_APP_DB}api/subcategory/add/`, formdata)
      .then(res => {
        if (res.status == 200) {
          this.props.history.push(`/subcategory`);
        }
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="main-panel padding-60">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">ADD Subcategory</h4>
                  <form className="pt-3" onSubmit={this.FormOnSubmit}>
                    <TextFieldGroup
                      name="subcatgory_name"
                      type="text"
                      value={this.state.subcatgory_name}
                      placeholder="subcatgory name"
                      onChange={this.handleChange}
                    />
                    <select
                      onChange={this.handleChange}
                      name="category_id"
                      placeholder="Select Category"
                      className="form-control form-control-lg"
                    >
                      <option value="0">select category</option>
                      {this.state.options.map(res => {
                        return (
                          <option key={res._id} value={res._id}>
                            {res.catgory_name}
                          </option>
                        );
                      })}
                    </select>

                    <div className="mt-3">
                      <input
                        type="submit"
                        value="Add Subcategory"
                        className="btn btn-block btn-gradient-primary auth-form-btn"
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

export default SubcategoryADD;
