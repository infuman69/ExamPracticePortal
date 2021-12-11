import React, { useContext } from "react";
import Card from "../../Card";
import { useHistory } from "react-router";
import { QuestionContext } from "../../../Context/QuestionContext";

const PhysicsCard = () => {
  let history = useHistory();
  let { setsubtype } = useContext(QuestionContext);
  const handleClick = () => {
    history.push("/PhysicsPortal");
    setsubtype("Physics");
  };
  return <Card subject={"Physics"} handleClick={handleClick} />;
};

export default PhysicsCard;
