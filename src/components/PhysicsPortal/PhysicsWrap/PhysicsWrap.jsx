import React from "react";
import Chapters from "../Chapters/Chapters";
import Progressbar from "../ProgressBar/Progressbar";
import QuestionNum from "../QuestionNum/QuestionNum";
import Questions from "../Questions/Questions";
import { PhysicsWrapper, Wrapper } from "./PhysicsWrap.style";

const PhysicsWrap = () => {
  return (
    <Wrapper>
      <Progressbar />
      <PhysicsWrapper>
        <Chapters />

        <QuestionNum />

        <Questions />
      </PhysicsWrapper>
    </Wrapper>
  );
};

export default PhysicsWrap;
