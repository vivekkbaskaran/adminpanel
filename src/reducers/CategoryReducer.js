import {
  CATEGORY_DISPATCH,
  VIEW_CATEGORY_DISPATCH,
  DELETE_CATEGORY_DISPATCH
} from "../actions/types";

const initialState = {
  category: {},
  viewData: {},
  updateData: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_DISPATCH:
      return {
        ...state,
        category: action.payload
      };
    case VIEW_CATEGORY_DISPATCH:
      return {
        ...state,
        viewData: action.payload
      };
    case DELETE_CATEGORY_DISPATCH:
      return {
        ...state,
        updateData: action.payload
      };
    default:
      return state;
  }
}
