import React from "react";

const StepIndicator = ({ steps, step }: any) => {
  return (
    <div className={"flex"}>
      {[...Array(steps)].map((_, index) => (
        <div
          key={index}
          className="lg:w-[100px] md:w-[90px] sm:w-[80px] w-[60px] h-[8px]"
          style={{
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
