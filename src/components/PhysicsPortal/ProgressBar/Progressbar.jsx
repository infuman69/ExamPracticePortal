import React, { useState, useContext, useEffect } from "react";
import { Line } from "rc-progress";

import ProgressBar from "@ramonak/react-progress-bar";
import { QuestionContext } from "../../../Context/QuestionContext";

const Progressbar = () => {
  const { PhyQuestions, attempted } = useContext(QuestionContext);
  console.log(attempted);

  return (
    <>
      <Line
        percent={`${(attempted * 100) / PhyQuestions.length}`}
        strokewidth="8"
        trokeColor="red"
      />
      ;
    </>
  );
};

export default Progressbar;
