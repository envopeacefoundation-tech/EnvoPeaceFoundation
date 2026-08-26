import { createFileRoute } from "@tanstack/react-router";
import {
  Heart,
  Shield,
  Target,
  Users,
  Lightbulb,
  Quote,
  ArrowRight,
  HandHeart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Envo Peace and Development Foundation" },
      { name: "description", content: "Learn about the history, mission, and leadership of the Envo Peace and Development Foundation, founded by Alh Nasir Ernest Nwagwu Nwaze (PhD)." },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Heart,
    title: "Compassion",
    description: "Every action we take is rooted in genuine care for the people we serve. We listen before we act.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with full transparency. Every donation is accounted for, and every impact is measured.",
  },
  {
    icon: Target,
    title: "Impact",
    description: "We don't measure success by programs launched, but by lives genuinely transformed.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We work with communities, not for them. Local leaders guide every initiative we undertake.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We adapt our approaches to fit the unique needs of each community, leveraging modern solutions for age-old challenges.",
  },
  {
    icon: HandHeart,
    title: "Sustainability",
    description: "Every project is designed to outlast our involvement, creating self-sustaining systems of growth.",
  },
];

const timeline = [
  { year: "Foundation", event: "Envo Peace and Development Foundation established by Alh Nasir Ernest Nwagwu Nwaze (PhD) with a vision to restore hope in underserved communities." },
  { year: "Outreach", event: "Launched first community outreach programs in rural Ebonyi State, delivering food, hygiene kits, and emotional support to displaced families." },
  { year: "Education", event: "Expanded into educational support, sponsoring hundreds of children back into school with scholarships, uniforms, and mentorship." },
  { year: "Healthcare", event: "Partnered with licensed medical professionals to deliver free health outreaches across South-East Nigeria." },
  { year: "Youth", event: "Launched youth empowerment programs including vocational training, leadership bootcamps, and startup grants for young entrepreneurs." },
  { year: "Today", event: "Operating across 25+ communities with a growing team of volunteers, partners, and supporters — but our work is just beginning." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" />
        <div className="mx-auto max-w-5xl px-5 md:px-8 text-center text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
            Our Story
          </span>
          <h1 className="mt-6 text-4xl font-serif font-bold leading-tight sm:text-5xl md:text-6xl">
            About Envo Peace
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80 md:text-xl">
            A journey of purpose, compassion, and unwavering commitment to
            building peaceful, thriving communities.
          </p>
        </div>
      </section>

      {/* ── Founder Story ────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-accent-soft" />
              <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-primary-soft" />
              <div className="relative aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-primary-deep to-primary/80 shadow-elegant flex items-center justify-center">
                <div className="text-center px-8">
                  <Quote className="h-12 w-12 text-primary-foreground/30 mx-auto" />
                  <p className="mt-4 text-primary-foreground/70 text-base italic font-serif leading-relaxed">
                    &ldquo;Empower the underserved. Create opportunities. Restore hope.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Founder
              </span>
              <h2 className="mt-3 text-3xl font-serif font-bold text-foreground sm:text-4xl">
                Alh Nasir Ernest Nwagwu Nwaze (PhD)
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Dr. Nwaze founded the Envo Peace and Development Foundation
                with a singular, unwavering belief: that every community, no
                matter how underserved, deserves the chance to thrive.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Born and raised in South-East Nigeria, he witnessed firsthand
                the challenges facing rural communities — lack of access to
                education, healthcare, and economic opportunity. Rather than
                look away, he chose to act.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Through Envo Peace, Dr. Nwaze has built an organization that
                doesn't just deliver aid — it builds lasting systems of hope.
                From scholarships that put children back in school, to medical
                outreaches that save lives, to youth programs that create
                entrepreneurs — every initiative is a step toward the peaceful,
                thriving communities he envisions.
              </p>

              <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Our Mission
                </p>
                <p className="mt-2 text-sm text-foreground leading-relaxed">
                  Restore hope through tangible, sustainable action in
                  underserved communities across Nigeria and beyond.
                </p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Our Vision
                  </p>
                  <p className="mt-2 text-sm text-foreground leading-relaxed">
                    Peaceful, thriving communities across Africa and beyond,
                    where every person has the opportunity to flourish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────── */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Journey
            </span>
            <h2 className="mt-3 text-3xl font-serif font-bold text-foreground sm:text-4xl">
              From Vision to <span className="text-primary">Impact</span>
            </h2>
          </div>

          <div className="mt-14 space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="mt-2 h-full w-px bg-border" />
                  )}
                </div>
                <div className="pt-1.5 pb-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.year}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Pillars ─────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              What Guides Us
            </span>
            <h2 className="mt-3 text-3xl font-serif font-bold text-foreground sm:text-4xl">
              Our Core <span className="text-primary">Values</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
                  <Icon className="h-6 w-6 text-primary-deep" />
                </span>
                <h3 className="mt-4 text-lg font-serif font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="bg-secondary/50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground sm:text-4xl md:text-5xl">
            Be Part of the <span className="text-primary">Story</span>
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Every great movement starts with people who believe in something
            bigger than themselves.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/donate"><Heart className="h-4 w-4" /> Donate Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get Involved <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
