import { SUBCATEGORY_DISPATCH } from "./types";
import axios from "axios";

export const get_subcategory = () => dispatch => {
  axios
    .get(`${process.env.REACT_APP_DB}api/subcategory/list`)
    .then(res => {
      if (res.status == 200) {
        dispatch({
          type: SUBCATEGORY_DISPATCH,
          payload: res.data.data
        });
      }
    })
    .catch(err => console.log(err));
};
