import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const loginUser = (userData, history) => dispatch => {
  axios
    .post(`${process.env.REACT_APP_DB}api/users/login`, userData)
    .then(res => {
      //history.push("/category");
      if (res.status == 200) {
        const { token } = res.data;
        localStorage.setItem("jwt", token);
        setAuthToken(token);
        const decode = jwt_decode(token);
        dispatch(setCurrentUser(decode));
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};

//this.props.history.push('/dashboard')
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwt");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
