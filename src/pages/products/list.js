import React, { Component } from "react";
import { get_products } from "../../actions/productAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ProductList extends Component {
  componentDidMount() {
    this.props.get_products();
  }

  render() {
    return (
      <div className="main-panel padding-60">
        <div className="content-wrapper">
          <Link to="productsadd">
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
                        <th>Product Name</th>
                        <th>Subcategory Name</th>
                        <th>Category Name</th>
                        <th>Product Image</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.product.length ? (
                        this.props.product.map(res => {
                          return (
                            <tr key={res._id}>
                              <td>{res.product_name}</td>
                              <td>{res.subcategories.subcatgory_name}</td>
                              <td>{res.category.catgory_name}</td>
                              <td>
                                <img
                                  src={`${process.env.REACT_APP_DB}${res.product_image}`}
                                  alt="product image"
                                />
                              </td>
                              <td>
                                <Link to={`/product/${res._id}`}>VIEW</Link>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td>No Records Found</td>
                        </tr>
                      )}
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
  product: state.products.product
});

export default connect(mapStateToProps, { get_products })(ProductList);
