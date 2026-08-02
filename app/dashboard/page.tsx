import { redirect } from "next/navigation";
import { DashboardClient } from "@/components/DashboardClient";
import { createClient } from "@/lib/supabase/server";

export default async function Dashboard() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL)
    return (
      <div className="setup-note">
        <h1>Connect Supabase to open the academy</h1>
        <p>
          Add the two values from <code>.env.example</code> to your Vercel
          project.
        </p>
      </div>
    );
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email_confirmed_at) redirect("/login");
  return (
    <DashboardClient
      email={user.email!}
      profile={{
        name: user.user_metadata?.full_name ?? "",
        avatarUrl: user.user_metadata?.avatar_url ?? "",
      }}
    />
  );
}
