import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn, B as Button } from "./router-CnQ9fIJv.mjs";
import { I as Input } from "./input-Drw0RNnX.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { H as Heart, k as Shield, j as CircleCheck, B as Banknote, w as CreditCard, x as Bitcoin, f as Check, y as Copy } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const ngPresets = [5e3, 1e4, 25e3, 5e4, 1e5];
const usdPresets = [25, 50, 100, 250, 500];
const symbol = {
  NGN: "₦",
  USD: "$"
};
const cryptoWallets = [{
  currency: "BTC",
  label: "Bitcoin",
  network: "Bitcoin Network",
  address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
}, {
  currency: "USDT",
  label: "Tether (TRC20)",
  network: "TRON Network",
  address: "TXyz1234abcd5678efgh9012ijkl3456mnop"
}, {
  currency: "USDT",
  label: "Tether (ERC20)",
  network: "Ethereum Network",
  address: "0x1234567890abcdef1234567890abcdef12345678"
}];
function impactFor(amount, currency) {
  const usd = currency === "USD" ? amount : currency === "NGN" ? amount / 1500 : amount;
  if (usd >= 250) return "Sponsors a full month of youth skills training for one beneficiary.";
  if (usd >= 100) return "Provides essential healthcare supplies for an entire family for a month.";
  if (usd >= 50) return "Funds educational support — books, uniforms, and fees — for a child.";
  if (usd >= 25) return "Delivers a community outreach kit with food and basic supplies to a family.";
  if (usd > 0) return "Every gift counts. Thank you for standing with us.";
  return "Pick an amount to see the impact your gift will make.";
}
function CopyButton({
  text
}) {
  const [copied, setCopied] = reactExports.useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Address copied to clipboard!");
      setTimeout(() => setCopied(false), 2e3);
    } catch {
      toast.error("Failed to copy. Please copy manually.");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handleCopy, className: "inline-flex items-center gap-1.5 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary", children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-green-600" }),
    " Copied"
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3 w-3" }),
    " Copy"
  ] }) });
}
function DonatePage() {
  const [currency, setCurrency] = reactExports.useState("NGN");
  const [ngAmount, setNgAmount] = reactExports.useState(1e4);
  const [usdAmount, setUsdAmount] = reactExports.useState(50);
  const [ngCustom, setNgCustom] = reactExports.useState("");
  const [usdCustom, setUsdCustom] = reactExports.useState("");
  const currentAmount = currency === "NGN" ? ngAmount : usdAmount;
  const currentSymbol = symbol[currency] || "$";
  reactExports.useMemo(() => `${currentSymbol}${currentAmount.toLocaleString()}`, [currentSymbol, currentAmount]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-5 md:px-8 text-center text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-3.5 w-3.5" }),
          " Make a Donation"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 text-4xl font-serif font-bold leading-tight sm:text-5xl md:text-6xl", children: "Your Gift, Multiplied" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80 md:text-xl", children: "100% of every donation goes directly to our programs. Choose your currency and see the impact your generosity creates." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-8 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl px-5 md:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-primary" }),
        " Secure Checkout"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary" }),
        " 100% to Programs"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 text-primary" }),
        " Tax Deductible"
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-5 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-full border border-border bg-secondary p-1", children: [{
        key: "NGN",
        label: "NGN (₦)",
        icon: Banknote
      }, {
        key: "USD",
        label: "USD ($)",
        icon: CreditCard
      }, {
        key: "CRYPTO",
        label: "Crypto",
        icon: Bitcoin
      }].map(({
        key,
        label,
        icon: Icon
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setCurrency(key), className: cn("inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all", currency === key ? "bg-primary text-primary-foreground shadow-soft" : "text-muted-foreground hover:text-foreground"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
        label
      ] }, key)) }) }),
      currency === "NGN" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 rounded-3xl border border-border bg-card p-6 shadow-card md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-serif font-bold text-foreground", children: "Donate in Naira" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Powered by Paystack — secure, instant checkout." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-5", children: ngPresets.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
            setNgAmount(p);
            setNgCustom("");
          }, className: cn("rounded-xl border-2 px-3 py-3 text-sm font-bold transition-all", ngAmount === p && !ngCustom ? "border-primary bg-primary-soft text-primary-deep" : "border-border bg-background text-foreground hover:border-primary/40"), children: [
            "\\u20A6",
            p.toLocaleString()
          ] }, p)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-5 block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Custom Amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center gap-2 rounded-xl border-2 border-border bg-background px-3 focus-within:border-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold text-muted-foreground", children: "\\u20A6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", inputMode: "numeric", min: 100, value: ngCustom, onChange: (e) => {
                const v = e.target.value;
                setNgCustom(v);
                const n = Number(v);
                if (!Number.isNaN(n) && n > 0) setNgAmount(n);
              }, placeholder: "Enter amount", className: "border-0 bg-transparent px-0 text-base font-semibold shadow-none focus-visible:ring-0" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-xl bg-accent-soft/70 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-wider text-accent-foreground/80", children: [
              "Impact of your \\u20A6",
              ngAmount.toLocaleString(),
              " gift"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-medium text-foreground", children: impactFor(ngAmount, "NGN") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "xl", className: "mt-5 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }),
            " Donate \\u20A6",
            ngAmount.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-[11px] text-muted-foreground", children: "You will be redirected to Paystack secure checkout." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex md:col-span-2 flex-col items-center justify-center rounded-2xl bg-secondary/50 p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-12 w-12 text-primary/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-serif font-bold text-foreground", children: "Every Naira Counts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: "Your donation directly supports families, funds education, and delivers healthcare to communities in need." })
        ] })
      ] }) }),
      currency === "USD" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 rounded-3xl border border-border bg-card p-6 shadow-card md:p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 md:grid-cols-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-serif font-bold text-foreground", children: "Donate in US Dollars" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Powered by Stripe — international credit/debit card checkout." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-3 gap-2.5 sm:grid-cols-5", children: usdPresets.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
            setUsdAmount(p);
            setUsdCustom("");
          }, className: cn("rounded-xl border-2 px-3 py-3 text-sm font-bold transition-all", usdAmount === p && !usdCustom ? "border-primary bg-primary-soft text-primary-deep" : "border-border bg-background text-foreground hover:border-primary/40"), children: [
            "$",
            p.toLocaleString()
          ] }, p)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mt-5 block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Custom Amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center gap-2 rounded-xl border-2 border-border bg-background px-3 focus-within:border-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-bold text-muted-foreground", children: "$" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", inputMode: "numeric", min: 1, value: usdCustom, onChange: (e) => {
                const v = e.target.value;
                setUsdCustom(v);
                const n = Number(v);
                if (!Number.isNaN(n) && n > 0) setUsdAmount(n);
              }, placeholder: "Enter amount", className: "border-0 bg-transparent px-0 text-base font-semibold shadow-none focus-visible:ring-0" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-xl bg-accent-soft/70 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold uppercase tracking-wider text-accent-foreground/80", children: [
              "Impact of your $",
              usdAmount.toLocaleString(),
              " gift"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-medium text-foreground", children: impactFor(usdAmount, "USD") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "hero", size: "xl", className: "mt-5 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }),
            " Donate $",
            usdAmount.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-[11px] text-muted-foreground", children: "You will be redirected to Stripe secure checkout." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex md:col-span-2 flex-col items-center justify-center rounded-2xl bg-secondary/50 p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-12 w-12 text-primary/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-serif font-bold text-foreground", children: "International Giving" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: "Support from anywhere in the world. Your USD donation goes further in communities where every dollar makes a real difference." })
        ] })
      ] }) }),
      currency === "CRYPTO" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-3xl border border-border bg-card p-6 shadow-card md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-serif font-bold text-foreground", children: "Donate with Cryptocurrency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground max-w-lg mx-auto", children: [
            "Send Bitcoin or USDT directly to our wallet addresses. After sending, please email us at",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "hello@envopeace.org" }),
            " ",
            "with your transaction reference for a receipt."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-3", children: cryptoWallets.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-secondary/30 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bitcoin, { className: "h-4 w-4 text-primary-deep" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: w.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: w.network })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-lg bg-background border border-border p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-mono text-muted-foreground break-all leading-relaxed", children: w.address }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CopyButton, { text: w.address }) })
        ] }, `${w.currency}-${w.network}`)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-xl bg-accent-soft/70 p-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Important:" }),
          " Please only send ",
          cryptoWallets.map((w) => w.currency).filter((v, i, a) => a.indexOf(v) === i).join(", "),
          " to the respective addresses above. Sending other cryptocurrencies may result in permanent loss of funds."
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/50 py-16 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-5 md:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-serif font-bold text-foreground sm:text-3xl", children: "Where Your Donation Goes" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: [{
        title: "Outreach Programs",
        percentage: "35%",
        desc: "Food, hygiene kits, and crisis response for vulnerable families."
      }, {
        title: "Educational Support",
        percentage: "25%",
        desc: "Scholarships, learning materials, and mentorship for children."
      }, {
        title: "Healthcare Assistance",
        percentage: "20%",
        desc: "Free medical outreaches, medications, and health education."
      }, {
        title: "Youth Empowerment",
        percentage: "20%",
        desc: "Vocational training, leadership programs, and startup grants."
      }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-serif font-bold text-primary", children: item.percentage }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-sm font-bold text-foreground", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-xs text-muted-foreground leading-relaxed", children: item.desc })
      ] }, item.title)) })
    ] }) })
  ] });
}
export {
  DonatePage as component
};
