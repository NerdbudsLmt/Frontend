import React, { useState } from "react";
import Email from "./Email";
import Otp from "./Otp";
import SetPassword from "./SetPassword";
import Success from "./Succces";

export default function ForgotPasswordStepper({ step, setStep }: any) {
  const nextStep = () => {
    setStep((prevStep: any) => prevStep + 1);
  };
  const steps: number = 4;

  const renderCurrentPage = () => {
    switch (step) {
      case 0:
        return <Email handleNext={nextStep} steps={steps} step={step} />;
      case 1:
        return <Otp handleNext={nextStep} steps={steps} step={step} />;
      case 2:
        return <SetPassword handleNext={nextStep} steps={steps} step={step} />;
      case 3:
        return <Success steps={steps} step={step} />;
      default:
        return null;
    }
  };

  return <>{renderCurrentPage()}</>;
}
