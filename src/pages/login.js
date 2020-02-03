import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authAction";
import { withRouter } from "react-router-dom";
import TextFieldGroup from "../components/common/TextFieldGroup";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.handleChange1 = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(user, this.props.history);
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <div className="container-scroller">
          <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="content-wrapper d-flex align-items-center auth">
              <div className="row flex-grow">
                <div className="col-lg-4 mx-auto">
                  <div className="auth-form-light text-left p-5">
                    <form className="pt-3" onSubmit={this.onSubmit}>
                      <TextFieldGroup
                        placeholder="user name"
                        name="email"
                        type="text"
                        value={this.state.email}
                        onChange={this.handleChange1}
                      />
                      <TextFieldGroup
                        placeholder="password"
                        name="password"
                        type="password"
                        value={this.state.Password}
                        onChange={this.handleChange1}
                      />
                      <div className="mt-3">
                        <input
                          type="submit"
                          value="SIGN IN"
                          className="btn btn-block btn-gradient-primary auth-form-btn"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps, { loginUser })(withRouter(Login));
