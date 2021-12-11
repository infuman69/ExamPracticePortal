import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { QuestionContext } from "../../Context/QuestionContext";
import Card from "../Card";

const MathCard = () => {
  let { setsubtype } = useContext(QuestionContext);
  let history = useHistory();
  const handleClick = () => {
    history.push("/MathPortal");
    setsubtype("Maths");
  };

  return <Card subject={"Maths"} handleClick={handleClick} />;
};

export default MathCard;
