Girls Take World Cup — Vercel Deployment

Upload these files to GitHub as extracted files, not as a ZIP.

Required files:
- index.html
- styles.css
- script.js
- api/results.js
- package.json

Supabase is already configured in script.js using the project URL and publishable key supplied in the chat.

Supabase SQL required:
create table if not exists scores (
  match_id text primary key,
  home_score integer,
  away_score integer,
  updated_at timestamp with time zone default now()
);

alter table scores enable row level security;

drop policy if exists "public read write scores" on scores;

create policy "public read write scores"
on scores
for all
using (true)
with check (true);

Optional live scores:
In Vercel Environment Variables, add API_FOOTBALL_KEY with your API-Football key.
