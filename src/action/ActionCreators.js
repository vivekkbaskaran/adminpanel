import { LOADER_START, LOADER_STOP } from "./Action";
import axios from "axios";

const ActionCreators = {
  categoryEdit(values) {
    console.log(values);
    return dispatch => {
      dispatch({
        type: LOADER_START
      });
      axios
        .put(`http://localhost:5000/category/list/` + values.id, {
          cat_name: values.cat_name
        })
        .then(res => {
          const data = res.data;
          console.log(data);
        });
    };
  }
};
export default ActionCreators;
