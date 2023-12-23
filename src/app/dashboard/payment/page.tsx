import React from "react";
import Payment from "./comfirmation/page"; // Corrected import and capitalized component name
import PaymentMethods from "./paymethod/page"; // Corrected import and capitalized component name
import { options } from "../../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"


export default async function Page() {
  const session = await getServerSession(options)

  if (!session) {
      redirect('/api/auth/signin?callbackUrl=/server')
  }


  return (
    <div>
      <div>
        <Payment />
      </div>
    </div>
  );
}
