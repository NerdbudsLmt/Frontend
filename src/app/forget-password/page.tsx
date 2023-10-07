"use client";


import Email from "@/components/forget-password/Email";
import Otp from "@/components/forget-password/Otp";
import SetPassword from "@/components/forget-password/SetPassword";
import Succces from "@/components/forget-password/Succces";
import React, { useState } from "react";

export default function ForgotPassword() {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleNextPage = () => {
    if (currentPage < 4) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

    // Check if the current page is the last page of the form
    const isLastPage = currentPage === 4;

     /**
   * Function to render the current page of the application form based on the current page number.
   * It returns the appropriate form component for the current page.
   */
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <Email nextPage={handleNextPage} />;
      case 2:
        return <Otp nextPage={handleNextPage} />;
        // return <Otp nextPage={handleNextPage} />;
      case 3:
        return <SetPassword nextPage={handleNextPage} />;
      case 4:
      default:
        return <Succces  />;
    }
  };

  return (
    <section className="mx-auto text-white w-[97%] tablet:w-[95%] max-w-[1380px]">

    <div className="flex flex-col justify-start h-screen mt-10 mb-10">
      <div className="w-[98%] ">{renderCurrentPage()}</div>
      <button
        onClick={handleNextPage}
      >
        proceed
      </button>
      {/* {currentPage > 2 && currentPage < 9 && (
        // <div className="w-[98%] flex justify-end mt-5">
        //   {isLastPage ? (
        //     <Button
        //       handleClick={toggleConfirmation}
        //       className="bg-gradient-linear px-6 mb-5 py-3"
        //     >
        //       <p>Submit</p>
        //     </Button>
        //   ) : (
        //     <Button
        //       handleClick={handleNextPage}
        //       className="bg-gradient-linear px-6 mb-5 py-3"
        //     >
        //       <p> Proceed</p>
        //     </Button>
        //   )}
        // </div>
      )} */}
     
    </div>
    </section>

  )
}
