import { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Heart, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { programs } from "./programs-data";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = useCallback(
    (path: string) => {
      if (path === "/") return location.pathname === "/";
      return location.pathname.startsWith(path);
    },
    [location.pathname],
  );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-soft"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero shadow-elegant transition-transform group-hover:scale-105">
              <Heart className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-bold text-foreground md:text-base">Envo Peace</span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground md:text-[11px]">
                &amp; Development Foundation
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(link.to)
                    ? "text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-primary-soft/50",
                )}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
                )}
              </Link>
            ))}
            <Link
              to="/donate"
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive("/donate")
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground hover:bg-primary-soft/50",
              )}
            >
              Donate
            </Link>
            {programs.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-primary-soft/50 hover:text-foreground focus:outline-none">
                  More <ChevronDown className="h-3.5 w-3.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {programs.map((p) => {
                    const Icon = p.icon;
                    return (
                      <DropdownMenuItem key={p.slug} asChild>
                        <Link to="/programs/$slug" params={{ slug: p.slug }} className="cursor-pointer gap-3">
                          <Icon className="h-4 w-4 text-primary" />
                          <span>{p.title}</span>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
              <Link to="/donate"><Heart className="h-4 w-4" /> Donate Now</Link>
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/80 backdrop-blur-sm lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)} />
      )}

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero">
                <Heart className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
              </span>
              <span className="text-sm font-bold text-foreground">Envo Peace</span>
            </Link>
            <button type="button" onClick={() => setMobileOpen(false)} className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50">
              <X className="h-4 w-4" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive(link.to)
                      ? "bg-primary-soft text-primary-deep"
                      : "text-foreground/80 hover:bg-secondary hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/donate"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  isActive("/donate")
                    ? "bg-primary-soft text-primary-deep"
                    : "text-foreground/80 hover:bg-secondary hover:text-foreground",
                )}
              >
                Donate
              </Link>
            </div>

            <div className="mt-8">
              <p className="px-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Programs</p>
              <div className="mt-3 space-y-1">
                {programs.map((p) => {
                  const Icon = p.icon;
                  return (
                    <Link
                      key={p.slug}
                      to="/programs/$slug"
                      params={{ slug: p.slug }}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      {p.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>

          <div className="border-t border-border px-5 py-5">
            <Button asChild variant="hero" size="lg" className="w-full">
              <Link to="/donate" onClick={() => setMobileOpen(false)}>
                <Heart className="h-4 w-4" /> Support Our Cause
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
