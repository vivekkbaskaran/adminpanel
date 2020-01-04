import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

// const logger = store => next => action => {
//   return next(action);
// };

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
