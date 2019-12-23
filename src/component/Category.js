import React from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const columns = [
  {
    name: "Category Name",
    selector: "cat_name",
    sortable: true
  },
  {
    name: "Edit",
    cell: row => (
      <Link to={"/category/" + row._id} className="nav-link">
        Edit
      </Link>
    )
  }
];

class Category extends React.Component {
  state = {
    data: [],
    id: {}
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/category/list`).then(res => {
      const data = res.data;
      this.setState({ data });
    });
  }

  render() {
    return (
      <section>
        <div id="page-wrapper" className="sign-in-wrapper">
          <DataTable
            title="Category List"
            columns={columns}
            fixedHeader
            fixedHeaderScrollHeight="300px"
            data={this.state.data}
          />
        </div>
      </section>
    );
  }
}

export default Category;
