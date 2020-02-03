import { SUBCATEGORY_DISPATCH } from "../actions/types";

const initialState = {
  subcategory1: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SUBCATEGORY_DISPATCH:
      return {
        ...state,
        subcategory1: action.payload
      };
    default:
      return state;
  }
}
