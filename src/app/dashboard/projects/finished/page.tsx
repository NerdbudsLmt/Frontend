
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { options } from "..//../../api/auth/[...nextauth]/options"
import FinishedProject from "./components/Finished";


export default async function Finished () {
  const  session  = await getServerSession(options);

  if(!session) {
    redirect('/api/auth/signin?callbackUrl=/server')
  }


  return (
    <div className="">
      <FinishedProject /> 
    </div>
  );
};

