import React from "react";
import CardsCont from "../CardsCont/CardsCont";
import { CardCont } from "./Conthome.style";

const Conthome = () => {
  return (
    <CardCont>
      <h1>Subjects</h1>
      <p>You can select only one subject at a time to start your practice</p>
      <CardsCont />
    </CardCont>
  );
};

export default Conthome;
