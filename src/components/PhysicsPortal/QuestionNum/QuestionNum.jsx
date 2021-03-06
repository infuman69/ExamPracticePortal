import React, { useContext, useState } from "react";
import { QuestionContext } from "../../../Context/QuestionContext";
import { QuestionNumWrap, Numbtn, Attemptbtn } from "./QuestionNum.style";

const QuestionNum = () => {
  let { PhyQuestions, selecques, selected } = useContext(QuestionContext);

  return (
    <QuestionNumWrap>
      {PhyQuestions.map((item) =>
        item.attempted ? (
          <Attemptbtn
            onClick={() => {
              selecques(item.No);
            }}
          >
            {item.No}
          </Attemptbtn>
        ) : item.No === selected ? (
          <Numbtn
            clicked="clicked"
            onClick={() => {
              selecques(item.No);
            }}
          >
            {item.No}
          </Numbtn>
        ) : (
          <Numbtn
            clicked
            onClick={() => {
              selecques(item.No);
            }}
          >
            {item.No}
          </Numbtn>
        )
      )}
    </QuestionNumWrap>
  );
};

export default QuestionNum;
