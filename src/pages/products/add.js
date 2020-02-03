import React from "react";
import TextFieldGroup from "../../components/common/TextFieldGroup";
import axios from "axios";

class ProductADD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      product_image: null,
      category_id: "",
      subcategory_id: "",
      cat_options: [],
      subcat_options: [],
      subcat_results: [],
      product_price: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.FormOnSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.get_cat();
    this.get_subcat();
  }

  get_cat() {
    axios
      .get(`${process.env.REACT_APP_DB}api/category/list`)
      .then(res => {
        if (res.status == 200) {
          this.setState({ cat_options: res.data.data });
        }
      })
      .catch(err => console.log(err));
  }

  get_subcat() {
    axios
      .get(`${process.env.REACT_APP_DB}api/subcategory/list`)
      .then(res => {
        if (res.status == 200) {
          this.setState({ subcat_options: res.data.data });
        }
      })
      .catch(err => console.log(err));
  }

  handleChange(e) {
    if (e.target.name === "category_id") {
      const result = this.state.subcat_options.filter(
        result => result.category_id === e.target.value
      );
      this.setState({ subcat_results: result });
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleImageChange(e) {
    let file = e.target.files[0];
    this.setState({ product_image: file });
  }

  onSubmit(e) {
    e.preventDefault();
    let file = this.state.product_image;
    const formData = new FormData();
    formData.append("subcategory_id", this.state.subcategory_id);
    formData.append("category_id", this.state.category_id);
    formData.append("product_name", this.state.product_name);
    formData.append("product_image", file);
    formData.append("product_price", this.state.product_price);

    axios
      .post(`${process.env.REACT_APP_DB}api/product/add/`, formData)
      .then(res => {
        if (res.status == 200) {
          this.props.history.push(`/products`);
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
                  <h4 className="card-title">ADD products</h4>
                  <form className="pt-3" onSubmit={this.FormOnSubmit}>
                    <TextFieldGroup
                      name="product_name"
                      type="text"
                      value={this.state.product_name}
                      placeholder="Product Name"
                      onChange={this.handleChange}
                    />
                    <TextFieldGroup
                      name="product_price"
                      type="text"
                      value={this.state.product_price}
                      placeholder="Product Price"
                      onChange={this.handleChange}
                    />
                    <div className="form-group">
                      <select
                        name="category_id"
                        value={this.state.category_id}
                        onChange={this.handleChange}
                        className="form-control form-control-lg"
                      >
                        <option>Please Select Category</option>
                        {this.state.cat_options.map(data => {
                          return (
                            <option key={data._id} value={data._id}>
                              {data.catgory_name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-group">
                      <select
                        name="subcategory_id"
                        value={this.state.subcategory_id}
                        onChange={this.handleChange}
                        className="form-control form-control-lg"
                      >
                        <option>Please Select Subcategory</option>
                        {this.state.subcat_results.map(data => {
                          return (
                            <option key={data._id} value={data._id}>
                              {data.subcatgory_name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="file"
                        name="product_image"
                        onChange={this.handleImageChange.bind(this)}
                      />
                    </div>
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

export default ProductADD;
