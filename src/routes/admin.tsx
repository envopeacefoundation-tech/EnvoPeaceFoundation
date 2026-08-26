import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback, type FormEvent } from "react";
import {
  LayoutDashboard,
  TrendingUp,
  Heart,
  Mail,
  Users,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  CheckCircle2,
  Clock,
  XCircle,
  RefreshCw,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  subscribeToAuth,
  signIn,
  signOut,
  fetchCollection,
  updateDocument,
  getFirebaseDb,
  orderBy as fbOrderBy,
  limit as fbLimit,
  type User,
  type DocumentData,
  collection,
  getDocs,
} from "@/lib/firebase";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Envo Peace and Development Foundation" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

type Tab = "dashboard" | "programs" | "stats" | "donations" | "inquiries";

const tabs: { key: Tab; label: string; icon: typeof LayoutDashboard }[] = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "programs", label: "Programs", icon: Pencil },
  { key: "stats", label: "Impact Stats", icon: TrendingUp },
  { key: "donations", label: "Donations", icon: Heart },
  { key: "inquiries", label: "Inquiries", icon: Mail },
];

function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");

  useEffect(() => {
    const unsub = subscribeToAuth((u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    try {
      await signIn(email, password);
      toast.success("Welcome back!");
    } catch (err: any) {
      toast.error(err.message || "Login failed");
    }
    setLoginLoading(false);
  };

  const handleLogout = async () => {
    await signOut();
    toast.success("Signed out.");
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <RefreshCw className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-hero">
                <Shield className="h-7 w-7 text-primary-foreground" />
              </span>
              <h1 className="mt-4 text-2xl font-serif font-bold text-foreground">
                Admin Portal
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Sign in to manage content and view analytics.
              </p>
            </div>

            <form onSubmit={handleLogin} className="mt-8 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-email">Email</Label>
                <Input
                  id="admin-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@envopeace.org"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-password">Password</Label>
                <Input
                  id="admin-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={loginLoading}
              >
                {loginLoading ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              Protected area. Authorized personnel only.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
              <Shield className="h-4 w-4 text-primary-foreground" />
            </span>
            <div>
              <h1 className="text-sm font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-[10px] text-muted-foreground">Envo Peace Foundation</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              View Site
            </Link>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4" /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <nav className="space-y-1">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                  activeTab === key
                    ? "bg-primary-soft text-primary-deep"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </nav>

          <div>
            {activeTab === "dashboard" && <DashboardTab />}
            {activeTab === "programs" && <ProgramsTab />}
            {activeTab === "stats" && <StatsTab />}
            {activeTab === "donations" && <DonationsTab />}
            {activeTab === "inquiries" && <InquiriesTab />}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Dashboard Tab ──────────────────────────────────

function DashboardTab() {
  const [counts, setCounts] = useState({ donations: 0, volunteers: 0, contacts: 0 });
  const [loading, setLoading] = useState(true);

  const loadStats = useCallback(async () => {
    setLoading(true);
    const db = getFirebaseDb();
    const [dSnap, vSnap, cSnap] = await Promise.all([
      getDocs(collection(db, "donations")),
      getDocs(collection(db, "volunteer_inquiries")),
      getDocs(collection(db, "contact_inquiries")),
    ]);
    setCounts({
      donations: dSnap.size,
      volunteers: vSnap.size,
      contacts: cSnap.size,
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    loadStats();
  }, [loadStats]);

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-foreground">Dashboard</h2>
      <p className="mt-1 text-sm text-muted-foreground">Overview of your platform activity.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Total Donations", value: counts.donations, icon: Heart, color: "text-primary" },
          { label: "Volunteer Inquiries", value: counts.volunteers, icon: Users, color: "text-blue-600" },
          { label: "Contact Messages", value: counts.contacts, icon: Mail, color: "text-amber-600" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <Icon className={`h-8 w-8 ${color}`} />
            <p className="mt-3 text-3xl font-serif font-bold text-foreground">
              {loading ? "—" : value}
            </p>
            <p className="mt-1 text-xs font-semibold text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-soft">
        <h3 className="font-display text-sm font-bold text-foreground">Quick Actions</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={loadStats}>
            <RefreshCw className="h-4 w-4" /> Refresh Data
          </Button>
        </div>
      </div>
    </div>
  );
}

// ── Programs Tab ───────────────────────────────────

function ProgramsTab() {
  const [programs, setPrograms] = useState<(DocumentData & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCollection("programs", fbOrderBy("sort_order")).then((data) => {
      setPrograms(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-serif font-bold text-foreground">Programs</h2>
          <p className="mt-1 text-sm text-muted-foreground">Manage your focus areas and program content.</p>
        </div>
        <Button variant="hero" size="sm">
          <Plus className="h-4 w-4" /> Add Program
        </Button>
      </div>

      <div className="mt-6 space-y-3">
        {loading ? (
          <div className="py-12 text-center text-muted-foreground">
            <RefreshCw className="h-5 w-5 animate-spin mx-auto" />
          </div>
        ) : programs.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
            <p className="text-sm text-muted-foreground">No programs found. Seed data from Firestore console.</p>
          </div>
        ) : (
          programs.map((p) => (
            <div key={p.id} className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-soft">
              <div>
                <h3 className="font-display text-sm font-bold text-foreground">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.tagline}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm"><Pencil className="h-4 w-4" /></Button>
                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// ── Stats Tab ──────────────────────────────────────

function StatsTab() {
  const [stats, setStats] = useState<(DocumentData & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [editId, setEditId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    fetchCollection("impact_stats", fbOrderBy("sort_order")).then((data) => {
      setStats(data);
      setLoading(false);
    });
  }, []);

  const handleSave = async (id: string) => {
    try {
      await updateDocument("impact_stats", id, { value: editValue });
      setStats((prev) => prev.map((s) => (s.id === id ? { ...s, value: editValue } : s)));
      setEditId(null);
      toast.success("Stat updated!");
    } catch {
      toast.error("Failed to update stat.");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-foreground">Impact Statistics</h2>
      <p className="mt-1 text-sm text-muted-foreground">Update the live metrics displayed on your website.</p>

      <div className="mt-6 space-y-3">
        {loading ? (
          <div className="py-12 text-center text-muted-foreground">
            <RefreshCw className="h-5 w-5 animate-spin mx-auto" />
          </div>
        ) : (
          stats.map((stat) => (
            <div key={stat.id} className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-soft">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{stat.label}</p>
                {editId === stat.id ? (
                  <div className="mt-2 flex items-center gap-2">
                    <Input value={editValue} onChange={(e) => setEditValue(e.target.value)} className="max-w-xs" autoFocus />
                    <Button size="sm" onClick={() => handleSave(stat.id)}>
                      <CheckCircle2 className="h-4 w-4" /> Save
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => setEditId(null)}>Cancel</Button>
                  </div>
                ) : (
                  <p className="mt-1 text-2xl font-serif font-bold text-foreground">{stat.value}</p>
                )}
              </div>
              {editId !== stat.id && (
                <Button variant="ghost" size="sm" onClick={() => { setEditId(stat.id); setEditValue(stat.value); }}>
                  <Pencil className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// ── Donations Tab ──────────────────────────────────

function DonationsTab() {
  const [donations, setDonations] = useState<(DocumentData & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCollection("donations", fbOrderBy("created_at"), fbLimit(50)).then((data) => {
      setDonations(data);
      setLoading(false);
    });
  }, []);

  const statusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case "pending": return <Clock className="h-4 w-4 text-amber-600" />;
      case "failed": return <XCircle className="h-4 w-4 text-red-600" />;
      default: return null;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-foreground">Donation Ledger</h2>
      <p className="mt-1 text-sm text-muted-foreground">View all received donations and transaction records.</p>

      <div className="mt-6 overflow-x-auto">
        {loading ? (
          <div className="py-12 text-center text-muted-foreground">
            <RefreshCw className="h-5 w-5 animate-spin mx-auto" />
          </div>
        ) : donations.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
            <Heart className="h-8 w-8 text-muted-foreground/30 mx-auto" />
            <p className="mt-3 text-sm text-muted-foreground">No donations recorded yet.</p>
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <th className="pb-3 pr-4">Donor</th>
                <th className="pb-3 pr-4">Amount</th>
                <th className="pb-3 pr-4">Method</th>
                <th className="pb-3 pr-4">Status</th>
                <th className="pb-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((d) => (
                <tr key={d.id} className="border-b border-border/50">
                  <td className="py-3 pr-4">
                    <p className="font-medium text-foreground">{d.donor_name || "Anonymous"}</p>
                    <p className="text-xs text-muted-foreground">{d.donor_email}</p>
                  </td>
                  <td className="py-3 pr-4 font-serif font-bold text-foreground">
                    {d.currency === "NGN" ? "\u20A6" : "$"}
                    {(d.amount || 0).toLocaleString()}
                  </td>
                  <td className="py-3 pr-4 text-muted-foreground">{d.payment_method}</td>
                  <td className="py-3 pr-4">
                    <span className="inline-flex items-center gap-1.5">
                      {statusIcon(d.status)}
                      <span className="capitalize text-xs">{d.status}</span>
                    </span>
                  </td>
                  <td className="py-3 text-muted-foreground">
                    {d.created_at?.toDate ? d.created_at.toDate().toLocaleDateString() : "\u2014"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// ── Inquiries Tab ──────────────────────────────────

function InquiriesTab() {
  const [volunteers, setVolunteers] = useState<(DocumentData & { id: string })[]>([]);
  const [contacts, setContacts] = useState<(DocumentData & { id: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [subTab, setSubTab] = useState<"volunteers" | "contacts">("volunteers");

  useEffect(() => {
    Promise.all([
      fetchCollection("volunteer_inquiries", fbOrderBy("created_at")),
      fetchCollection("contact_inquiries", fbOrderBy("created_at")),
    ]).then(([v, c]) => {
      setVolunteers(v);
      setContacts(c);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-foreground">Inquiries</h2>
      <p className="mt-1 text-sm text-muted-foreground">Review volunteer applications and contact messages.</p>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => setSubTab("volunteers")}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            subTab === "volunteers" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary",
          )}
        >
          Volunteer Applications ({volunteers.length})
        </button>
        <button
          type="button"
          onClick={() => setSubTab("contacts")}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            subTab === "contacts" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary",
          )}
        >
          Contact Messages ({contacts.length})
        </button>
      </div>

      <div className="mt-6 space-y-3">
        {loading ? (
          <div className="py-12 text-center text-muted-foreground">
            <RefreshCw className="h-5 w-5 animate-spin mx-auto" />
          </div>
        ) : subTab === "volunteers" ? (
          volunteers.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
              <p className="text-sm text-muted-foreground">No volunteer applications yet.</p>
            </div>
          ) : (
            volunteers.map((v) => (
              <div key={v.id} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">{v.name}</p>
                    <p className="text-xs text-muted-foreground">{v.email} &middot; {v.phone}</p>
                  </div>
                  <span className={cn(
                    "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase",
                    v.status === "new" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700",
                  )}>
                    {v.status}
                  </span>
                </div>
                {v.motivation && (
                  <p className="mt-3 text-sm text-muted-foreground italic">&ldquo;{v.motivation}&rdquo;</p>
                )}
                <p className="mt-2 text-xs text-muted-foreground">
                  Location: {v.location || "N/A"} &middot; Applied:{" "}
                  {v.created_at?.toDate ? v.created_at.toDate().toLocaleDateString() : "\u2014"}
                </p>
              </div>
            ))
          )
        ) : contacts.length === 0 ? (
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
            <p className="text-sm text-muted-foreground">No contact messages yet.</p>
          </div>
        ) : (
          contacts.map((c) => (
            <div key={c.id} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-sm font-bold text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground">{c.email} &middot; {c.reason}</p>
                </div>
                <span className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase",
                  c.status === "new" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700",
                )}>
                  {c.status}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{c.message}</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Received: {c.created_at?.toDate ? c.created_at.toDate().toLocaleDateString() : "\u2014"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
