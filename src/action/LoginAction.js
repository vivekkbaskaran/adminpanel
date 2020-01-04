import { REQUEST_BEGIN, REQUEST_SUCCESS, REQUEST_FAILURE } from "./Action";
import axios from "axios";
import history from "../history";

export function LoginAction(data) {
  return dispatch => {
    dispatch({ type: REQUEST_BEGIN });
    axios
      .post("http://localhost:5000/user/login", {
        username: data.username,
        password: data.password
      })
      .then(function(response) {
        console.log("response");
        console.log(response);
        if (response.data) {
          history.push("/category");
          dispatch({
            type: REQUEST_SUCCESS,
            payload: response
          });

          //window.location.href = "/category";
          //this.props.history.push("/category");
          // history.push("/category");
        }
      })
      .catch(function(error) {
        dispatch({
          type: REQUEST_FAILURE,
          payload: error
        });
      });
  };
}
