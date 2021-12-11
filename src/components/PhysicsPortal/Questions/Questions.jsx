import React, { useContext } from "react";
import { QuestionContext } from "../../../Context/QuestionContext";
import { Quewrap, Quesbox, Optbox, Ansattemptbox } from "./Questions.style";

const Questions = () => {
  let { PhyQuestions, selected, setattempted } = useContext(QuestionContext);

  return (
    <Quewrap>
      <Quesbox>
        <p>{PhyQuestions[selected - 1].Questiontext}</p>
      </Quesbox>
      {PhyQuestions[selected - 1].Options.map((optext, idx) => {
        return PhyQuestions[selected - 1].attempted &&
          idx === PhyQuestions[selected - 1].ansID ? (
          <Ansattemptbox
            onClick={() => {
              setattempted(selected, idx);
            }}
          >
            <p>{optext}</p>
          </Ansattemptbox>
        ) : (
          <Optbox
            onClick={() => {
              setattempted(selected, idx);
            }}
          >
            <p>{optext}</p>
          </Optbox>
        );
      })}
    </Quewrap>
  );
};

export default Questions;
