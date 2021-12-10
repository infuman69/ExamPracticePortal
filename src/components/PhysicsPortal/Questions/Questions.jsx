import React, { useContext } from "react";
import { QuestionContext } from "../../../Context/QuestionContext";
import { Quewrap, Quesbox } from "./Questions.style";

const Questions = () => {
  let { PhyQuestions, selected } = useContext(QuestionContext);

  return (
    <Quewrap>
      <Quesbox>
        <p>{PhyQuestions[selected - 1].Questiontext}</p>
      </Quesbox>
      {PhyQuestions[selected - 1].Options.map((optext) => {
        return (
          <Quesbox>
            <p>{optext}</p>
          </Quesbox>
        );
      })}
    </Quewrap>
  );
};

export default Questions;
