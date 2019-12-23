import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import CategoryReducer from "./CategoryReducer";
export default combineReducers({
  form: reduxFormReducer,
  CategoryReducer
});
