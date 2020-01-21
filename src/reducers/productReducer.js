import { PRODUCT_DISPATCH } from "../actions/types";

const initialState = {
  product: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_DISPATCH:
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
}
