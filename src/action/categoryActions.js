import { REQUEST_BEGIN, REQUEST_SUCCESS, REQUEST_FAILURE } from "./Action";

export function fetchCategories() {
  return dispatch => {
    dispatch({ type: REQUEST_BEGIN });
    return fetch("http://localhost:5000/category/list")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: REQUEST_SUCCESS,
          payload: json
        });
        console.log("json");
        console.log(json);
        return json.category;
      })
      .catch(error =>
        dispatch({
          type: REQUEST_FAILURE,
          payload: error
        })
      );
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
