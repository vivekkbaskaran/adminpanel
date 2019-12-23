import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const logger = store => next => action => {
  return next(action);
};

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}

//const configureStore = createStore(rootReducer, applyMiddleware(thunk));

// function configureStore(state) {
//   return createStore(rootReducer, state);
// }
//export default configureStore;
