import { jsxs, jsx } from "react/jsx-runtime";
import { a as SiteHeader, C as Contact, S as SiteFooter } from "./Contact-ClvTK5sS.js";
import "@tanstack/react-router";
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
        /* @__PURE__ */ jsx("h1", { className: "mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl", children: "A small R&D club." }),
        /* @__PURE__ */ jsxs("div", { className: "prose-invert mt-8 space-y-6 text-base leading-relaxed text-muted-foreground", children: [
          /* @__PURE__ */ jsx("p", { children: "InsanLab is an Islamic student-led research and development club. We build practical tools for our community — software that respects people's time, attention, and dignity." }),
          /* @__PURE__ */ jsx("p", { children: "PulseID grew out of a simple frustration: managing attendance and access for our own gatherings was tedious. Cards got lost. Sign-in sheets piled up. Commercial systems were either too expensive or designed for enterprises we are not. So we built what we needed, and made it available to teams like ours." }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-foreground", children: "What guides us" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-2 pl-5", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Modesty in design." }),
              " Useful before flashy. Clear before clever."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Respect for privacy." }),
              " Identifiers rotate daily; we collect the minimum needed."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Care for the user." }),
              " Members should not have to think about the system to use it."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Service over scale." }),
              " We support small teams well rather than chasing growth."
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { children: "If our work is useful to your team, we would be glad to hear from you." })
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
