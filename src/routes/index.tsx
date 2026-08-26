import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Quote, CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { programs } from "@/components/site/programs-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Envo Peace and Development Foundation — Restoring Hope, Building Peaceful Communities" },
      { name: "description", content: "A purpose-driven NGO empowering underserved communities through outreach, education, healthcare, and youth empowerment programs across Nigeria and beyond." },
      { property: "og:title", content: "Envo Peace and Development Foundation" },
      { property: "og:description", content: "Restoring hope. Building peaceful communities. Join our mission." },
    ],
  }),
  component: HomePage,
});

const impactStats = [
  { value: "5,000+", label: "Families Served", description: "Across South-East Nigeria" },
  { value: "25+", label: "Communities Reached", description: "Rural & peri-urban areas" },
  { value: "500+", label: "Children Sponsored", description: "Back into school" },
  { value: "100%", label: "Purpose Driven", description: "Every gift goes to programs" },
];

const testimonials = [
  {
    quote: "They didn't just bring food — they brought dignity. Our village felt seen for the first time in years.",
    name: "Adaeze Okonkwo",
    role: "Community Leader, Ebonyi State",
  },
  {
    quote: "My daughter is the first in our family to finish secondary school, thanks to Envo Peace. This changed everything for us.",
    name: "Emeka Nwosu",
    role: "Parent, Abakaliki",
  },
  {
    quote: "The youth skills program taught me tailoring. Today I run my own shop and employ two people from my community.",
    name: "Chidinma Eze",
    role: "Program Graduate",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 py-16 md:py-24 lg:py-32">
            <div className="lg:col-span-7 text-primary-foreground">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> Peace &middot; Hope &middot; Development
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
                Restoring Hope,<br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  Building Peaceful Communities
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-primary-foreground/80 md:text-xl leading-relaxed">
                We don't just give — we uplift, inspire, and build pathways for a
                better future. Every community we touch becomes stronger, safer,
                and more hopeful.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to="/programs">
                    Explore Our Programs <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="xl">
                  <Link to="/donate">Donate Now</Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-accent opacity-20 blur-3xl" />
                <div className="relative aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-primary-deep/80 to-primary/60 shadow-elegant ring-1 ring-primary-foreground/10 flex items-center justify-center">
                  <div className="text-center px-8">
                    <Heart className="h-16 w-16 text-primary-foreground/40 mx-auto" />
                    <p className="mt-4 text-primary-foreground/60 text-sm font-medium">Envo Peace &amp; Development Foundation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Metrics ───────────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <p className="text-3xl font-serif font-bold text-primary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-display text-sm font-bold text-foreground">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Mission ──────────────────────────── */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-accent-soft" />
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-primary-soft" />
              <div className="relative aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-primary-deep to-primary/80 shadow-elegant flex items-center justify-center">
                <div className="text-center px-8">
                  <Quote className="h-10 w-10 text-primary-foreground/30 mx-auto" />
                  <p className="mt-4 text-primary-foreground/70 text-sm italic font-serif leading-relaxed">
                    &ldquo;Empower the underserved. Create opportunities. Restore hope.&rdquo;
                  </p>
                  <p className="mt-3 text-xs text-primary-foreground/50 font-medium">
                    Alh Nasir Ernest Nwagwu Nwaze (PhD), Founder
                  </p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                About Us
              </span>
              <h2 className="mt-3 text-3xl font-serif font-bold text-foreground sm:text-4xl md:text-5xl">
                Purpose-driven. <span className="text-primary">People-first.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Envo Peace and Development Foundation is a purpose-driven
                non-profit organization committed to improving lives by striving
                to create peaceful environments and restoring hope in our
                communities.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Founded by{" "}
                <strong className="text-foreground">
                  Alh Nasir Ernest Nwagwu Nwaze (PhD)
                </strong>
                , our mission is to empower the underserved and create
                sustainable opportunities for growth across Nigeria and beyond.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Our Mission</p>
                  <p className="mt-1.5 text-sm text-foreground leading-relaxed">
                    Restore hope through tangible, sustainable action in
                    underserved communities.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Our Vision</p>
                  <p className="mt-1.5 text-sm text-foreground leading-relaxed">
                    Peaceful, thriving communities across Africa and beyond,
                    where every person has the opportunity to flourish.
                  </p>
                </div>
              </div>

              <Button asChild variant="outline" className="mt-8">
                <Link to="/about">
                  Learn Our Full Story <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Programs ────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Core Pillars
            </span>
            <h2 className="mt-3 text-3xl font-serif font-bold text-foreground sm:text-4xl md:text-5xl">
              Five focus areas. <span className="text-primary">One mission.</span>
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg leading-relaxed">
              Each program is designed to deliver lasting impact — not just
              short-term relief.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.slice(0, 3).map(({ icon: Icon, title, desc, slug }, i) => (
              <Link
                key={title}
                to="/programs/$slug"
                params={{ slug }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary-soft opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero shadow-soft">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </span>
                  <h3 className="mt-5 text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/60">
                      Pillar 0{i + 1}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/programs">
                View All Programs <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────── */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Voices of Hope
            </span>
            <h2 className="mt-3 text-3xl font-serif font-bold text-foreground sm:text-4xl md:text-5xl">
              Stories from the <span className="text-primary">communities we serve</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl border border-border bg-card p-7 shadow-card"
              >
                <Quote className="h-8 w-8 text-accent/60" />
                <p className="mt-4 text-sm leading-relaxed text-foreground italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Donation CTA ─────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-hero shadow-elegant">
            <div className="grid gap-10 p-8 md:grid-cols-2 md:p-12 lg:p-16">
              <div className="text-primary-foreground">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                  <Heart className="h-3.5 w-3.5" /> Support Our Cause
                </span>
                <h2 className="mt-4 text-3xl font-serif font-bold sm:text-4xl md:text-5xl">
                  Your gift, multiplied.
                </h2>
                <p className="mt-4 text-primary-foreground/80 md:text-lg leading-relaxed">
                  Every contribution directly supports families and communities.
                  Choose how you want to make a difference.
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-primary-foreground/75">
                  {[
                    "100% of every gift is directed to programs",
                    "Transparent reporting on impact",
                    "Tax-deductible where eligible",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" /> {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col items-center justify-center rounded-2xl bg-card p-8 shadow-soft text-center">
                <Heart className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-serif font-bold text-foreground">
                  Make a Difference Today
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Choose your currency and amount to see the impact.
                </p>
                <Button asChild variant="hero" size="xl" className="mt-6">
                  <Link to="/donate">
                    <Heart className="h-4 w-4" /> Donate Now
                  </Link>
                </Button>
                <p className="mt-3 text-xs text-muted-foreground">
                  Secure checkout with Paystack, Stripe &amp; Crypto
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Preview ───────────────────────────── */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Get Involved
          </span>
          <h2 className="mt-3 text-3xl font-serif font-bold text-foreground sm:text-4xl md:text-5xl">
            Let's build something <span className="text-primary">together.</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Whether you want to volunteer, partner, or just say hello — we'd
            love to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/programs">Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
