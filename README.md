# Aura Academy

A responsive mastery-learning website for the heyAura community. Users verify their email, learn eight ordered topics, answer ten questions per topic, review mistakes and retry until a 100% score unlocks the next level.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Create a Supabase project and add its Project URL and anon key to `.env.local`. In Supabase Authentication:

1. Keep **Confirm email** enabled.
2. Add `http://localhost:3000/auth/confirm` to Redirect URLs.
3. After deploying, add `https://YOUR-VERCEL-DOMAIN.vercel.app/auth/confirm` too.

## Deploy to Vercel

Import this repository and set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel. No database migration is needed for the initial release.

The eight-level curriculum contains 80 original questions. Content is based on public heyAura product and blog materials and expanded with foundational Web3 concepts. It is educational, not financial advice.
