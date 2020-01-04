import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import LoginReducer from "./LoginReducer";

export default combineReducers({
  form: reduxFormReducer,
  LoginReducer
});
