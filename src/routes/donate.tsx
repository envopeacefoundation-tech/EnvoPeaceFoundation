import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Heart,
  Check,
  Copy,
  CheckCircle2,
  Shield,
  CreditCard,
  Banknote,
  Bitcoin,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Envo Peace and Development Foundation" },
      { name: "description", content: "Make a secure donation to support our programs. Accepts Naira (NGN), US Dollars (USD), and Cryptocurrency (BTC, USDT)." },
    ],
  }),
  component: DonatePage,
});

type Currency = "NGN" | "USD" | "CRYPTO";

const ngPresets = [5000, 10000, 25000, 50000, 100000];
const usdPresets = [25, 50, 100, 250, 500];
const symbol: Record<string, string> = { NGN: "\u20A6", USD: "$" };

const cryptoWallets = [
  {
    currency: "BTC",
    label: "Bitcoin",
    network: "Bitcoin Network",
    address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
  },
  {
    currency: "USDT",
    label: "Tether (TRC20)",
    network: "TRON Network",
    address: "TXyz1234abcd5678efgh9012ijkl3456mnop",
  },
  {
    currency: "USDT",
    label: "Tether (ERC20)",
    network: "Ethereum Network",
    address: "0x1234567890abcdef1234567890abcdef12345678",
  },
];

function impactFor(amount: number, currency: string): string {
  const usd =
    currency === "USD"
      ? amount
      : currency === "NGN"
        ? amount / 1500
        : amount;
  if (usd >= 250)
    return "Sponsors a full month of youth skills training for one beneficiary.";
  if (usd >= 100)
    return "Provides essential healthcare supplies for an entire family for a month.";
  if (usd >= 50)
    return "Funds educational support — books, uniforms, and fees — for a child.";
  if (usd >= 25)
    return "Delivers a community outreach kit with food and basic supplies to a family.";
  if (usd > 0) return "Every gift counts. Thank you for standing with us.";
  return "Pick an amount to see the impact your gift will make.";
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Address copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy. Please copy manually.");
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-green-600" /> Copied
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" /> Copy
        </>
      )}
    </button>
  );
}

