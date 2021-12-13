import React, { createContext, useReducer } from "react";
import { MathQuestions } from "../data/MathData";
import { PhyQuestionsss } from "../data/PhysicsData";
import QuestionReducer from "./QuestionReducer";

const intialState = {
  PhyQuestions: [...PhyQuestionsss],
  selected: 1,
  subtype: "",
  attempted: 0,
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
  const setattempted = (selec, ansID) => {
    dispatch({
      type: "SET_ATTEMPT",
      payload: { select: selec, attemptans: ansID },
    });
  };
  const setsubtype = (sub) => {
    dispatch({
      type: "SET_SUB",
      payload: sub,
    });
  };
  const setcountattempt = () => {
    dispatch({
      type: "SET_COUNT",
      payload: 0,
    });
  };

  return (
    <QuestionContext.Provider
      value={{
        PhyQuestions: state.PhyQuestions,
        selected: state.selected,
        attempted: state.attempted,
        selecques,
        setattempted,
        setsubtype,
        setcountattempt,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
export default GlobalState;
