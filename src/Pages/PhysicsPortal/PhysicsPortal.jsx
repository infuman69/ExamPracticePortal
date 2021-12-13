import React from "react";
import PhysicsWrap from "../../components/PhysicsPortal/PhysicsWrap/PhysicsWrap";

import { HomeWrapper } from "../Homepage/Homepage.style";
import { PhyWrapper } from "./PhysicsPortal.style";

const PhysicsPortal = () => {
  return (
    <HomeWrapper>
      <PhysicsWrap />
    </HomeWrapper>
  );
};

export default PhysicsPortal;
