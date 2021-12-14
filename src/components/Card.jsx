import React, { useContext } from "react";
import { QuestionContext } from "../Context/QuestionContext";
import { CardWrapper, Subjectinfo, Info } from "./Card.style";

const Card = ({ subject, handleClick }) => {
  let { PhyQuestions } = useContext(QuestionContext);
  return (
    <CardWrapper onClick={handleClick}>
      <h1 className="Subjectname">{subject}</h1>
      <Subjectinfo>
        <Info>Total Chapters</Info>
        <Info>Question : {PhyQuestions.length}</Info>
      </Subjectinfo>
    </CardWrapper>
  );
};

export default Card;
