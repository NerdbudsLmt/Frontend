import React from "react";

interface StepIndicatorProps {
  steps: number;
  step: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  step,
}) => {
  return (
    <div className={"flex"}>
      {[...Array(steps)].map((_, index) => (
        <div
          key={index}
          style={{
            width: "25%",
            height: 8,
            borderRadius: "10px",
            backgroundColor:
              index === step ? "#3F9BD5" : index < step ? "#fff" : "#fff",
            marginRight: "5px",
            transition: "background-color 0.3s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};
