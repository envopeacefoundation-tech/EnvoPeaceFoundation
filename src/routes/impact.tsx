import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  Users,
  GraduationCap,
  Stethoscope,
  Home,
  Sprout,
  Quote,
  ArrowRight,
  TrendingUp,
  MapPin,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Envo Peace and Development Foundation" },
      { name: "description", content: "See the real impact of our programs: communities reached, children educated, families supported, and lives transformed." },
    ],
  }),
  component: ImpactPage,
});

const metrics = [
  { icon: Users, value: "5,000+", label: "Families Served", color: "text-primary" },
  { icon: GraduationCap, value: "500+", label: "Children Sponsored", color: "text-blue-600" },
  { icon: Stethoscope, value: "2,000+", label: "Free Consultations", color: "text-rose-600" },
  { icon: Home, value: "25+", label: "Communities Reached", color: "text-amber-600" },
  { icon: Sprout, value: "50+", label: "Youth Trained", color: "text-emerald-600" },
  { icon: TrendingUp, value: "100%", label: "Funds to Programs", color: "text-violet-600" },
];

const galleries = [
  {
    title: "Community Outreach",
    location: "Rural Ebonyi State",
    date: "Q4 2024",
    description: "Our outreach teams delivered food packs, hygiene kits, and clothing to 200+ families in underserved rural communities.",
    stats: "200+ families served",
  },
  {
    title: "School Sponsorship Drive",
    location: "Abakaliki, Nigeria",
    date: "September 2024",
    description: "Back-to-school campaign that sponsored 75 children with uniforms, books, and school fees for the academic year.",
    stats: "75 children sponsored",
  },
  {
    title: "Free Medical Outreach",
    location: "Izzi LGA, Ebonyi State",
    date: "August 2024",
    description: "Partnered with licensed doctors and pharmacists to provide free consultations, screenings, and medications to 300+ community members.",
    stats: "300+ patients treated",
  },
  {
    title: "Youth Skills Training",
    location: "Abakaliki, Nigeria",
    date: "July 2024",
    description: "Vocational training program in tailoring and ICT, equipping 30 young people with marketable skills and certification.",
    stats: "30 youth trained",
  },
  {
    title: "Clean Water Project",
    location: "Ikwo LGA, Ebonyi State",
    date: "June 2024",
    description: "Installed borehole and water points serving over 500 people in a community previously without access to clean water.",
    stats: "500+ people served",
  },
  {
    title: "Peace Dialogue Workshop",
    location: "Cross River Border Communities",
    date: "May 2024",
    description: "Mediated and facilitated reconciliation between communities in conflict, establishing local peace committees.",
    stats: "3 communities reconciled",
  },
];

const testimonials = [
  {
    quote: "They didn't just bring food — they brought dignity. Our village felt seen for the first time in years.",
    name: "Adaeze Okonkwo",
    role: "Community Leader, Ebonyi State",
    program: "Outreach",
  },
  {
    quote: "My daughter is the first in our family to finish secondary school, thanks to Envo Peace. This changed everything for us.",
    name: "Emeka Nwosu",
    role: "Parent, Abakaliki",
    program: "Education",
  },
  {
    quote: "The youth skills program taught me tailoring. Today I run my own shop and employ two people from my community.",
    name: "Chidinma Eze",
    role: "Program Graduate",
    program: "Youth Empowerment",
  },
  {
    quote: "When my son was sick, we couldn't afford a doctor. The free medical outreach saved his life. I'll never forget that kindness.",
    name: "Ngozi Obi",
    role: "Mother of Three, Izzi LGA",
    program: "Healthcare",
  },
  {
    quote: "Before the borehole, women walked 3 hours for water. Now our children are healthier and our women have time to earn income.",
    name: "Ifeanyi Okoro",
    role: "Village Chief, Ikwo LGA",
    program: "Community Development",
  },
  {
    quote: "The peace dialogue brought our two communities together. We now share resources instead of fighting over them.",
    name: "Sunday Agbo",
    role: "Peace Committee Chair",
    program: "Community Development",
  },
];

const programBreakdown = [
  { name: "Outreach Programs", families: "3,500+", communities: "20+", color: "bg-primary" },
  { name: "Educational Support", students: "500+", schools: "15+", color: "bg-blue-500" },
  { name: "Healthcare Assistance", consultations: "2,000+", outreaches: "12+", color: "bg-rose-500" },
  { name: "Youth Empowerment", graduates: "50+", grants: "15+", color: "bg-amber-500" },
  { name: "Community Development", projects: "10+", villages: "8+", color: "bg-emerald-500" },
];

function ImpactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" />
        <div className="mx-auto max-w-5xl px-5 md:px-8 text-center text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
            <TrendingUp className="h-3.5 w-3.5" /> Our Impact
          </span>
          <h1 className="mt-6 text-4xl font-serif font-bold leading-tight sm:text-5xl md:text-6xl">
            Measurable Change,<br />Lasting Hope
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80 md:text-xl">
            Behind every number is a life changed, a family uplifted, and a
            community strengthened.
          </p>
        </div>
      </section>

      {/* ── Key Metrics ──────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {metrics.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="rounded-2xl border border-border bg-card p-5 shadow-card text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
                >
                  <Icon className={`h-8 w-8 mx-auto ${m.color}`} />
                  <p className="mt-3 text-2xl font-serif font-bold text-foreground md:text-3xl">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-muted-foreground">
                    {m.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Program Breakdown ────────────────────────── */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              By the Numbers
            </span>
            <h2 className="mt-3 text-3xl font-serif font-bold text-foreground sm:text-4xl">
              Impact Across Our <span className="text-primary">Programs</span>
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {programBreakdown.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-3 w-3 rounded-full ${p.color}`} />
                  <h3 className="font-display text-sm font-bold text-foreground md:text-base">
                    {p.name}
                  </h3>
                </div>
                <div className="flex gap-6 text-right">
                  {Object.entries(p)
                    .filter(([k]) => !["name", "color"].includes(k))
                    .map(([key, val]) => (
                      <div key={key} className="hidden sm:block">
                        <p className="text-lg font-serif font-bold text-foreground">
                          {val}
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {key}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              From the Field
            </span>
            <h2 className="mt-3 text-3xl font-serif font-bold text-foreground sm:text-4xl">
              Grassroots <span className="text-primary">Interventions</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the communities we serve and the work being done
              on the ground.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleries.map((g, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-card overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-primary-deep/40 to-primary/30 flex items-center justify-center">
                  <div className="text-center px-4">
                    <Heart className="h-10 w-10 text-primary-foreground/30 mx-auto" />
                    <p className="mt-2 text-xs text-primary-foreground/40 font-medium">{g.title}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {g.location}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {g.date}
                    </span>
                  </div>
                  <h3 className="mt-2 font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {g.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {g.description}
                  </p>
                  <p className="mt-3 text-xs font-semibold text-primary">{g.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────── */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Voices of Hope
            </span>
            <h2 className="mt-3 text-3xl font-serif font-bold text-foreground sm:text-4xl">
              Stories from the <span className="text-primary">Communities</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl border border-border bg-card p-7 shadow-card"
              >
                <div className="flex items-center gap-2">
                  <Quote className="h-6 w-6 text-accent/60" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary-soft px-2 py-0.5 rounded-full">
                    {t.program}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground sm:text-4xl md:text-5xl">
            Help Us Write the Next <span className="text-primary">Chapter</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Your support makes every number possible. Every statistic above
            represents a life your generosity has touched.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/donate"><Heart className="h-4 w-4" /> Donate Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
