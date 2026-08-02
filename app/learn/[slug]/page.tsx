import { notFound, redirect } from "next/navigation";
import { getTopic } from "@/lib/course-data";
import { createClient } from "@/lib/supabase/server";
import { LessonQuiz } from "@/components/LessonQuiz";
export default async function Learn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) redirect("/dashboard");
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email_confirmed_at) redirect("/login");
  const { data: progress } = await supabase
    .from("user_progress")
    .select("topic_slug")
    .eq("user_id", user.id);
  return (
    <LessonQuiz
      topic={topic}
      email={user.email!}
      initialProgress={progress?.map((row) => row.topic_slug) ?? []}
    />
  );
}
