import React, { useState } from "react";
import Email from "./Email";
import Otp from "./Otp";
import SetPassword from "./SetPassword";
import Success from "./Succces";

export default function ForgotPasswordStepper() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const steps = 4;
  // const renderCurrentPage = () => {
  //   switch (currentPage) {
  //     case 1:
  //       return <Email nextPage={handleNextPage} />;
  //     case 2:
  //       return <Otp nextPage={handleNextPage} />;
  //     // return <Otp nextPage={handleNextPage} />;
  //     case 3:
  //       return <SetPassword nextPage={handleNextPage} />;
  //     case 4:
  //     default:
  //       return <Succces />;
  //   }
  // };
  return (
    <>
      {step === 0 && <Email handleNext={nextStep} steps={steps} step={step} />}
      {step === 1 && <Otp handleNext={nextStep} steps={steps} step={step} />}
      {step === 2 && (
        <SetPassword handleNext={nextStep} steps={steps} step={step} />
      )}
      {step === 3 && <Success steps={steps} step={step} />}
    </>
  );
}
