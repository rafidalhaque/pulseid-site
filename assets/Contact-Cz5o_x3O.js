import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { l as logoUrl } from "./router-1xESc6v9.js";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Mail } from "lucide-react";
function Logo({ className }) {
  return /* @__PURE__ */ jsx("img", { src: logoUrl, alt: "PulseID Logo", className });
}
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
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function SiteHeader() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 text-foreground", children: [
      /* @__PURE__ */ jsx(Logo, { className: "h-7 w-7 text-primary" }),
      /* @__PURE__ */ jsx("span", { className: "text-base font-semibold tracking-tight", children: "PulseID" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-1 sm:gap-2", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          hash: "features",
          className: "hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block",
          children: "Features"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          hash: "how",
          className: "hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block",
          children: "How it works"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/about",
          className: "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
          activeProps: { className: "rounded-md px-3 py-2 text-sm text-foreground" },
          children: "About"
        }
      ),
      /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", className: "ml-1", children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Request access" }) })
    ] })
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border/60 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Logo, { className: "h-6 w-6 text-primary" }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "PulseID" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "A project by InsanLab" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " InsanLab. All rights reserved."
    ] })
  ] }) });
}
const CONTACT_EMAIL = "lab@insan.qzz.io";
function Contact() {
  const subject = encodeURIComponent("PulseID — Request access");
  const body = encodeURIComponent(
    "Assalamu alaikum InsanLab,\n\nWe'd like to learn more about PulseID for our team.\n\nOrganization:\nTeam size:\nLocation:\nNotes:\n\nJazakum Allahu khairan."
  );
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-20 sm:py-28", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/60 bg-card/60 p-8 sm:p-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-primary", children: "Get in touch" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl", children: "Request access or ask a question." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: "PulseID is offered to small offices and student organizations on an invite basis while we refine the system. Tell us about your team and we'll get back to you, in sha Allah." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", children: /* @__PURE__ */ jsxs("a", { href: `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, children: [
        /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
        "Contact InsanLab"
      ] }) }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: `mailto:${CONTACT_EMAIL}`,
          className: "text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline",
          children: CONTACT_EMAIL
        }
      )
    ] })
  ] }) }) });
}
export {
  Button as B,
  Contact as C,
  SiteFooter as S,
  SiteHeader as a,
  cn as c
};
