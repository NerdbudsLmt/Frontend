import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "../../../../api/auth/[...nextauth]/options";
import ProjectDetails from "../components/Details";
import { string } from "yup";

export default async function Details({
  params,
}: {
  params: { projectId: string };
}) {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <div className="">
      <ProjectDetails params={params} />
    </div>
  );
}
