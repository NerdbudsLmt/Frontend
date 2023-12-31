"use client";

import ProjectProgress from "@/components/Dashbord/ProjectProgress";
import React, { useState } from "react";
import { BsSliders2Vertical } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from "@chakra-ui/react";
import Pagination from "@/components/Pagination";
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { options } from "..//../../api/auth/[...nextauth]/options"
import ProProgress from "./component/ProProgress";



export default async function Progress() {  
  const  session  = await getServerSession(options);

  if(!session) {
    redirect('/api/auth/signin?callbackUrl=/server')
  }
 
  return (
    <div className="">
      <ProProgress />
    
    </div>
  );
}
