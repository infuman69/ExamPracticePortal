import React from "react";
import Chapters from "../Chapters/Chapters";
import { Chapterwrap } from "../Chapters/Chapters.style";
import QuestionNum from "../QuestionNum/QuestionNum";
import { QuestionNumWrap } from "../QuestionNum/QuestionNum.style";
import Questions from "../Questions/Questions";
import { Quewrap } from "../Questions/Questions.style";
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
