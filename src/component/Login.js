import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
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
                <div className="signin-rit">
                  <span className="checkbox1">
                    <label className="checkbox">
                      <input type="checkbox" name="checkbox" checked="" />
                      Forgot Password ?
                    </label>
                  </span>
                  <p>
                    <Link to={"/register"} className="nav-link">
                      {" "}
                      Click Here{" "}
                    </Link>
                  </p>
                  <div className="clearfix"> </div>
                </div>
                <form>
                  <div className="log-input">
                    <div className="log-input-left">
                      <input type="text" className="user" value="Yourname" />
                    </div>
                    <span className="checkbox2">
                      <label className="checkbox">
                        <input type="checkbox" name="checkbox" checked="" />
                        <i> </i>
                      </label>
                    </span>
                    <div className="clearfix"> </div>
                  </div>
                  <div className="log-input">
                    <div className="log-input-left">
                      <input
                        type="password"
                        className="lock"
                        value="password"
                      />
                    </div>
                    <span className="checkbox2">
                      <label className="checkbox">
                        <input type="checkbox" name="checkbox" checked="" />
                        <i> </i>
                      </label>
                    </span>
                    <div className="clearfix"> </div>
                  </div>
                  <input type="submit" value="Login to your account" />
                  <Link to={"/dashboard"} className="nav-link">
                    Click Here
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
