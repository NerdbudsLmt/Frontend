import React from 'react'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';


export default async function Layout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    const session = await getServerSession()

    if (session) {
        redirect('/dashboard')
    }
   
  return (
    <div>
      {children}
     
    </div>
  )
}