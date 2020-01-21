import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import errorReducre from "./errorReducre";
import productReducer from "./productReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducre,
  products: productReducer
});
