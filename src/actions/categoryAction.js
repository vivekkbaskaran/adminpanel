import {
  CATEGORY_DISPATCH,
  VIEW_CATEGORY_DISPATCH,
  DELETE_CATEGORY_DISPATCH
} from "./types";
import axios from "axios";

export const get_category = () => dispatch => {
  axios
    .get(`${process.env.REACT_APP_DB}api/category/list`)
    .then(res => {
      if (res.status == 200) {
        dispatch({
          type: CATEGORY_DISPATCH,
          payload: res.data.data
        });
      }
    })
    .catch(err => console.log(err));
};

export const view_category = id => dispatch => {
  axios
    .get(`${process.env.REACT_APP_DB}api/category/list/${id}`)
    .then(res => {
      if (res.status == 200) {
        dispatch({
          type: VIEW_CATEGORY_DISPATCH,
          payload: res.data.data
        });
      }
    })
    .catch(err => console.log(err));
};

export const update_category = (id, data) => dispatch => {
  axios
    .put(`${process.env.REACT_APP_DB}api/category/list/${id}`, data)
    .then(res => {
      console.log(res.data);
      if (res.status == 200) {
        dispatch({
          type: DELETE_CATEGORY_DISPATCH,
          payload: res.data
        });
      }
    })
    .catch(err => console.log(err));
};
