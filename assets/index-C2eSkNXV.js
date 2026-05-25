import { jsxs, jsx } from "react/jsx-runtime";
import { B as Button, c as cn, a as SiteHeader, C as Contact, S as SiteFooter } from "./Contact-CrdJR5nY.js";
import * as React from "react";
import { Bluetooth, KeyRound, ClipboardCheck, RefreshCw, CalendarDays, LayoutDashboard, Building2, Users, Microscope } from "lucide-react";
import "@tanstack/react-router";
import "./router-DLGl99sI.js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-border/60", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute inset-0 -z-10",
        style: {
          backgroundImage: "radial-gradient(60% 50% at 50% 0%, oklch(0.32 0.12 277 / 0.45), transparent 70%)"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
          "Built by InsanLab"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "mt-6 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl", children: "Office access and attendance, starting from the palm of your hand." }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg", children: "PulseID uses Bluetooth Low Energy to recognize trusted team members as they arrive — unlocking entry and logging attendance when the app is broadcasting. No cards. No NFC taps." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Request access" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsx("a", { href: "#how", children: "How it works" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "mx-auto aspect-square w-full max-w-md rounded-2xl border border-border/60 bg-card/50 p-8 shadow-xl", children: /* @__PURE__ */ jsx(HeroIllustration, {}) }) })
    ] })
  ] });
}
function HeroIllustration() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 320 320",
      className: "h-full w-full",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      role: "img",
      "aria-label": "Phone broadcasting a Bluetooth signal to a door reader",
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "phone-grad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.32 0.08 277)" }),
          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.22 0.05 280)" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "220",
            y: "100",
            width: "60",
            height: "120",
            rx: "10",
            fill: "oklch(0.22 0.04 280)",
            stroke: "oklch(0.4 0.05 280)"
          }
        ),
        /* @__PURE__ */ jsx("circle", { cx: "250", cy: "140", r: "8", fill: "oklch(0.62 0.21 277)" }),
        /* @__PURE__ */ jsx("rect", { x: "232", y: "165", width: "36", height: "6", rx: "3", fill: "oklch(0.35 0.05 280)" }),
        /* @__PURE__ */ jsx("rect", { x: "232", y: "180", width: "24", height: "6", rx: "3", fill: "oklch(0.35 0.05 280)" }),
        /* @__PURE__ */ jsx(
          "rect",
          {
            x: "50",
            y: "70",
            width: "90",
            height: "180",
            rx: "16",
            fill: "url(#phone-grad)",
            stroke: "oklch(0.45 0.07 277)"
          }
        ),
        /* @__PURE__ */ jsx("rect", { x: "60", y: "84", width: "70", height: "120", rx: "6", fill: "oklch(0.16 0.04 280)" }),
        /* @__PURE__ */ jsx("circle", { cx: "95", cy: "225", r: "6", fill: "oklch(0.4 0.05 280)" }),
        /* @__PURE__ */ jsxs(
          "g",
          {
            transform: "translate(82, 124)",
            stroke: "oklch(0.7 0.18 277)",
            strokeWidth: "2",
            strokeLinecap: "round",
            children: [
              /* @__PURE__ */ jsx("circle", { cx: "13", cy: "13", r: "3", fill: "oklch(0.7 0.18 277)", stroke: "none" }),
              /* @__PURE__ */ jsx("path", { d: "M13 5a8 8 0 0 1 8 8 M13 9a4 4 0 0 1 4 4" }),
              /* @__PURE__ */ jsx("path", { d: "M13 21a8 8 0 0 1-8-8 M13 17a4 4 0 0 1-4-4", opacity: "0.6" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("g", { stroke: "oklch(0.62 0.21 277)", strokeWidth: "2", fill: "none", strokeLinecap: "round", children: [
          /* @__PURE__ */ jsx("path", { d: "M155 160 q 20 -25 0 -50", opacity: "0.9" }),
          /* @__PURE__ */ jsx("path", { d: "M175 160 q 30 -35 0 -70", opacity: "0.6" }),
          /* @__PURE__ */ jsx("path", { d: "M195 160 q 40 -45 0 -90", opacity: "0.35" })
        ] })
      ]
    }
  );
}
const Card = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
const CardHeader = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
const features = [
  {
    icon: Bluetooth,
    title: "Active BLE broadcast",
    body: "Open the app and tap broadcast to unlock. PulseID recognizes your device as you approach the door."
  },
  {
    icon: KeyRound,
    title: "No cards or NFC",
    body: "Replace lost cards and fragile readers with the phone every member already carries."
  },
  {
    icon: ClipboardCheck,
    title: "Automatic attendance",
    body: "Every entry is timestamped and recorded — no sign-in sheets, no manual logs."
  },
  {
    icon: RefreshCw,
    title: "Daily rotating UUIDs",
    body: "Each device broadcasts a fresh, signed identifier every day to prevent spoofing or replay."
  },
  {
    icon: CalendarDays,
    title: "Leave & holiday management",
    body: "Approved leaves and holiday calendars are reflected in attendance reports automatically."
  },
  {
    icon: LayoutDashboard,
    title: "Admin dashboard",
    body: "Manage members, review entries, export reports, and configure access from one place."
  }
];
function Features() {
  return /* @__PURE__ */ jsx("section", { id: "features", className: "border-b border-border/60 py-20 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary", children: "Capabilities" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl", children: "Quiet technology that does its job." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-muted-foreground", children: "PulseID is intentionally minimal. It focuses on doing access and attendance well — without surveillance, accounts to manage, or features your team won't use." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: features.map((f) => /* @__PURE__ */ jsxs(Card, { className: "border-border/60 bg-card/60", children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-md bg-accent/40 text-primary", children: /* @__PURE__ */ jsx(f.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx(CardTitle, { className: "mt-4 text-lg", children: f.title }),
        /* @__PURE__ */ jsx(CardDescription, { className: "text-sm leading-relaxed", children: f.body })
      ] }),
      /* @__PURE__ */ jsx(CardContent, {})
    ] }, f.title)) })
  ] }) });
}
const steps = [
  {
    n: "01",
    title: "Enroll a member",
    body: "An admin adds the member through the dashboard. Their device is enrolled and assigned a signed daily identifier."
  },
  {
    n: "02",
    title: "Phone broadcasts quietly",
    body: "With the app open, the phone advertises a rotating BLE identifier. Nothing personal is broadcast — only a daily-rotating UUID that resets every 24 hours."
  },
  {
    n: "03",
    title: "Reader detects and verifies",
    body: "The reader at the door listens for trusted identifiers. When a match is verified, the door unlocks."
  },
  {
    n: "04",
    title: "Attendance is logged",
    body: "Each entry is recorded with a timestamp. Leaves and holidays are applied so reports reflect actual presence."
  }
];
function HowItWorks() {
  return /* @__PURE__ */ jsx("section", { id: "how", className: "border-b border-border/60 py-20 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary", children: "How it works" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl", children: "From the doorway to the dashboard." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-muted-foreground", children: "Four small steps. Reliable entry for every member, every time the app is open." })
    ] }),
    /* @__PURE__ */ jsx("ol", { className: "mt-12 grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4", children: steps.map((s) => /* @__PURE__ */ jsxs("li", { className: "bg-card/60 p-6", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs font-mono text-primary", children: s.n }),
      /* @__PURE__ */ jsx("h3", { className: "mt-3 text-base font-medium text-foreground", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.body })
    ] }, s.n)) })
  ] }) });
}
const groups = [
  {
    icon: Building2,
    title: "Small offices and startups",
    body: "Teams of 5–25 with a fixed office entrance who want reliable access and attendance without enterprise hardware contracts."
  },
  {
    icon: Users,
    title: "Co-working spaces",
    body: "Shared workspaces that need automated entry logging and attendance tracking across a consistent member base."
  },
  {
    icon: Microscope,
    title: "University labs and research rooms",
    body: "Fixed academic spaces with a responsible person on-site to manage setup and maintenance."
  }
];
function Audience() {
  return /* @__PURE__ */ jsx("section", { className: "border-b border-border/60 py-20 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary", children: "Built for" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl", children: "Small groups who value their time." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-3", children: groups.map((g) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border/60 bg-card/40 p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-md bg-accent/40 text-primary", children: /* @__PURE__ */ jsx(g.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-medium text-foreground", children: g.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: g.body })
    ] }, g.title)) })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col bg-background", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Features, {}),
      /* @__PURE__ */ jsx(HowItWorks, {}),
      /* @__PURE__ */ jsx(Audience, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  Index as component
};
