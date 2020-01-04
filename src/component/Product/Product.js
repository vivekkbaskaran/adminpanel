import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Product extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-6">
              <h2>Product List</h2>
            </div>
            <div className="col-md-6">
              <button className="btn btn-primary ">
                <Link to="/addproduct">ADD</Link>
              </button>
            </div>
          </div>
        </div>

        <p>Product is working</p>
      </div>
    );
  }
}

export default Product;