function DonatePage() {
  const [currency, setCurrency] = useState<Currency>("NGN");
  const [ngAmount, setNgAmount] = useState(10000);
  const [usdAmount, setUsdAmount] = useState(50);
  const [ngCustom, setNgCustom] = useState("");
  const [usdCustom, setUsdCustom] = useState("");

  const currentAmount = currency === "NGN" ? ngAmount : usdAmount;
  const currentSymbol = symbol[currency] || "$";

  const formatted = useMemo(
    () =>
      `${currentSymbol}${currentAmount.toLocaleString()}`,
    [currentSymbol, currentAmount],
  );

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" />
        <div className="mx-auto max-w-5xl px-5 md:px-8 text-center text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
            <Heart className="h-3.5 w-3.5" /> Make a Donation
          </span>
          <h1 className="mt-6 text-4xl font-serif font-bold leading-tight sm:text-5xl md:text-6xl">
            Your Gift, Multiplied
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80 md:text-xl">
            100% of every donation goes directly to our programs. Choose your
            currency and see the impact your generosity creates.
          </p>
        </div>
      </section>

      {/* ── Trust Signals ────────────────────────────── */}
      <section className="py-8 border-b border-border">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" /> Secure Checkout
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> 100% to Programs
            </span>
            <span className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-primary" /> Tax Deductible
            </span>
          </div>
        </div>
      </section>

      {/* ── Donation Widget ──────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          {/* Currency Tabs */}
          <div className="flex justify-center">
            <div className="inline-flex rounded-full border border-border bg-secondary p-1">
              {(
                [
                  { key: "NGN" as Currency, label: "NGN (\u20A6)", icon: Banknote },
                  { key: "USD" as Currency, label: "USD ($)", icon: CreditCard },
                  { key: "CRYPTO" as Currency, label: "Crypto", icon: Bitcoin },
                ] as const
              ).map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setCurrency(key)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                    currency === key
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* NGN Tab */}
          {currency === "NGN" && (
            <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-card md:p-10">
              <div className="grid gap-8 md:grid-cols-5">
                <div className="md:col-span-3">
                  <h2 className="text-xl font-serif font-bold text-foreground">
                    Donate in Naira
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Powered by Paystack — secure, instant checkout.
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-5">
                    {ngPresets.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => {
                          setNgAmount(p);
                          setNgCustom("");
                        }}
                        className={cn(
                          "rounded-xl border-2 px-3 py-3 text-sm font-bold transition-all",
                          ngAmount === p && !ngCustom
                            ? "border-primary bg-primary-soft text-primary-deep"
                            : "border-border bg-background text-foreground hover:border-primary/40",
                        )}
                      >
                        \u20A6{p.toLocaleString()}
                      </button>
                    ))}
                  </div>

                  <label className="mt-5 block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Custom Amount
                    </span>
                    <div className="mt-1.5 flex items-center gap-2 rounded-xl border-2 border-border bg-background px-3 focus-within:border-primary">
                      <span className="text-base font-bold text-muted-foreground">
                        \u20A6
                      </span>
                      <Input
                        type="number"
                        inputMode="numeric"
                        min={100}
                        value={ngCustom}
                        onChange={(e) => {
                          const v = e.target.value;
                          setNgCustom(v);
                          const n = Number(v);
                          if (!Number.isNaN(n) && n > 0) setNgAmount(n);
                        }}
                        placeholder="Enter amount"
                        className="border-0 bg-transparent px-0 text-base font-semibold shadow-none focus-visible:ring-0"
                      />
                    </div>
                  </label>

                  <div className="mt-5 rounded-xl bg-accent-soft/70 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/80">
                      Impact of your \u20A6{ngAmount.toLocaleString()} gift
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {impactFor(ngAmount, "NGN")}
                    </p>
                  </div>

                  <Button variant="hero" size="xl" className="mt-5 w-full">
                    <Heart className="h-4 w-4" /> Donate \u20A6{ngAmount.toLocaleString()}
                  </Button>
                  <p className="mt-2 text-center text-[11px] text-muted-foreground">
                    You will be redirected to Paystack secure checkout.
                  </p>
                </div>

                <div className="hidden md:flex md:col-span-2 flex-col items-center justify-center rounded-2xl bg-secondary/50 p-6 text-center">
                  <Heart className="h-12 w-12 text-primary/40" />
                  <h3 className="mt-4 text-lg font-serif font-bold text-foreground">
                    Every Naira Counts
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Your donation directly supports families, funds education,
                    and delivers healthcare to communities in need.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* USD Tab */}
          {currency === "USD" && (
            <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-card md:p-10">
              <div className="grid gap-8 md:grid-cols-5">
                <div className="md:col-span-3">
                  <h2 className="text-xl font-serif font-bold text-foreground">
                    Donate in US Dollars
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Powered by Stripe — international credit/debit card checkout.
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-5">
                    {usdPresets.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => {
                          setUsdAmount(p);
                          setUsdCustom("");
                        }}
                        className={cn(
                          "rounded-xl border-2 px-3 py-3 text-sm font-bold transition-all",
                          usdAmount === p && !usdCustom
                            ? "border-primary bg-primary-soft text-primary-deep"
                            : "border-border bg-background text-foreground hover:border-primary/40",
                        )}
                      >
                        ${p.toLocaleString()}
                      </button>
                    ))}
                  </div>

                  <label className="mt-5 block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Custom Amount
                    </span>
                    <div className="mt-1.5 flex items-center gap-2 rounded-xl border-2 border-border bg-background px-3 focus-within:border-primary">
                      <span className="text-base font-bold text-muted-foreground">$</span>
                      <Input
                        type="number"
                        inputMode="numeric"
                        min={1}
                        value={usdCustom}
                        onChange={(e) => {
                          const v = e.target.value;
                          setUsdCustom(v);
                          const n = Number(v);
                          if (!Number.isNaN(n) && n > 0) setUsdAmount(n);
                        }}
                        placeholder="Enter amount"
                        className="border-0 bg-transparent px-0 text-base font-semibold shadow-none focus-visible:ring-0"
                      />
                    </div>
                  </label>

                  <div className="mt-5 rounded-xl bg-accent-soft/70 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-foreground/80">
                      Impact of your ${usdAmount.toLocaleString()} gift
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {impactFor(usdAmount, "USD")}
                    </p>
                  </div>

                  <Button variant="hero" size="xl" className="mt-5 w-full">
                    <Heart className="h-4 w-4" /> Donate ${usdAmount.toLocaleString()}
                  </Button>
                  <p className="mt-2 text-center text-[11px] text-muted-foreground">
                    You will be redirected to Stripe secure checkout.
                  </p>
                </div>

                <div className="hidden md:flex md:col-span-2 flex-col items-center justify-center rounded-2xl bg-secondary/50 p-6 text-center">
                  <Heart className="h-12 w-12 text-primary/40" />
                  <h3 className="mt-4 text-lg font-serif font-bold text-foreground">
                    International Giving
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    Support from anywhere in the world. Your USD donation goes
                    further in communities where every dollar makes a real
                    difference.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Crypto Tab */}
          {currency === "CRYPTO" && (
            <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-card md:p-10">
              <div className="text-center mb-8">
                <h2 className="text-xl font-serif font-bold text-foreground">
                  Donate with Cryptocurrency
                </h2>
                <p className="mt-1 text-sm text-muted-foreground max-w-lg mx-auto">
                  Send Bitcoin or USDT directly to our wallet addresses. After
                  sending, please email us at{" "}
                  <span className="font-medium text-foreground">hello@envopeace.org</span>{" "}
                  with your transaction reference for a receipt.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {cryptoWallets.map((w, i) => (
                  <div
                    key={`${w.currency}-${w.network}`}
                    className="rounded-2xl border border-border bg-secondary/30 p-5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-soft">
                        <Bitcoin className="h-4 w-4 text-primary-deep" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-foreground">
                          {w.label}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {w.network}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-background border border-border p-3">
                      <p className="text-[11px] font-mono text-muted-foreground break-all leading-relaxed">
                        {w.address}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <CopyButton text={w.address} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-accent-soft/70 p-4 text-center">
                <p className="text-sm text-foreground">
                  <strong>Important:</strong> Please only send {cryptoWallets.map((w) => w.currency).filter((v, i, a) => a.indexOf(v) === i).join(", ")} to the
                  respective addresses above. Sending other cryptocurrencies
                  may result in permanent loss of funds.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Impact Summary ───────────────────────────── */}
      <section className="bg-secondary/50 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold text-foreground sm:text-3xl">
              Where Your Donation Goes
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Outreach Programs",
                percentage: "35%",
                desc: "Food, hygiene kits, and crisis response for vulnerable families.",
              },
              {
                title: "Educational Support",
                percentage: "25%",
                desc: "Scholarships, learning materials, and mentorship for children.",
              },
              {
                title: "Healthcare Assistance",
                percentage: "20%",
                desc: "Free medical outreaches, medications, and health education.",
              },
              {
                title: "Youth Empowerment",
                percentage: "20%",
                desc: "Vocational training, leadership programs, and startup grants.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
                <p className="text-2xl font-serif font-bold text-primary">
                  {item.percentage}
                </p>
                <h3 className="mt-1 font-display text-sm font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
