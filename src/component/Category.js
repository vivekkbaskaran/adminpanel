import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Category extends React.Component {
  state = {
    data: [],
    id: {}
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/category/list`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Category List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Edit</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(product => (
              <tr key={product._id}>
                <td>{product.cat_name}</td>
                <td>
                  <Link to={`/category/${product._id}`}>Edit</Link>
                </td>
                <td>View</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Category;
