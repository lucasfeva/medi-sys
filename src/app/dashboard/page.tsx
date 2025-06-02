import { headers } from "next/headers";
import { redirect } from "next/navigation";

import SignOutButton from "@/components/dashboard/signout-button";
import { auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>{session?.user?.name}</p>
      <SignOutButton />
    </div>
  );
}
