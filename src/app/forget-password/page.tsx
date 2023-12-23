"use client";

import ForgotPasswordStepper from "@/components/forget-password/Stepper";
import Image from "next/image";
import React, { useState } from "react";

export default function ForgotPassword() {
  return (
    <section className="mx-auto text-white w-[97%] tablet:w-[95%] max-w-[1380px]">
      <div className={"flex"}>
        <ForgotPasswordStepper />
        <div className="w-[50%] h-full sm:block hidden fixed right-0">
          {/* <Image
            src={"/images/man.svg"}
            alt="rightpane-banner"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              height: "100%",
              objectFit: "cover",
              width: "100%",
            }}
          /> */}
        </div>
      </div>
    </section>
  );
}
