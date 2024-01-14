import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "../../../api/auth/[...nextauth]/options";
import ProjectDetails from "./components/Details";
import { string } from "yup";

export default async function Details() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  interface ProjectList {
    projectName: string;
    description: string;
    status: string;
    id: number;
    completedDate: string;
    projectPercentage: string;
  }

  return (
    <div className="">
      <ProjectDetails item={{} as ProjectList} />
    </div>
  );
}
