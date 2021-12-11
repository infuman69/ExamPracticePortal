import { Setattempt } from "./Setattempt";

export default (state, action) => {
  switch (action.type) {
    case "SET_QUES":
      return {
        ...state,
        selected: action.payload,
      };
    case "SET_ATTEMPT":
      return {
        ...state,
        PhyQuestions: Setattempt(
          action.payload.select,
          action.payload.attemptans,
          state.PhyQuestions
        ),
      };
    case "SET_SUB":
      return {
        ...state,
        subtype: action.payload,
      };
    default:
      return state;
  }
};
