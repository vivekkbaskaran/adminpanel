import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
  render() {
    return (
      <section>
        <div id="page-wrapper" className="sign-in-wrapper">
          <div className="graphs">
            <div className="sign-up">
              <h5>Personal Information</h5>
              <div className="sign-u">
                <div className="sign-up1">
                  <h4>Full Name* :</h4>
                </div>
                <div className="sign-up2">
                  <form>
                    <input type="text" placeholder=" " required=" " />
                  </form>
                </div>
                <div className="clearfix"> </div>
              </div>

              <div className="sign-u">
                <div className="sign-up1">
                  <h4>Email Address* :</h4>
                </div>
                <div className="sign-up2">
                  <form>
                    <input type="text" placeholder=" " required=" " />
                  </form>
                </div>
                <div className="clearfix"> </div>
              </div>
              <h6>Login Information</h6>
              <div className="sign-u">
                <div className="sign-up1">
                  <h4>Password* :</h4>
                </div>
                <div className="sign-up2">
                  <form>
                    <input type="password" placeholder=" " required=" " />
                  </form>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="sign-u">
                <div className="sign-up1">
                  <h4>Confirm Password* :</h4>
                </div>
                <div className="sign-up2">
                  <form>
                    <input type="password" placeholder=" " required=" " />
                  </form>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="sub_home">
                <div className="sub_home_left">
                  <form>
                    <input type="submit" value="Submit" />
                  </form>
                </div>
                <div className="sub_home_right">
                  <p>
                    Go Back to{" "}
                    <Link to={"/"} className="nav-link">
                      {" "}
                      Click Here{" "}
                    </Link>
                  </p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
