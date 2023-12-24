import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { options } from "..//../../api/auth/[...nextauth]/options"
import PayM from "./component/PayM";


export default async function PaymentMethods () {
  const  session  = await getServerSession(options);

  if(!session) {
    redirect('/api/auth/signin?callbackUrl=/server')
  }


  return (
    <div>
      <PayM />
    </div>
  );
}
