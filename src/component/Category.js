import React from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../action/categoryActions";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Category extends React.Component {
  // closeAfter15 = () => toast("YOLO", { autoClose: 15000 });

  // closeAfter7 = () => toast("7 Kingdoms", { autoClose: 7000 });

  state = {
    items: [],
    loading: false,
    error: null
  };

  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  render() {
    const { error, loading, category } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div className="container">Loading...</div>;
    }

    return (
      <div className="container">
        <h2>Category List</h2>
        {/* <div>
          <button onClick={this.closeAfter15}>Close after 15 seconds</button>
          <button onClick={this.closeAfter7}>Close after 7 seconds</button>
          <ToastContainer autoClose={8000} />
        </div> */}

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Edit</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {category.map(product => (
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

const mapStateToProps = state => ({
  category: state.CategoryReducer.items,
  loading: state.CategoryReducer.loading,
  error: state.CategoryReducer.error
});

export default connect(mapStateToProps)(Category);
