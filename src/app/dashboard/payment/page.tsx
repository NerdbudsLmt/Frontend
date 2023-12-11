import React from "react";
import Payment from "./comfirmation/page"; // Corrected import and capitalized component name
import PaymentMethods from "./paymethod/page"; // Corrected import and capitalized component name

export default function Page() {
  return (
    <div>
      <div>
        <Payment />
      </div>
    </div>
  );
}
