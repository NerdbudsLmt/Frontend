import React from "react";

const StepIndicator = ({ steps, step }: any) => {
  return (
    <div className={"flex"}>
      {[...Array(steps)].map((_, index) => (
        <div
          key={index}
          style={{
            width: "100px",
            height: 8,
            borderRadius: "10px",
            backgroundColor:
              index === step ? "#3F9BD5" : index < step ? "#fff" : "#fff",
            marginRight: "5px",
            transition: "background-color 0.3s ease-in-out",
          }}
        ></div>
      ))}
    </div>
  );
};
export default StepIndicator;
