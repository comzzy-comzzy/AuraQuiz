import { topics } from "./course-data";

const progressKey = (email: string) => `aura-progress:${email}`;

export function readProgress(email: string): string[] {
  if (typeof window === "undefined") return [];

  try {
    const value: unknown = JSON.parse(localStorage.getItem(progressKey(email)) ?? "[]");
    if (!Array.isArray(value)) return [];

    const validSlugs = new Set(topics.map((topic) => topic.slug));
    return [...new Set(value.filter((slug): slug is string =>
      typeof slug === "string" && validSlugs.has(slug)
    ))];
  } catch {
    localStorage.removeItem(progressKey(email));
    return [];
  }
}

export function markTopicPassed(email: string, slug: string): string[] {
  const passed = readProgress(email);
  if (passed.includes(slug)) return passed;
  const updated = [...passed, slug];
  localStorage.setItem(progressKey(email), JSON.stringify(updated));
  return updated;
}
