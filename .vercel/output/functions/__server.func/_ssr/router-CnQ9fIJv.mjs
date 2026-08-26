import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, b as useLocation, O as Outlet, H as HeadContent, S as Scripts, d as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { U as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root2, T as Trigger, P as Portal2, C as Content2, I as Item2, S as SubTrigger2, a as SubContent2, b as CheckboxItem2, c as ItemIndicator2, d as RadioItem2, L as Label2, e as Separator2 } from "../_libs/radix-ui__react-dropdown-menu.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { H as Heart, a as HeartHandshake, G as GraduationCap, S as Stethoscope, U as Users, b as Sprout, C as ChevronDown, X, M as Menu, A as ArrowUpRight, c as MapPin, P as Phone, d as Mail, e as ChevronRight, f as Check, g as Circle } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-effect-event+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-accent text-accent-foreground shadow-elegant hover:brightness-105 hover:-translate-y-0.5 transition-all duration-200",
        heroOutline: "border-2 border-primary-foreground/60 bg-transparent text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/10"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-full px-7 text-base",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const DropdownMenu = Root2;
const DropdownMenuTrigger = Trigger;
const DropdownMenuSubTrigger = reactExports.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SubTrigger2,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
const DropdownMenuSubContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SubContent2,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = SubContent2.displayName;
const DropdownMenuContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = Content2.displayName;
const DropdownMenuItem = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuCheckboxItem = reactExports.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  CheckboxItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
const DropdownMenuRadioItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  RadioItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
const DropdownMenuLabel = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label2,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = Label2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator2,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = Separator2.displayName;
const programs = [
  {
    slug: "outreach",
    icon: HeartHandshake,
    title: "Outreach Programs",
    tagline: "Meeting communities where they are.",
    desc: "Boots-on-the-ground initiatives that bring relief, dignity, and hope directly to underserved communities.",
    overview: "Our outreach teams travel into rural villages, displacement camps, and overlooked urban neighborhoods to deliver food, hygiene kits, clothing, and emotional support. Every visit begins with listening — so the help we deliver matches the need on the ground.",
    highlights: [
      { title: "Relief Distribution", body: "Food packs, hygiene kits, and clothing for vulnerable families." },
      { title: "Community Listening", body: "House-to-house visits to understand needs before we act." },
      { title: "Crisis Response", body: "Rapid mobilization to communities affected by displacement or disaster." }
    ],
    outcomes: [
      "Over 5,000 families served across South-East Nigeria",
      "Active in 25+ rural and peri-urban communities",
      "Quarterly relief campaigns powered by local volunteers"
    ]
  },
  {
    slug: "education",
    icon: GraduationCap,
    title: "Educational Support",
    tagline: "Keeping every child in the classroom.",
    desc: "Scholarships, learning materials, and mentorship that keep children and young adults in school.",
    overview: "We believe education is the most reliable path out of poverty. Our education program covers school fees, uniforms, books, and exam registrations for children from low-income homes, paired with mentorship to keep them on track.",
    highlights: [
      { title: "Scholarships", body: "Sponsorships for primary, secondary, and tertiary students." },
      { title: "Learning Materials", body: "Books, uniforms, and stationery delivered each new term." },
      { title: "Mentorship Circles", body: "Volunteer mentors guiding students through academic and life decisions." }
    ],
    outcomes: [
      "Hundreds of children sponsored back into school",
      "Partnerships with local schools and PTAs",
      "After-school study clubs in rural communities"
    ]
  },
  {
    slug: "healthcare",
    icon: Stethoscope,
    title: "Healthcare Assistance",
    tagline: "Healthcare as a right, not a privilege.",
    desc: "Free medical outreaches, essential medications, and access to care for vulnerable families.",
    overview: "Our medical outreaches partner with licensed doctors, nurses, and pharmacists to bring free consultations, screenings, and medicines to communities with limited access to clinics. We focus on maternal health, malaria prevention, and chronic disease screening.",
    highlights: [
      { title: "Free Medical Outreaches", body: "Consultations, screenings, and medication for under-served areas." },
      { title: "Maternal & Child Care", body: "Pre-natal support, vaccinations, and infant nutrition guidance." },
      { title: "Health Education", body: "Workshops on hygiene, nutrition, and preventive care." }
    ],
    outcomes: [
      "Thousands of free consultations delivered",
      "Essential medications dispensed at no cost",
      "Referral support for critical cases"
    ]
  },
  {
    slug: "youth",
    icon: Users,
    title: "Youth Empowerment",
    tagline: "Building the next generation of African leaders.",
    desc: "Skills training, leadership development, and entrepreneurship pathways for African youth.",
    overview: "We equip young people with the skills, mindset, and networks to thrive. From vocational training to leadership bootcamps and small-business grants, our youth programs turn ambition into livelihood.",
    highlights: [
      { title: "Vocational Training", body: "Tailoring, ICT, catering, and trade skills with certification." },
      { title: "Leadership Bootcamps", body: "Workshops on character, communication, and civic responsibility." },
      { title: "Startup Grants", body: "Seed funding and mentorship for youth-led micro-businesses." }
    ],
    outcomes: [
      "Young entrepreneurs launched with seed grants",
      "Annual leadership summit for emerging leaders",
      "Job-ready graduates from our skills programs"
    ]
  },
  {
    slug: "community",
    icon: Sprout,
    title: "Community Development",
    tagline: "Lifting whole communities, not just individuals.",
    desc: "Sustainable infrastructure, peace-building, and grassroots projects that lift entire communities.",
    overview: "We partner with community leaders to build the infrastructure and social fabric that lasting development requires — clean water, safe gathering spaces, peace dialogues, and grassroots organizing.",
    highlights: [
      { title: "Clean Water Projects", body: "Boreholes and water points for communities without safe water." },
      { title: "Peace Dialogues", body: "Mediation and reconciliation between communities in conflict." },
      { title: "Grassroots Organizing", body: "Training local committees to lead their own development." }
    ],
    outcomes: [
      "Water access restored in remote villages",
      "Peace committees established across multiple communities",
      "Long-term partnerships with local government"
    ]
  }
];
function getProgram(slug) {
  return programs.find((p) => p.slug === slug);
}
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const location = useLocation();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);
  reactExports.useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  const isActive = reactExports.useCallback(
    (path) => {
      if (path === "/") return location.pathname === "/";
      return location.pathname.startsWith(path);
    },
    [location.pathname]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-soft" : "bg-transparent"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero shadow-elegant transition-transform group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5 text-primary-foreground", strokeWidth: 2.5 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground md:text-base", children: "Envo Peace" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium uppercase tracking-widest text-muted-foreground md:text-[11px]", children: "& Development Foundation" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-1 lg:flex", children: [
            navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: link.to,
                className: cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(link.to) ? "text-primary" : "text-foreground/70 hover:text-foreground hover:bg-primary-soft/50"
                ),
                children: [
                  link.label,
                  isActive(link.to) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" })
                ]
              },
              link.to
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/donate",
                className: cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive("/donate") ? "text-primary" : "text-foreground/70 hover:text-foreground hover:bg-primary-soft/50"
                ),
                children: "Donate"
              }
            ),
            programs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuTrigger, { className: "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-primary-soft/50 hover:text-foreground focus:outline-none", children: [
                "More ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuContent, { align: "end", className: "w-56", children: programs.map((p) => {
                const Icon = p.icon;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/programs/$slug", params: { slug: p.slug }, className: "cursor-pointer gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.title })
                ] }) }, p.slug);
              }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", size: "sm", className: "hidden sm:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/donate", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }),
              " Donate Now"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setMobileOpen((v) => !v),
                "aria-label": "Toggle menu",
                className: "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background/80 backdrop-blur-sm lg:hidden",
                children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
              }
            )
          ] })
        ] })
      }
    ),
    mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden", onClick: () => setMobileOpen(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-background shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border px-5 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5", onClick: () => setMobileOpen(false), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 text-primary-foreground", strokeWidth: 2.5 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground", children: "Envo Peace" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setMobileOpen(false), className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex-1 overflow-y-auto px-5 py-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: link.to,
                  onClick: () => setMobileOpen(false),
                  className: cn(
                    "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive(link.to) ? "bg-primary-soft text-primary-deep" : "text-foreground/80 hover:bg-secondary hover:text-foreground"
                  ),
                  children: link.label
                },
                link.to
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/donate",
                  onClick: () => setMobileOpen(false),
                  className: cn(
                    "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    isActive("/donate") ? "bg-primary-soft text-primary-deep" : "text-foreground/80 hover:bg-secondary hover:text-foreground"
                  ),
                  children: "Donate"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground", children: "Programs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-1", children: programs.map((p) => {
                const Icon = p.icon;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/programs/$slug",
                    params: { slug: p.slug },
                    onClick: () => setMobileOpen(false),
                    className: "flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-primary" }),
                      p.title
                    ]
                  },
                  p.slug
                );
              }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border px-5 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "hero", size: "lg", className: "w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/donate", onClick: () => setMobileOpen(false), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }),
            " Support Our Cause"
          ] }) }) })
        ] })
      }
    )
  ] });
}
const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/impact", label: "Impact" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact" }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-16 md:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-5 w-5 text-primary-foreground", strokeWidth: 2.5 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold", children: "Envo Peace" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-widest text-background/50", children: "& Development Foundation" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-sm text-sm leading-relaxed text-background/65", children: "A purpose-driven NGO restoring hope, building peace, and creating sustainable opportunities in underserved communities across Nigeria and beyond." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex gap-3", children: ["Facebook", "Twitter", "LinkedIn", "Instagram"].map((name) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            "aria-label": name,
            className: "flex h-10 w-10 items-center justify-center rounded-full border border-background/15 bg-background/5 text-background/60 transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
          },
          name
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm font-bold uppercase tracking-widest text-background/80", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: footerLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: link.to,
            className: "text-sm text-background/60 transition-colors hover:text-accent",
            children: link.label
          }
        ) }, link.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm font-bold uppercase tracking-widest text-background/80", children: "Reach Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-4 text-sm text-background/65", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }),
            "No. 1, Hilltop Rd, Abakaliki, Nigeria"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }),
            "+234 806 356 3604"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }),
            "hello@envopeace.org"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 flex flex-col items-start justify-between gap-3 border-t border-background/10 pt-8 text-xs text-background/45 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Envo Peace and Development Foundation. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Restoring hope, one community at a time." })
    ] })
  ] }) });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const appCss = "/assets/styles-7ZghAmks.css";
