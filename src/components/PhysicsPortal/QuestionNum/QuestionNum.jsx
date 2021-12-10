import React, { useContext, useState } from "react";
import { QuestionContext } from "../../../Context/QuestionContext";
import { QuestionNumWrap, Numbtn } from "./QuestionNum.style";

const QuestionNum = () => {
  let { PhyQuestions, selecques } = useContext(QuestionContext);

  return (
    <QuestionNumWrap>
      {PhyQuestions.map((item) => (
        <Numbtn
          onClick={() => {
            selecques(item.No);
          }}
        >
          {item.No}
        </Numbtn>
      ))}
    </QuestionNumWrap>
  );
};

export default QuestionNum;
