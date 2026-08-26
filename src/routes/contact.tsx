import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CircleCheck as CheckCircle2, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Envo Peace and Development Foundation" },
      { name: "description", content: "Get in touch with the Envo Peace and Development Foundation. Visit us at No. 1, Hilltop Rd, Abakaliki, Nigeria or call +234 806 356 3604." },
    ],
  }),
  component: ContactPage,
});

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "No. 1, Hilltop Rd, Abakaliki, Ebonyi State, Nigeria",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+234 806 356 3604",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@envopeace.org",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Monday - Friday, 9:00 AM - 5:00 PM (WAT)",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.envopeace.org",
  },
];

function ContactPage() {
  const [inquiryType, setInquiryType] = useState("general");
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  async function handleContactSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const { error } = await supabase.from("contact_inquiries").insert({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      reason: inquiryType,
      message: formData.get("message"),
    });
    if (error) {
      toast.error("Failed to send message. Please try again.");
      return;
    }
    setContactSubmitted(true);
    toast.success("Message sent! We'll get back to you within 48 hours.");
    (e.target as HTMLFormElement).reset();
    setInquiryType("general");
    setTimeout(() => setContactSubmitted(false), 4000);
  }

  async function handleVolunteerSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const { error } = await supabase.from("volunteer_inquiries").insert({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      location: formData.get("location"),
      experience: formData.get("experience"),
      motivation: formData.get("motivation"),
    });
    if (error) {
      toast.error("Failed to submit application. Please try again.");
      return;
    }
    setVolunteerSubmitted(true);
    toast.success("Application received! We'll review and reach out soon.");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setVolunteerSubmitted(false), 4000);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" />
        <div className="mx-auto max-w-5xl px-5 md:px-8 text-center text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
            Get in Touch
          </span>
          <h1 className="mt-6 text-4xl font-serif font-bold leading-tight sm:text-5xl md:text-6xl">
            Let's Talk
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80 md:text-xl">
            Whether you want to volunteer, partner, donate, or just say hello
            — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ── Contact Details + Map ────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Reach Us
              </span>
              <h2 className="mt-3 text-3xl font-serif font-bold text-foreground sm:text-4xl">
                We're Here to Help
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Reach out through any of the channels below, or fill out the
                contact form and we'll respond as soon as possible.
              </p>

              <div className="mt-8 space-y-4">
                {contactDetails.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
                      <Icon className="h-5 w-5 text-primary-deep" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-foreground">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="flex flex-col">
              <div className="relative flex-1 min-h-[350px] rounded-3xl overflow-hidden border border-border bg-secondary/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <MapPin className="h-12 w-12 text-primary/40 mx-auto" />
                    <p className="mt-3 font-serif text-lg font-bold text-foreground">
                      Abakaliki, Nigeria
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      No. 1, Hilltop Rd, Ebonyi State
                    </p>
                    <a
                      href="https://maps.google.com/?q=Abakaliki+Ebonyi+State+Nigeria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      <Globe className="h-4 w-4" /> Open in Google Maps
                    </a>
                  </div>
                </div>
                {/* Decorative grid lines */}
                <svg
                  className="absolute inset-0 h-full w-full opacity-[0.03]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────── */}
      <section className="bg-secondary/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* General Inquiry */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Send a Message
              </span>
              <h2 className="mt-3 text-2xl font-serif font-bold text-foreground sm:text-3xl">
                General Inquiry
              </h2>
              <p className="mt-2 text-muted-foreground">
                Have a question, partnership proposal, or general inquiry?
                Fill out the form and we'll get back to you.
              </p>

              <form
                onSubmit={handleContactSubmit}
                className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Full Name</Label>
                    <Input id="contact-name" name="name" required placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-reason">Reason for Contact</Label>
                    <Select value={inquiryType} onValueChange={setInquiryType}>
                      <SelectTrigger id="contact-reason">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="media">Media / Press</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="mt-5 w-full sm:w-auto"
                >
                  {contactSubmitted ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" /> Message Sent
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Volunteer Form */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Join Our Team
              </span>
              <h2 className="mt-3 text-2xl font-serif font-bold text-foreground sm:text-3xl">
                Volunteer Application
              </h2>
              <p className="mt-2 text-muted-foreground">
                Want to make a hands-on difference? Apply to volunteer with
                Envo Peace and help us serve communities directly.
              </p>

              <form
                onSubmit={handleVolunteerSubmit}
                className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="vol-name">Full Name</Label>
                    <Input id="vol-name" name="name" required placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vol-email">Email</Label>
                    <Input
                      id="vol-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vol-phone">Phone</Label>
                    <Input
                      id="vol-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+234 800 000 0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vol-location">Your Location</Label>
                    <Input
                      id="vol-location"
                      name="location"
                      required
                      placeholder="e.g. Abakaliki, Nigeria"
                    />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <Label htmlFor="vol-experience">Relevant Skills / Experience</Label>
                  <Textarea
                    id="vol-experience"
                    name="experience"
                    rows={3}
                    placeholder="Tell us about your skills, experience, or what you'd like to contribute..."
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <Label htmlFor="vol-message">Why do you want to volunteer?</Label>
                  <Textarea
                    id="vol-message"
                    name="motivation"
                    required
                    rows={3}
                    placeholder="Share your motivation for joining our mission..."
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="mt-5 w-full sm:w-auto"
                >
                  {volunteerSubmitted ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" /> Application Sent
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Submit Application
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-foreground sm:text-4xl">
            Ready to Make a <span className="text-primary">Difference</span>?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Every great movement starts with a single step. Take yours today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/donate">
                <Heart className="h-4 w-4" /> Donate Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/programs">View Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
