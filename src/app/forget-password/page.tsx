"use client";

import ForgotPasswordStepper from "@/components/forget-password/Stepper";
import Image from "next/image";
import React, { useState } from "react";

export default function ForgotPassword() {
  const [step, setStep] = useState(0);

  const imagePaths = [
    "/images/fp1.svg",
    "/images/fp2.svg",
    "/images/fp3.svg",
    "/images/fp4.svg",
  ];

  const selectedImagePath =
    step >= 0 && step < imagePaths.length ? imagePaths[step] : "";

  return (
    <section className="mx-auto text-white w-[97%] tablet:w-[95%] max-w-[1380px]">
      <div className={"flex"}>
        <ForgotPasswordStepper step={step} setStep={setStep} />
        <div className="w-[50%] h-full sm:block hidden fixed right-0">
          <Image
            src={selectedImagePath}
            alt="rightpane-banner"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              height: "100%",
              objectFit: "cover",
              width: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
