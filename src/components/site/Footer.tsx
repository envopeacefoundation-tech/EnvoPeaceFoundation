import { Link } from "@tanstack/react-router";
import { Heart, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero">
                <Heart className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
              </span>
              <div className="leading-tight">
                <p className="text-base font-bold">Envo Peace</p>
                <p className="text-[11px] uppercase tracking-widest text-background/50">
                  &amp; Development Foundation
                </p>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/65">
              A purpose-driven NGO restoring hope, building peace, and creating
              sustainable opportunities in underserved communities across Nigeria
              and beyond.
            </p>
            <div className="mt-6 flex gap-3">
              {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-background/15 bg-background/5 text-background/60 transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-background/80">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-background/60 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-background/80">
              Reach Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-background/65">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                No. 1, Hilltop Rd, Abakaliki, Nigeria
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                +234 806 356 3604
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                hello@envopeace.org
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-background/10 pt-8 text-xs text-background/45 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Envo Peace and Development Foundation. All rights reserved.</p>
          <p>Restoring hope, one community at a time.</p>
        </div>
      </div>
    </footer>
  );
}
