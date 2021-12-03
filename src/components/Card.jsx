import React from "react";
import { CardWrapper, Subjectinfo, Info } from "./Card.style";

const Card = () => {
  return (
    <CardWrapper>
      <h1>Physics</h1>
      <Subjectinfo>
        <Info>Total Chapters</Info>
        <Info>Question : 317</Info>
      </Subjectinfo>
    </CardWrapper>
  );
};

export default Card;
