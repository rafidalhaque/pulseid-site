import { jsxs, jsx } from "react/jsx-runtime";
import { a as SiteHeader, C as Contact, S as SiteFooter } from "./Contact-BupkPi6q.js";
import "@tanstack/react-router";
import "./router-LF3w0CNF.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "lucide-react";
function About() {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col bg-background", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("section", { className: "border-b border-border/60 py-20 sm:py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4 sm:px-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary", children: "About" }),
        /* @__PURE__ */ jsx("h1", { className: "mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl", children: "PulseID" }),
        /* @__PURE__ */ jsxs("div", { className: "prose-invert mt-8 space-y-6 text-base leading-relaxed text-muted-foreground", children: [
          /* @__PURE__ */ jsx("p", { children: "PulseID is an ESP32-based access and attendance control system designed for office environments." }),
          /* @__PURE__ */ jsx("p", { children: "It enables secure, low-cost, and customizable identity verification for entry management and attendance tracking using embedded hardware. Instead of relying on traditional biometric machines or proprietary systems, PulseID is built as a flexible and hackable alternative that can be adapted to different organizational needs." }),
          /* @__PURE__ */ jsx("p", { children: "The system is designed around real-world constraints found in offices and small organizations: reliability, simplicity, and ease of deployment. It integrates hardware-level authentication with software-side logging to maintain accurate records of access events and attendance activity." }),
          /* @__PURE__ */ jsx("p", { children: "PulseID is developed inside InsanLab as part of a broader effort to build practical infrastructure systems that replace closed, expensive, and inflexible tools with open and modular alternatives." }),
          /* @__PURE__ */ jsx("p", { children: "This is an active project and continues to evolve as new features and deployment scenarios are tested." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  About as component
};
