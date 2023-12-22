
import { DoughnutChart } from "@/components/Dashbord/DoughnutChart";
import Projects from "@/components/Dashbord/Projects";
import QuickSet from "@/components/Dashbord/QuickSet";

// import { options } from "../api/auth/[...nextauth]/options"
// import { getServerSession } from "next-auth/next"
// import { redirect } from "next/navigation"


export default async function Dashboard() {
  // const session = await getServerSession(options)

  // if (!session) {
  //     redirect('/api/auth/signin?callbackUrl=/server')
  // }

  return (
    <div>
      <div className="text-[#265D80]  flex flex-wrap gap-4 justify-between items-start">
        <div className=" bg-[#F5F4F4] p-3 basis-full lg:basis-[48%]   text-center rounded-lg">
          <p className="text-lg font-bold underline ">Active Projects </p>
          <div className="flex justify-between">
            <div className="flex justify-between items-start gap-3 mt-3 h-fit">
              <p className="text-[5rem] text-[#132E40] -mt-8 h-fit font-extrabold">
                1
              </p>
              <p className=" px-3.5 py-1.5 h-fit rounded-full  border-dotted border-2 border-app-pblue">
                2
              </p>
              <p className="text-xl font-bold px-3.5 py-1.5 h-fit rounded-full  border-dotted border-2 border-app-pblue">
                +
              </p>
            </div>
            <ul className="text-left mt-4 pl-5 text-md list-disc">
              <li className="">Name: Project Assistant</li>
              <li>Status: 97% Complete</li>
              <li>Deadline: 10th August 2023</li>
            </ul>
          </div>
        </div>

        <div className=" bg-[#F5F4F4] p-4 basis-full lg:basis-[48%]  text-center rounded-lg">
          <p className="text-lg font-bold underline ">
            Overall Project Reports{" "}
          </p>
          <div className="flex justify- gap-1">
            <ul className="text-left mt-4 font-semibold pl-5 w-[170px] text-md list-disc">
              <li className="text-[#2CB629]">3 running </li>
              <li className="text-[#009CFF] my-2">10 finished</li>
              <li className="text-[#D69E00]">1 pending</li>
            </ul>
         
            <DoughnutChart />
          </div>
        </div>
      </div>

      <Projects />
      <QuickSet />
    </div>
  );
}
