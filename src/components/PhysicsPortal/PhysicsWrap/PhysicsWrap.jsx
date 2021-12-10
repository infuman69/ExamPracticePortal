import React from "react";
import Chapters from "../Chapters/Chapters";
import QuestionNum from "../QuestionNum/QuestionNum";
import Questions from "../Questions/Questions";
import { PhysicsWrapper } from "./PhysicsWrap.style";

const PhysicsWrap = () => {
  return (
    <PhysicsWrapper>
      <Chapters />

      <QuestionNum />

      <Questions />
    </PhysicsWrapper>
  );
};

export default PhysicsWrap;
