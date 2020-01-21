import React, { Component } from "react";
import { get_products } from "../../actions/productAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProductList extends Component {
  componentDidMount() {
    this.props.get_products();
  }

  render() {
    // const { product } = this.props.product;

    const mainPanleStyle = {
      paddingTop: "60px"
    };

    console.log(this.props.product);

    const items = this.props.product.map(res => (
      <li key={res._id}>{res.catgory_name}</li>
    ));
    return (
      <div className="main-panel" style={mainPanleStyle}>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Basic Table</h4>

                  {/* <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.map(res => {
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
                    </table> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  //product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  product: state.products.product
});

export default connect(mapStateToProps, { get_products })(ProductList);
