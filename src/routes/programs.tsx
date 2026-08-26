import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { programs } from "@/components/site/programs-data";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — Envo Peace and Development Foundation" },
      { name: "description", content: "Explore our five core focus areas: Outreach, Education, Healthcare, Youth Empowerment, and Community Development." },
    ],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" />
        <div className="mx-auto max-w-5xl px-5 md:px-8 text-center text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
            Our Programs
          </span>
          <h1 className="mt-6 text-4xl font-serif font-bold leading-tight sm:text-5xl md:text-6xl">
            Five Pillars. One Mission.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80 md:text-xl">
            Each program is designed to address a critical need in underserved
            communities — and deliver lasting, measurable impact.
          </p>
        </div>
      </section>

      {/* ── Programs Grid ────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="space-y-16">
            {programs.map((program, i) => {
              const Icon = program.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={program.slug}
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                    isEven ? "" : "lg:[direction:rtl]"
                  }`}
                >
                  <div className={isEven ? "" : "lg:[direction:ltr]"}>
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-soft">
                      <Icon className="h-7 w-7 text-primary-foreground" />
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">
                      Pillar 0{i + 1}
                    </p>
                    <h2 className="mt-2 text-2xl font-serif font-bold text-foreground sm:text-3xl md:text-4xl">
                      {program.title}
                    </h2>
                    <p className="mt-1 text-base italic text-muted-foreground font-serif">
                      {program.tagline}
                    </p>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                      {program.overview}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {program.highlights.map((h) => (
                        <div
                          key={h.title}
                          className="rounded-xl border border-border bg-card p-4 shadow-soft"
                        >
                          <h4 className="font-display text-sm font-bold text-foreground">
                            {h.title}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {h.body}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="mt-6">
                      <Link to="/programs/$slug" params={{ slug: program.slug }}>
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className={isEven ? "" : "lg:[direction:ltr]"}>
                    <div className="relative">
                      <div className="absolute -inset-4 rounded-3xl bg-gradient-accent opacity-15 blur-3xl" />
                      <div className="relative aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-primary-deep/60 to-primary/40 shadow-elegant flex items-center justify-center">
                        <Icon className="h-20 w-20 text-primary-foreground/30" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Individual Program Pages Link ────────────── */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Detailed Breakdowns
            </span>
            <h2 className="mt-3 text-3xl font-serif font-bold text-foreground sm:text-4xl">
              Deep Dive Into Each <span className="text-primary">Program</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Click any program to see detailed case studies, outcomes, and how
              your support makes a difference.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => {
              const PIcon = p.icon;
              return (
                <Link
                  key={p.slug}
                  to="/programs/$slug"
                  params={{ slug: p.slug }}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
                    <PIcon className="h-6 w-6 text-primary-deep" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
                    {p.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    View details <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground sm:text-4xl md:text-5xl">
            Help Us Expand Our <span className="text-primary">Reach</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Every donation helps us bring these programs to more communities
            in need.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/donate"><Heart className="h-4 w-4" /> Donate Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/impact">See Our Impact</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
