import React from "react";
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { options } from "..//../../api/auth/[...nextauth]/options"
import TransactionsList from "./component/TansactionList";


interface transactions {
  title: string;
  Amount: string;
  Date: string;
  status: "Finished" | "Pending";
  id: number;
}


export default async function Transactions () {
  const  session  = await getServerSession(options);

  if(!session) {
    redirect('/api/auth/signin?callbackUrl=/server')
  }
  return (
    <div className="max-w-[1000px]">
      <TransactionsList />
    </div>
  );
};
