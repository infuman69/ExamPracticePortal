import React from "react";
import { CardWrapper, Subjectinfo, Info } from "./Card.style";

const Card = ({ subject, handleClick }) => {
  console.log(handleClick);
  return (
    <CardWrapper onClick={handleClick}>
      <h1 className="Subjectname">{subject}</h1>
      <Subjectinfo>
        <Info>Total Chapters</Info>
        <Info>Question : 317</Info>
      </Subjectinfo>
    </CardWrapper>
  );
};

export default Card;
