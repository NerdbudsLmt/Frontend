import React from 'react'
import { options } from "../../app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function AccountType() {
    const session = await getServerSession(options);
  
    const accountName = session?.user.user ?? "";
    console.log(accountName)
    if (!session) {
    
    }
  
  return (
    <div>AccountType</div>
  )
}
