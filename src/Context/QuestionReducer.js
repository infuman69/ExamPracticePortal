export default (state, action) => {
  switch (action.type) {
    case "SET_QUES":
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};
