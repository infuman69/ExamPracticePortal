import React, { createContext, useReducer } from "react";
import { Questions } from "../data/data";
import QuestionReducer from "./QuestionReducer";

const intialState = {
  PhyQuestions: [...Questions],
  selected: 1,
};
export const QuestionContext = createContext(intialState);
const GlobalState = ({ children }) => {
  let [state, dispatch] = useReducer(QuestionReducer, intialState);
  const selecques = (quest) => {
    dispatch({
      type: "SET_QUES",
      payload: quest,
    });
  };

  return (
    <QuestionContext.Provider
      value={{
        PhyQuestions: state.PhyQuestions,
        selected: state.selected,
        selecques,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
export default GlobalState;
