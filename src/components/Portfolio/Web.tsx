import React from "react";
import { Work } from "@/components/Portfolio/Work";

export const Web = () => {
  return (
    <div className="w-full my-20 ">
      <Work
        title="Focused, Active Management of High-Growth Digital Asset"
        bg="linear-gradient(180deg, #16181D 3.12%, #4C515F 56.25%)"
        content="Trade Bitcoin with confidence. Our secure software company ensures a safe and reliable platform for seamless Bitcoin transactions."
        img="/images/bit.svg"
        btn="#1A1C22"
        name="Crypto & Mining"
      />
      <Work
        title="Discover your perfect read with secure AI"
        bg="linear-gradient(180deg, #C29D4C 0%, #463E2C 61.46%)"
        content="Unlock the world of knowledge with our secure software. Discover your next great read with our powerful AI book recommendation engine."
        img="/images/seAi.svg"
        btn="#B89649"
        name="Artificial Intelligence"
      />

      <Work
        title="Simplify HR tasks with our secure app"
        bg="linear-gradient(180deg, #8D8BFA 0%, #373650 61.46%)"
        content="Revolutionize your HR management with our secure software. Streamline tasks, automate processes, and maximize efficiency with HRIS."
        btn="#807EDF"
        img="/images/hr.svg"
        name="Human Resources"
      />

      <Work
        title="Simplify HR tasks with our secure app"
        bg="linear-gradient(180deg, #6A2A86 0%, #271A2D 61.46%)"
        content="Transforming payment security. Our website empowers businesses and individuals to manage payments securely. Experience peace of mind today!"
        btn="#5D2775"
        img="/images/payRec.svg"
        name="Commerce & Payments"
      />

      <Work
        title="Simplify healthcare management with MSC"
        bg="linear-gradient(180deg, #4CA1C8 0%, #0F2D3C 71.87%)"
        content="Revolutionize your medical management with our cutting-edge website. Simplify and streamline your healthcare journey effortlessly, all in one place."
        btn="#4799BE"
        img="/images/msc.svg"
        name="Healthcare"
      />
    </div>
  );
};
