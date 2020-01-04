import {
  REQUEST_BEGIN,
  REQUEST_SUCCESS,
  REQUEST_FAILURE
} from "../action/Action";

const initialState = {
  data: [],
  loading: false,
  error: null
};

export default function LoginReducer(state = initialState, action) {
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
        data: action.payload
      };

    case REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: []
      };

    default:
      return state;
  }
}
