import Projects from "@/components/Dashbord/Projects";
import QuickSet from "@/components/Dashbord/QuickSet";

import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import useCrud from "@/hooks/useCrud";
import DashboardCom from "./component/Dashboard";

export default async function Dashboard() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <div>
      <DashboardCom />
    </div>
  );
}
