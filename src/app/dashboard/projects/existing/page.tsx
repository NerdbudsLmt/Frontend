import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { options } from "..//../../api/auth/[...nextauth]/options"
import ExistingProject from "./components/ExistingProject";


export default async function Existing () {
  const  session  = await getServerSession(options);

  if(!session) {
    redirect('/api/auth/signin?callbackUrl=/server')
  }


  return (
    <div className=" ">
      <ExistingProject/>
    </div>
  );
};

