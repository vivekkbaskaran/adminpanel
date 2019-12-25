import {
  REQUEST_BEGIN,
  REQUEST_SUCCESS,
  REQUEST_FAILURE
} from "../action/Action";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function CategoryReducer(state = initialState, action) {
  console.log("action");
  console.log(action);
  switch (action.type) {
    case REQUEST_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload
      };

    case REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        items: []
      };

    default:
      return state;
  }
}