function reportAppError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__appErrorEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-8xl font-serif font-bold text-primary/20", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-2xl font-serif font-bold text-foreground", children: "Page Not Found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-deep",
        children: "Return Home"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportAppError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-serif font-bold text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base text-muted-foreground", children: "We encountered an unexpected error. Please try again." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-deep",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          className: "inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Envo Peace and Development Foundation" },
      { name: "description", content: "Envo Peace and Development Foundation — a purpose-driven NGO restoring hope, building peace, and creating sustainable opportunities in underserved communities across Nigeria and beyond." },
      { name: "author", content: "Envo Peace and Development Foundation" },
      { property: "og:title", content: "Envo Peace and Development Foundation" },
      { property: "og:description", content: "Restoring hope. Building peaceful communities. Join our mission to empower underserved communities through outreach, education, healthcare, and youth empowerment." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Envo Peace and Development Foundation" },
      { name: "twitter:description", content: "Restoring hope. Building peaceful communities." }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    !isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    !isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-center" })
  ] }) });
}
const $$splitComponentImporter$7 = () => import("./index-DhssgSp3.mjs");
const Route$7 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Envo Peace and Development Foundation — Restoring Hope, Building Peaceful Communities"
    }, {
      name: "description",
      content: "A purpose-driven NGO empowering underserved communities through outreach, education, healthcare, and youth empowerment programs across Nigeria and beyond."
    }, {
      property: "og:title",
      content: "Envo Peace and Development Foundation"
    }, {
      property: "og:description",
      content: "Restoring hope. Building peaceful communities. Join our mission."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./about-6GM5MtL2.mjs");
const Route$6 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "About Us — Envo Peace and Development Foundation"
    }, {
      name: "description",
      content: "Learn about the history, mission, and leadership of the Envo Peace and Development Foundation, founded by Alh Nasir Ernest Nwagwu Nwaze (PhD)."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./admin-DQsILbPh.mjs");
const Route$5 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Admin — Envo Peace and Development Foundation"
    }, {
      name: "robots",
      content: "noindex, nofollow"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-BMyUH9DS.mjs");
const Route$4 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Contact Us — Envo Peace and Development Foundation"
    }, {
      name: "description",
      content: "Get in touch with the Envo Peace and Development Foundation. Visit us at No. 1, Hilltop Rd, Abakaliki, Nigeria or call +234 806 356 3604."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./donate-CC3OKmdw.mjs");
const Route$3 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Donate — Envo Peace and Development Foundation"
    }, {
      name: "description",
      content: "Make a secure donation to support our programs. Accepts Naira (NGN), US Dollars (USD), and Cryptocurrency (BTC, USDT)."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./impact-oljO6_m8.mjs");
const Route$2 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Our Impact — Envo Peace and Development Foundation"
    }, {
      name: "description",
      content: "See the real impact of our programs: communities reached, children educated, families supported, and lives transformed."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./programs-CvFf1SAa.mjs");
const Route$1 = createFileRoute()({
  head: () => ({
    meta: [{
      title: "Our Programs — Envo Peace and Development Foundation"
    }, {
      name: "description",
      content: "Explore our five core focus areas: Outreach, Education, Healthcare, Youth Empowerment, and Community Development."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./programs._slug-B8FARm4z.mjs");
const $$splitErrorComponentImporter = () => import("./programs._slug-yNObG6Uy.mjs");
const $$splitNotFoundComponentImporter = () => import("./programs._slug-CDx-80Hz.mjs");
const Route = createFileRoute()({
  head: ({
    params
  }) => {
    const p = getProgram(params.slug);
    const title = p ? `${p.title} — Envo Peace and Development Foundation` : "Program — Envo Peace";
    const desc = p?.desc ?? "Explore our programs at Envo Peace and Development Foundation.";
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: desc
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: desc
      }]
    };
  },
  loader: ({
    params
  }) => {
    const program = getProgram(params.slug);
    if (!program) throw notFound();
    return {
      program
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$7.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$6.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const AdminRoute = Route$5.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const DonateRoute = Route$3.update({
  id: "/donate",
  path: "/donate",
  getParentRoute: () => Route$8
});
const ImpactRoute = Route$2.update({
  id: "/impact",
  path: "/impact",
  getParentRoute: () => Route$8
});
const ProgramsRoute = Route$1.update({
  id: "/programs",
  path: "/programs",
  getParentRoute: () => Route$8
});
const ProgramsSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ProgramsRoute
});
const ProgramsRouteChildren = {
  ProgramsSlugRoute
};
const ProgramsRouteWithChildren = ProgramsRoute._addFileChildren(
  ProgramsRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute,
  ContactRoute,
  DonateRoute,
  ImpactRoute,
  ProgramsRoute: ProgramsRouteWithChildren
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Route as R,
  cn as c,
  programs as p,
  router as r
};
