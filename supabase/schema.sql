-- ═══════════════════════════════════════════════════════════════
-- Envo Peace & Development Foundation — Database Schema
-- Run this in Supabase SQL Editor to set up all required tables.
-- ═══════════════════════════════════════════════════════════════

-- Enable UUID generation
create extension if not exists "uuid-ossp";

-- ── Programs ──────────────────────────────────────────────────
create table if not exists programs (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  tagline text,
  description text,
  icon text,
  highlights jsonb default '[]'::jsonb,
  outcomes jsonb default '[]'::jsonb,
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ── Impact Statistics ─────────────────────────────────────────
create table if not exists impact_stats (
  id uuid primary key default uuid_generate_v4(),
  key text unique not null,
  label text not null,
  value text not null,
  description text,
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ── Donations ─────────────────────────────────────────────────
create table if not exists donations (
  id uuid primary key default uuid_generate_v4(),
  donor_name text,
  donor_email text,
  amount numeric(12,2) not null,
  currency text not null default 'NGN',
  payment_method text not null default 'paystack',
  transaction_ref text,
  status text not null default 'pending',
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

-- ── Volunteer Inquiries ───────────────────────────────────────
create table if not exists volunteer_inquiries (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text,
  location text,
  experience text,
  motivation text,
  status text not null default 'new',
  created_at timestamptz default now()
);

-- ── Contact Inquiries ─────────────────────────────────────────
create table if not exists contact_inquiries (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text,
  reason text not null default 'general',
  message text not null,
  status text not null default 'new',
  created_at timestamptz default now()
);

-- ── Program Updates / News ────────────────────────────────────
create table if not exists program_updates (
  id uuid primary key default uuid_generate_v4(),
  program_id uuid references programs(id) on delete cascade,
  title text not null,
  content text,
  image_url text,
  published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- ── Admin Users (extends Supabase auth) ───────────────────────
-- Admin access is controlled via Supabase RLS and auth roles.
-- No separate admin_users table needed — use Supabase dashboard to
-- create admin accounts and manage roles.

-- ═══════════════════════════════════════════════════════════════
-- Row Level Security (RLS) Policies
-- ═══════════════════════════════════════════════════════════════

-- Enable RLS on all tables
alter table programs enable row level security;
alter table impact_stats enable row level security;
alter table donations enable row level security;
alter table volunteer_inquiries enable row level security;
alter table contact_inquiries enable row level security;
alter table program_updates enable row level security;

-- Public read access for published content
create policy "Public can view programs"
  on programs for select using (true);

create policy "Public can view impact stats"
  on impact_stats for select using (true);

create policy "Public can view published updates"
  on program_updates for select using (published = true);

-- Anyone can insert (donations, inquiries, contact forms)
create policy "Anyone can insert donations"
  on donations for insert with check (true);

create policy "Anyone can insert volunteer inquiries"
  on volunteer_inquiries for insert with check (true);

create policy "Anyone can insert contact inquiries"
  on contact_inquiries for insert with check (true);

-- Admin-only access (authenticated users with admin role)
-- These policies require a custom claim or role check.
-- You can set user metadata in Supabase dashboard:
--   app_metadata: { role: 'admin' }

create policy "Admins can manage programs"
  on programs for all
  using (
    exists (
      select 1 from auth.users
      where auth.uid() = id
      and (auth.jwt() ->> 'role') = 'admin'
    )
  );

create policy "Admins can manage impact stats"
  on impact_stats for all
  using (
    exists (
      select 1 from auth.users
      where auth.uid() = id
      and (auth.jwt() ->> 'role') = 'admin'
    )
  );

create policy "Admins can view all donations"
  on donations for select
  using (
    exists (
      select 1 from auth.users
      where auth.uid() = id
      and (auth.jwt() ->> 'role') = 'admin'
    )
  );

create policy "Admins can manage donations"
  on donations for all
  using (
    exists (
      select 1 from auth.users
      where auth.uid() = id
      and (auth.jwt() ->> 'role') = 'admin'
    )
  );

create policy "Admins can manage volunteer inquiries"
  on volunteer_inquiries for all
  using (
    exists (
      select 1 from auth.users
      where auth.uid() = id
      and (auth.jwt() ->> 'role') = 'admin'
    )
  );

create policy "Admins can manage contact inquiries"
  on contact_inquiries for all
  using (
    exists (
      select 1 from auth.users
      where auth.uid() = id
      and (auth.jwt() ->> 'role') = 'admin'
    )
  );

create policy "Admins can manage program updates"
  on program_updates for all
  using (
    exists (
      select 1 from auth.users
      where auth.uid() = id
      and (auth.jwt() ->> 'role') = 'admin'
    )
  );

-- ═══════════════════════════════════════════════════════════════
-- Seed Data
-- ═══════════════════════════════════════════════════════════════

insert into impact_stats (key, label, value, description, sort_order) values
  ('families_served', 'Families Served', '5,000+', 'Across South-East Nigeria', 1),
  ('communities_reached', 'Communities Reached', '25+', 'Rural & peri-urban areas', 2),
  ('children_sponsored', 'Children Sponsored', '500+', 'Back into school', 3),
  ('consultations', 'Free Consultations', '2,000+', 'Medical outreaches', 4),
  ('youth_trained', 'Youth Trained', '50+', 'Skills & leadership programs', 5),
  ('funds_to_programs', 'Funds to Programs', '100%', 'Every donation counts', 6)
on conflict (key) do nothing;

insert into programs (slug, title, tagline, description, icon, highlights, outcomes, sort_order) values
  ('outreach', 'Outreach Programs', 'Meeting communities where they are.', 'Boots-on-the-ground initiatives that bring relief, dignity, and hope directly to underserved communities.', 'HeartHandshake',
   '[{"title":"Relief Distribution","body":"Food packs, hygiene kits, and clothing for vulnerable families."},{"title":"Community Listening","body":"House-to-house visits to understand needs before we act."},{"title":"Crisis Response","body":"Rapid mobilization to communities affected by displacement or disaster."}]'::jsonb,
   '["Over 5,000 families served across South-East Nigeria","Active in 25+ rural and peri-urban communities","Quarterly relief campaigns powered by local volunteers"]'::jsonb,
   1),
  ('education', 'Educational Support', 'Keeping every child in the classroom.', 'Scholarships, learning materials, and mentorship that keep children and young adults in school.', 'GraduationCap',
   '[{"title":"Scholarships","body":"Sponsorships for primary, secondary, and tertiary students."},{"title":"Learning Materials","body":"Books, uniforms, and stationery delivered each new term."},{"title":"Mentorship Circles","body":"Volunteer mentors guiding students through academic and life decisions."}]'::jsonb,
   '["Hundreds of children sponsored back into school","Partnerships with local schools and PTAs","After-school study clubs in rural communities"]'::jsonb,
   2),
  ('healthcare', 'Healthcare Assistance', 'Healthcare as a right, not a privilege.', 'Free medical outreaches, essential medications, and access to care for vulnerable families.', 'Stethoscope',
   '[{"title":"Free Medical Outreaches","body":"Consultations, screenings, and medication for under-served areas."},{"title":"Maternal & Child Care","body":"Pre-natal support, vaccinations, and infant nutrition guidance."},{"title":"Health Education","body":"Workshops on hygiene, nutrition, and preventive care."}]'::jsonb,
   '["Thousands of free consultations delivered","Essential medications dispensed at no cost","Referral support for critical cases"]'::jsonb,
   3),
  ('youth', 'Youth Empowerment', 'Building the next generation of African leaders.', 'Skills training, leadership development, and entrepreneurship pathways for African youth.', 'Users',
   '[{"title":"Vocational Training","body":"Tailoring, ICT, catering, and trade skills with certification."},{"title":"Leadership Bootcamps","body":"Workshops on character, communication, and civic responsibility."},{"title":"Startup Grants","body":"Seed funding and mentorship for youth-led micro-businesses."}]'::jsonb,
   '["Young entrepreneurs launched with seed grants","Annual leadership summit for emerging leaders","Job-ready graduates from our skills programs"]'::jsonb,
   4),
  ('community', 'Community Development', 'Lifting whole communities, not just individuals.', 'Sustainable infrastructure, peace-building, and grassroots projects that lift entire communities.', 'Sprout',
   '[{"title":"Clean Water Projects","body":"Boreholes and water points for communities without safe water."},{"title":"Peace Dialogues","body":"Mediation and reconciliation between communities in conflict."},{"title":"Grassroots Organizing","body":"Training local committees to lead their own development."}]'::jsonb,
   '["Water access restored in remote villages","Peace committees established across multiple communities","Long-term partnerships with local government"]'::jsonb,
   5)
on conflict (slug) do nothing;
