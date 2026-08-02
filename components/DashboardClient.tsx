"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  LockKeyhole,
  LogOut,
  Save,
  Trophy,
  UserRound,
  X,
} from "lucide-react";
import { topics } from "@/lib/course-data";
import { readProgress } from "@/lib/progress";
import { createClient } from "@/lib/supabase/client";
import { Logo } from "./Logo";

type Profile = { name: string; avatarUrl: string };

export function DashboardClient({
  email,
  profile,
}: {
  email: string;
  profile: Profile;
}) {
  const [passed, setPassed] = useState<string[]>([]);
  const [profileOpen, setProfileOpen] = useState(false);
  const [name, setName] = useState(profile.name);
  const [avatarUrl, setAvatarUrl] = useState(profile.avatarUrl);
  const [savedProfile, setSavedProfile] = useState(profile);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => setPassed(readProgress(email)), [email]);

  const percent = Math.round((passed.length / topics.length) * 100);
  const currentIndex = topics.findIndex(
    (topic) => !passed.includes(topic.slug),
  );
  const currentTopic = currentIndex === -1 ? null : topics[currentIndex];
  const displayName = savedProfile.name || email.split("@")[0];

  async function logout() {
    await createClient().auth.signOut();
    location.href = "/";
  }

  async function saveProfile(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);
    setMessage("");
    const cleanName = name.trim();
    const cleanAvatar = avatarUrl.trim();
    const { error } = await createClient().auth.updateUser({
      data: { full_name: cleanName, avatar_url: cleanAvatar },
    });
    setSaving(false);
    if (error) return setMessage(error.message);
    setSavedProfile({ name: cleanName, avatarUrl: cleanAvatar });
    setMessage("Profile updated.");
  }

  const avatar = (className = "") =>
    savedProfile.avatarUrl ? (
      <img
        className={className}
        src={savedProfile.avatarUrl}
        alt={`${displayName}'s profile`}
      />
    ) : (
      <span className={className}>{displayName[0]?.toUpperCase()}</span>
    );

  return (
    <div className="app-shell">
      <aside>
        <Logo />
        <nav>
          <Link className="active" href="/dashboard">
            <BookOpen />
            Learn
          </Link>
          <button onClick={() => setProfileOpen(true)}>
            <Trophy />
            My progress
          </button>
        </nav>
        <div className="side-profile">
          <button
            className="profile-trigger"
            onClick={() => setProfileOpen(true)}
            aria-label="Open profile and progress"
          >
            {avatar("side-avatar")}
            <div>
              <b>{displayName}</b>
              <small>{email}</small>
            </div>
          </button>
          <button onClick={logout} aria-label="Sign out">
            <LogOut />
          </button>
        </div>
      </aside>

      <main className="dashboard">
        <header>
          <div>
            <span>AURA ACADEMY</span>
            <h1>Good to see you, {displayName}.</h1>
            <p>
              Keep learning. Your next perfect score is closer than you think.
            </p>
          </div>
          <div className="header-streak">
            <Trophy />
            <div>
              <b>{passed.length}</b>
              <span>levels mastered</span>
            </div>
          </div>
        </header>
        <section id="progress" className="progress-card">
          <div
            className="progress-ring"
            style={
              { "--progress": `${percent * 3.6}deg` } as React.CSSProperties
            }
          >
            <span>{percent}%</span>
          </div>
          <div>
            <span>YOUR JOURNEY</span>
            <h2>
              {passed.length === 0
                ? "Ready for level one?"
                : passed.length === topics.length
                  ? "Academy mastered!"
                  : "You’re making real progress."}
            </h2>
            <p>
              {passed.length} of {topics.length} levels completed. Score 100% to
              unlock each next lesson.
            </p>
            <div className="wide-progress">
              <i style={{ width: `${percent}%` }} />
            </div>
          </div>
        </section>
        <div className="dashboard-heading">
          <div>
            <span>LEARNING PATH</span>
            <h2>Master Aura, one level at a time</h2>
          </div>
          <p>{topics.length - passed.length} levels remaining</p>
        </div>
        <section className="course-list">
          {topics.map((topic, index) => {
            const complete = passed.includes(topic.slug);
            const unlocked =
              index === 0 || passed.includes(topics[index - 1].slug);
            return (
              <article
                className={`${complete ? "complete" : ""} ${!unlocked ? "locked" : ""}`}
                key={topic.slug}
                style={{ "--topic": topic.color } as React.CSSProperties}
              >
                <div className="level-badge">
                  {complete ? (
                    <CheckCircle2 />
                  ) : !unlocked ? (
                    <LockKeyhole />
                  ) : (
                    String(topic.number).padStart(2, "0")
                  )}
                </div>
                <div className="course-info">
                  <span>LEVEL {String(topic.number).padStart(2, "0")}</span>
                  <h3>{topic.title}</h3>
                  <p>{topic.strap}</p>
                  <footer>
                    <span>
                      <Clock3 /> {topic.duration}
                    </span>
                    <span>10 questions</span>
                  </footer>
                </div>
                {unlocked ? (
                  <Link href={`/learn/${topic.slug}`}>
                    {complete ? "Review level" : "Start lesson"}
                    <ArrowRight />
                  </Link>
                ) : (
                  <div className="lock-note">
                    <LockKeyhole />
                    <span>
                      Complete level {index}
                      <br />
                      with 100% to unlock
                    </span>
                  </div>
                )}
              </article>
            );
          })}
        </section>
      </main>

      {profileOpen && (
        <div
          className="profile-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Profile and progress"
        >
          <button
            className="profile-backdrop"
            onClick={() => setProfileOpen(false)}
            aria-label="Close profile"
          />
          <section className="profile-panel">
            <header>
              <div>
                <span>YOUR ACCOUNT</span>
                <h2>Profile & progress</h2>
              </div>
              <button onClick={() => setProfileOpen(false)} aria-label="Close">
                <X />
              </button>
            </header>
            <div className="profile-summary">
              {avatar("profile-avatar")}
              <div>
                <b>{displayName}</b>
                <small>{email}</small>
              </div>
            </div>
            <div className="profile-stats">
              <div>
                <b>{percent}%</b>
                <span>complete</span>
              </div>
              <div>
                <b>{passed.length}</b>
                <span>mastered</span>
              </div>
              <div>
                <b>{topics.length - passed.length}</b>
                <span>remaining</span>
              </div>
            </div>
            <div className="profile-current">
              <span>CURRENT LESSON</span>
              <b>
                {currentTopic
                  ? `Level ${currentTopic.number}: ${currentTopic.title}`
                  : "Aura Academy mastered"}
              </b>
              {currentTopic && (
                <Link href={`/learn/${currentTopic.slug}`}>
                  Continue learning <ArrowRight />
                </Link>
              )}
            </div>
            <div className="profile-levels">
              <span>LEVEL PROGRESS</span>
              {topics.map((topic, index) => (
                <div
                  key={topic.slug}
                  className={
                    passed.includes(topic.slug)
                      ? "done"
                      : index === currentIndex
                        ? "current"
                        : ""
                  }
                >
                  <i>
                    {passed.includes(topic.slug) ? (
                      <CheckCircle2 />
                    ) : (
                      topic.number
                    )}
                  </i>
                  <p>
                    <b>{topic.title}</b>
                    <small>
                      {passed.includes(topic.slug)
                        ? "Mastered"
                        : index === currentIndex
                          ? "In progress"
                          : "Locked"}
                    </small>
                  </p>
                </div>
              ))}
            </div>
            <form className="profile-form" onSubmit={saveProfile}>
              <span>EDIT PROFILE</span>
              <label>
                Display name
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  maxLength={50}
                  placeholder="Your name"
                />
              </label>
              <label>
                Profile picture URL
                <input
                  type="url"
                  value={avatarUrl}
                  onChange={(event) => setAvatarUrl(event.target.value)}
                  placeholder="https://example.com/photo.jpg"
                />
              </label>
              <small>
                Use a direct HTTPS image link. Your profile details are saved
                securely with your Supabase account.
              </small>
              {message && (
                <p
                  className={
                    message === "Profile updated." ? "success" : "error"
                  }
                >
                  {message}
                </p>
              )}
              <button className="primary" disabled={saving}>
                <Save />
                {saving ? "Saving…" : "Save profile"}
              </button>
            </form>
            <button className="profile-logout" onClick={logout}>
              <LogOut />
              Sign out
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
