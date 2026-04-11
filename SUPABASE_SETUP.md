# Supabase Setup

Run this SQL in the Supabase dashboard (SQL Editor) to create the accounts table.

```sql
create table omaro_accounts (
  id uuid default gen_random_uuid() primary key,
  account_hash text not null unique,
  created_at timestamptz default now(),
  product_flags jsonb default '{"us": false, "omen": false, "hai": false, "datacoop": false}'::jsonb,
  datacoop_tier text default 'open' check (datacoop_tier in ('open', 'shared', 'sovereign'))
);

create index on omaro_accounts (account_hash);
```

## Environment variables

Add to Vercel and `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_BTC_ADDRESS=
NEXT_PUBLIC_XMR_ADDRESS=
```
