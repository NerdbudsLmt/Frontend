'use client'

import React from 'react'
import { useEffect } from 'react'
import { redirect } from "next/navigation"

export default function Project() {

  useEffect(() => {
    redirect('/dashboard/projects/create')
  
   
  }, [])
  
  return (
    <div>Project</div>
  )
}
