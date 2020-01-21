import { PRODUCT_DISPATCH } from "./types";
import axios from "axios";

export const get_products = () => dispatch => {
  axios
    .get(`${process.env.REACT_APP_DB}api/product/list`)
    .then(res => {
      //history.push("/category");
      //console.log("res");
      // console.log(res.data.data);

      if (res.status == 200) {
        dispatch({
          type: PRODUCT_DISPATCH,
          payload: res.data.data
        });
        // return res.data.data;
      }
    })
    .catch(err => console.log(err));
};
