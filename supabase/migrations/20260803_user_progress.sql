create table if not exists public.user_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  topic_slug text not null,
  score integer not null default 100 check (score between 0 and 100),
  completed_at timestamptz not null default now(),
  primary key (user_id, topic_slug)
);

alter table public.user_progress enable row level security;

create policy "Users can view their own progress" on public.user_progress
for select using (auth.uid() = user_id);

create policy "Users can add their own progress" on public.user_progress
for insert with check (auth.uid() = user_id);

create policy "Users can update their own progress" on public.user_progress
for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create index if not exists user_progress_user_id_idx
on public.user_progress (user_id);
