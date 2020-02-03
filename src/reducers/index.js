import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import errorReducre from "./errorReducre";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import subcategoryReducer from "./subcategoryReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducre,
  products: productReducer,
  categories: categoryReducer,
  subcategories: subcategoryReducer
});
