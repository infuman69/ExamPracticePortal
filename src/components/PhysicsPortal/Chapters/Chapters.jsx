import React from "react";
import { Chapterwrap, Chapname, ChapnameWrapper } from "./Chapters.style";

const Chapters = () => {
  return (
    <Chapterwrap>
      <h1 className="chapheading">Chapter </h1>
      <ChapnameWrapper>
        <Chapname>
          {" "}
          <h1>Work Power Energy </h1>{" "}
        </Chapname>
      </ChapnameWrapper>
    </Chapterwrap>
  );
};

export default Chapters;
