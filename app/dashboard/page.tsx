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
  if (!user) redirect("/login");
  const { data: progress } = await supabase
    .from("user_progress")
    .select("topic_slug")
    .eq("user_id", user.id);
  return (
    <DashboardClient
      email={user.email!}
      initialProgress={progress?.map((row) => row.topic_slug) ?? []}
      profile={{
        name: user.user_metadata?.full_name ?? "",
        avatarUrl: user.user_metadata?.avatar_url ?? "",
      }}
    />
  );
}
