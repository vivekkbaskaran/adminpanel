import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import axios from "axios";
import ActionCreators from "../action/ActionCreators";

const Edit = props => {
  const { handleSubmit } = props;
  console.log(props.match.params.id);
  return (
    <form onSubmit={handleSubmit(props.categoryEdit.bind(this))}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="cat_name"
            component="input"
            type="text"
            placeholder="First Name"
          />
          <Field
            name="id"
            component="input"
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

class CategoryEdit extends React.Component {
  constructor(props) {
    super(props);
  }

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

const mapDispatchToProps = dispatch => ({
  categoryEdit: values => dispatch(ActionCreators.categoryEdit(values))
});

CategoryEdit = connect(null, mapDispatchToProps)(CategoryEdit);

export default reduxForm({
  form: "CategoryEdit"
})(CategoryEdit);
