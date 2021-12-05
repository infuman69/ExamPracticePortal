import React from "react";
import Card from "../../Card";
import { useHistory } from "react-router";

const PhysicsCard = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push("/PhysicsPortal");
  };
  return <Card subject={"Physics"} handleClick={handleClick} />;
};

export default PhysicsCard;
