import React from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import history from "../history";
import { renderField } from "../forms/TextBox";

const Edit = props => {
  return (
    <form onSubmit={props.handleSubmit.bind(this)}>
      <div>
        <div>
          <Field
            name="cat_name"
            type="text"
            component={renderField}
            label="Category Name"
          />
          <Field
            name="id"
            component={renderField}
            type="hidden"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

const onSubmit = (values, dispatch) => {
  axios
    .put(`http://localhost:5000/category/list/` + values.id, {
      cat_name: values.cat_name
    })
    .then(res => {
      const data = res.data;
      if (data.status == 500) {
        const error = data.errors.cat_name.message;
        return error;
      } else {
        history.push("/category");
      }
    });
};

class CategoryEdit extends React.Component {
  state = {
    items: [],
    loading: false,
    error: null
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/category/list/` + this.props.match.params.id)
      .then(res => {
        const data = res.data;
        this.props.initialize({
          cat_name: res.data[0].cat_name,
          id: this.props.match.params.id
        });
        this.setState({ data });
      });
  }

  render() {
    return (
      <section>
        <div id="page-wrapper" className="sign-in-wrapper">
          <Edit {...this.props} />
        </div>
      </section>
    );
  }
}

export default reduxForm({
  form: "CategoryEdit",
  onSubmit
})(CategoryEdit);
