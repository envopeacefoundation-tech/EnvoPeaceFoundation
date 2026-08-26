import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button, c as cn } from "./router-BZs66lnk.mjs";
import { I as Input } from "./input-Cg99j1Ct.mjs";
import { s as supabase, a as subscribeToAuth, L as Label, b as signIn, c as signOut } from "./supabase-CoViRIrP.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as RefreshCw, k as Shield, m as LogOut, n as LayoutDashboard, o as Pencil, p as TrendingUp, H as Heart, d as Mail, U as Users, q as Plus, r as Trash2, j as CircleCheck, s as CircleX, t as Clock } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
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
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
const tabs = [{
  key: "dashboard",
  label: "Dashboard",
  icon: LayoutDashboard
}, {
  key: "programs",
  label: "Programs",
  icon: Pencil
}, {
  key: "stats",
  label: "Impact Stats",
  icon: TrendingUp
}, {
  key: "donations",
  label: "Donations",
  icon: Heart
}, {
  key: "inquiries",
  label: "Inquiries",
  icon: Mail
}];
function AdminPage() {
  const [user, setUser] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [loginLoading, setLoginLoading] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState("dashboard");
  reactExports.useEffect(() => {
    supabase.auth.getSession().then(({
      data
    }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });
    const unsub = subscribeToAuth((u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      const {
        error
      } = await signIn(email, password);
      if (error) throw error;
      toast.success("Welcome back!");
    } catch (err) {
      toast.error(err.message || "Login failed");
    }
    setLoginLoading(false);
  };
  const handleLogout = async () => {
    await signOut();
    toast.success("Signed out.");
  };
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-6 w-6 animate-spin text-primary" }) });
  }
  if (!user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-7 w-7 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-2xl font-serif font-bold text-foreground", children: "Admin Portal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Sign in to manage content and view analytics." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleLogin, className: "mt-8 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "admin-email", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "admin-email", type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "admin@envopeace.org" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "admin-password", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "admin-password", type: "password", required: true, value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Enter your password" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "hero", size: "lg", className: "w-full", disabled: loginLoading, children: loginLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4 animate-spin" }) : "Sign In" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-center text-xs text-muted-foreground", children: "Protected area. Authorized personnel only." })
    ] }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-sm font-bold text-foreground", children: "Admin Dashboard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Envo Peace Foundation" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors", children: "View Site" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: handleLogout, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4" }),
          " Sign Out"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-5 py-6 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-[220px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "space-y-1", children: tabs.map(({
        key,
        label,
        icon: Icon
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setActiveTab(key), className: cn("flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors", activeTab === key ? "bg-primary-soft text-primary-deep" : "text-muted-foreground hover:bg-secondary hover:text-foreground"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
        label
      ] }, key)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        activeTab === "dashboard" && /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardTab, {}),
        activeTab === "programs" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramsTab, {}),
        activeTab === "stats" && /* @__PURE__ */ jsxRuntimeExports.jsx(StatsTab, {}),
        activeTab === "donations" && /* @__PURE__ */ jsxRuntimeExports.jsx(DonationsTab, {}),
        activeTab === "inquiries" && /* @__PURE__ */ jsxRuntimeExports.jsx(InquiriesTab, {})
      ] })
    ] }) })
  ] });
}
function DashboardTab() {
  const [counts, setCounts] = reactExports.useState({
    donations: 0,
    volunteers: 0,
    contacts: 0
  });
  const [loading, setLoading] = reactExports.useState(true);
  const loadStats = reactExports.useCallback(async () => {
    setLoading(true);
    const [dRes, vRes, cRes] = await Promise.all([supabase.from("donations").select("*", {
      count: "exact",
      head: true
    }), supabase.from("volunteer_inquiries").select("*", {
      count: "exact",
      head: true
    }), supabase.from("contact_inquiries").select("*", {
      count: "exact",
      head: true
    })]);
    setCounts({
      donations: dRes.count ?? 0,
      volunteers: vRes.count ?? 0,
      contacts: cRes.count ?? 0
    });
    setLoading(false);
  }, []);
  reactExports.useEffect(() => {
    loadStats();
  }, [loadStats]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-serif font-bold text-foreground", children: "Dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Overview of your platform activity." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-3", children: [{
      label: "Total Donations",
      value: counts.donations,
      icon: Heart,
      color: "text-primary"
    }, {
      label: "Volunteer Inquiries",
      value: counts.volunteers,
      icon: Users,
      color: "text-blue-600"
    }, {
      label: "Contact Messages",
      value: counts.contacts,
      icon: Mail,
      color: "text-amber-600"
    }].map(({
      label,
      value,
      icon: Icon,
      color
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: `h-8 w-8 ${color}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-3xl font-serif font-bold text-foreground", children: loading ? "—" : value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-semibold text-muted-foreground", children: label })
    ] }, label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-bold text-foreground", children: "Quick Actions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: loadStats, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4" }),
        " Refresh Data"
      ] }) })
    ] })
  ] });
}
function ProgramsTab() {
  const [programs, setPrograms] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    supabase.from("programs").select("*").order("sort_order").then(({
      data,
      error
    }) => {
      if (error) {
        toast.error("Failed to load programs.");
      } else {
        setPrograms(data ?? []);
      }
      setLoading(false);
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-serif font-bold text-foreground", children: "Programs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Manage your focus areas and program content." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }),
        " Add Program"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12 text-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-5 w-5 animate-spin mx-auto" }) }) : programs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-8 text-center shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No programs found." }) }) : programs.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-bold text-foreground", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: p.tagline })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", className: "text-destructive hover:text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) })
      ] })
    ] }, p.id)) })
  ] });
}
function StatsTab() {
  const [stats, setStats] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [editId, setEditId] = reactExports.useState(null);
  const [editValue, setEditValue] = reactExports.useState("");
  reactExports.useEffect(() => {
    supabase.from("impact_stats").select("*").order("sort_order").then(({
      data,
      error
    }) => {
      if (error) {
        toast.error("Failed to load stats.");
      } else {
        setStats(data ?? []);
      }
      setLoading(false);
    });
  }, []);
  const handleSave = async (id) => {
    const {
      error
    } = await supabase.from("impact_stats").update({
      value: editValue
    }).eq("id", id);
    if (error) {
      toast.error("Failed to update stat.");
      return;
    }
    setStats((prev) => prev.map((s) => s.id === id ? {
      ...s,
      value: editValue
    } : s));
    setEditId(null);
    toast.success("Stat updated!");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-serif font-bold text-foreground", children: "Impact Statistics" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Update the live metrics displayed on your website." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12 text-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-5 w-5 animate-spin mx-auto" }) }) : stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: stat.label }),
        editId === stat.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: editValue, onChange: (e) => setEditValue(e.target.value), className: "max-w-xs", autoFocus: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => handleSave(stat.id), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
            " Save"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => setEditId(null), children: "Cancel" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-2xl font-serif font-bold text-foreground", children: stat.value })
      ] }),
      editId !== stat.id && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => {
        setEditId(stat.id);
        setEditValue(stat.value);
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) })
    ] }, stat.id)) })
  ] });
}
function DonationsTab() {
  const [donations, setDonations] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    supabase.from("donations").select("*").order("created_at", {
      ascending: false
    }).limit(50).then(({
      data,
      error
    }) => {
      if (error) {
        toast.error("Failed to load donations.");
      } else {
        setDonations(data ?? []);
      }
      setLoading(false);
    });
  }, []);
  const statusIcon = (status) => {
    switch (status) {
      case "completed":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-green-600" });
      case "pending":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-amber-600" });
      case "failed":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4 text-red-600" });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-serif font-bold text-foreground", children: "Donation Ledger" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "View all received donations and transaction records." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 overflow-x-auto", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12 text-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-5 w-5 animate-spin mx-auto" }) }) : donations.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-8 text-center shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-8 w-8 text-muted-foreground/30 mx-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "No donations recorded yet." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 pr-4", children: "Donor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 pr-4", children: "Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 pr-4", children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3 pr-4", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "pb-3", children: "Date" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: donations.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 pr-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: d.donor_name || "Anonymous" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: d.donor_email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 pr-4 font-serif font-bold text-foreground", children: [
          d.currency === "NGN" ? "₦" : "$",
          (d.amount || 0).toLocaleString()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-4 text-muted-foreground", children: d.payment_method }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          statusIcon(d.status),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize text-xs", children: d.status })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-muted-foreground", children: d.created_at ? new Date(d.created_at).toLocaleDateString() : "—" })
      ] }, d.id)) })
    ] }) })
  ] });
}
function InquiriesTab() {
  const [volunteers, setVolunteers] = reactExports.useState([]);
  const [contacts, setContacts] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const [subTab, setSubTab] = reactExports.useState("volunteers");
  reactExports.useEffect(() => {
    Promise.all([supabase.from("volunteer_inquiries").select("*").order("created_at", {
      ascending: false
    }), supabase.from("contact_inquiries").select("*").order("created_at", {
      ascending: false
    })]).then(([vRes, cRes]) => {
      setVolunteers(vRes.data ?? []);
      setContacts(cRes.data ?? []);
      setLoading(false);
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-serif font-bold text-foreground", children: "Inquiries" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Review volunteer applications and contact messages." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setSubTab("volunteers"), className: cn("rounded-full px-4 py-2 text-sm font-medium transition-colors", subTab === "volunteers" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"), children: [
        "Volunteer Applications (",
        volunteers.length,
        ")"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setSubTab("contacts"), className: cn("rounded-full px-4 py-2 text-sm font-medium transition-colors", subTab === "contacts" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"), children: [
        "Contact Messages (",
        contacts.length,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12 text-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-5 w-5 animate-spin mx-auto" }) }) : subTab === "volunteers" ? volunteers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-8 text-center shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No volunteer applications yet." }) }) : volunteers.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-bold text-foreground", children: v.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            v.email,
            " · ",
            v.phone
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase", v.status === "new" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"), children: v.status })
      ] }),
      v.motivation && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-muted-foreground italic", children: [
        "“",
        v.motivation,
        "”"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-muted-foreground", children: [
        "Location: ",
        v.location || "N/A",
        " · Applied:",
        " ",
        v.created_at ? new Date(v.created_at).toLocaleDateString() : "—"
      ] })
    ] }, v.id)) : contacts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border bg-card p-8 text-center shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No contact messages yet." }) }) : contacts.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-bold text-foreground", children: c.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            c.email,
            " · ",
            c.reason
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase", c.status === "new" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"), children: c.status })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: c.message }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs text-muted-foreground", children: [
        "Received: ",
        c.created_at ? new Date(c.created_at).toLocaleDateString() : "—"
      ] })
    ] }, c.id)) })
  ] });
}
export {
  AdminPage as component
};
