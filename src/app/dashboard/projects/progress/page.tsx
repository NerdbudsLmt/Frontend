import React from "react";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { options } from "..//../../api/auth/[...nextauth]/options";
import ProProgress from "./component/ProProgress";

export default async function Progress() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <div>
      <ProProgress />
    </div>
  );
}
