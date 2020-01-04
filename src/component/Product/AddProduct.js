import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AddProduct extends React.Component {
  state = {
    category: [],
    id: {}
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/category/list`)
      .then(res => {
        const category = res.data;
        this.setState({ category });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <form>
          <select>
            {this.state.category.map(cat => (
              <option key={cat._id} value={cat._id}>
                {cat.cat_name}
              </option>
            ))}
          </select>
          <input type="text" />
          <input type="file" />
        </form>
      </div>
    );
  }
}

export default AddProduct;
