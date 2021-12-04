import React from "react";
import MathCard from "../../Maths/MathCard";
import PhysicsCard from "../../Physics/PhysicsCard/PhysicsCard";
import { Contcard } from "./CardsCont.style";

const CardsCont = () => {
  return (
    <Contcard>
      <PhysicsCard />
      <MathCard />
    </Contcard>
  );
};

export default CardsCont;
