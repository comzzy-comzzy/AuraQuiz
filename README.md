# Aura Academy

A responsive mastery-learning website for the heyAura community. Users create an account, learn eight ordered topics, answer ten questions per topic, review mistakes and retry until a 100% score unlocks the next level.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Create a Supabase project and add its Project URL and anon key to `.env.local`. In Supabase Authentication:

1. Disable **Confirm email** so new users can enter their dashboard immediately.
2. Add `http://localhost:3000/auth/confirm` to Redirect URLs if you later re-enable confirmation.
3. After deploying, add `https://YOUR-VERCEL-DOMAIN.vercel.app/auth/confirm` too if confirmation is enabled.

## Deploy to Vercel

Import this repository and set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel. Apply the included Supabase migrations for cross-device progress and profile-picture uploads.

The eight-level curriculum contains 80 original questions and is educational, not financial advice.

The interface direction is inspired by Quizlet's clear, responsive learning flow while retaining Aura's green-and-white identity.
