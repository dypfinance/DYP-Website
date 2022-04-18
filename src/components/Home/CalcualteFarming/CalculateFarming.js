import React, { useEffect, useState } from "react";
import CalculateFarmingForm from "../CalculateFarmingForm";
import TitleWithParagraph from "../../../assets/General/TitleWithParagraph";

const CalculateFarming = () => {
  const [selectMethod, setSelectMethod] = useState("farming");
  useEffect(() => {
    // console.log("SELECT METHOD", selectMethod)
  }, [selectMethod]);
  return (
    <div className="container calculate-farming">
      <div className="ball-decoration"></div>
      <div className="row">
        <div className="col-md-7 order-2 order-md-1">
          <CalculateFarmingForm setSelectedMethod={setSelectMethod} />
        </div>
        <div className="col-md-5 order-1 order-md-2 d-flex align-items-center mb-4 mb-md-0">
          <TitleWithParagraph>
            <h1>
              Calculate your <br /> <mark>{selectMethod.toLowerCase()}</mark>{" "}
              yield
            </h1>
            <p>
            Choose your chain, deposit amount, and lock period to calculate your earnings.
            </p>
          </TitleWithParagraph>
        </div>
      </div>
    </div>
  );
};

export default CalculateFarming;
