import React from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { LoginAction } from "../action/LoginAction";
import { withRouter } from "react-router";

const required = value => (value ? undefined : "Required");

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const LoginForm = props => {
  const { handleSubmit, onSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="log-input">
        <div className="log-input-left">
          <Field
            name="username"
            type="text"
            validate={required}
            component={renderField}
            label="Username"
          />
        </div>
      </div>
      <div className="log-input">
        <div className="log-input-left">
          <Field
            name="password"
            type="password"
            validate={required}
            component={renderField}
            label="Username"
          />
        </div>
      </div>
      <input type="submit" value="Login to your account" />
    </form>
  );
};

class Login extends React.Component {
  state = {
    data: [],
    loading: false,
    error: null
  };

  render() {
    const submitForm = formValues => {
      console.log("submitting Form: ", formValues);
      this.props.dispatch(LoginAction(formValues));
    };
    const { error, loading, handleSubmit } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div className="container">Loading................</div>;
    }

    return (
      <section>
        <div id="page-wrapper" className="sign-in-wrapper">
          <div className="graphs">
            <div className="sign-in-form">
              <div className="sign-in-form-top">
                <p>
                  <span>Sign In to</span> <a href="index.html">Admin</a>
                </p>
              </div>
              <div className="signin">
                <LoginForm onSubmit={submitForm} handleSubmit={handleSubmit} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  category: state.LoginReducer.data,
  loading: state.LoginReducer.loading,
  error: state.LoginReducer.error
});

export default withRouter(
  connect(mapStateToProps)(
    reduxForm({
      form: "Login"
    })(Login)
  )
);
