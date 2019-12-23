const CategoryReducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case "LOADER_START":
      return state.concat([action.data]);
    case "LOADER_STOP":
      return state.concat([action.data]);
    default:
      return "vivek";
  }
};
export default CategoryReducer;
