import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — PulseID by InsanLab" },
      {
        name: "description",
        content:
          "PulseID is an ESP32-based access and attendance control system designed for office environments, developed by InsanLab.",
      },
    ],
  }),
});

function About() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/60 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-sm font-medium text-primary">About</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              PulseID
            </h1>
            <div className="prose-invert mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                PulseID is an ESP32-based access and attendance control system designed for office
                environments.
              </p>
              <p>
                It enables secure, low-cost, and customizable identity verification for entry
                management and attendance tracking using embedded hardware. Instead of relying on
                traditional biometric machines or proprietary systems, PulseID is built as a
                flexible and hackable alternative that can be adapted to different organizational
                needs.
              </p>
              <p>
                The system is designed around real-world constraints found in offices and small
                organizations: reliability, simplicity, and ease of deployment. It integrates
                hardware-level authentication with software-side logging to maintain accurate
                records of access events and attendance activity.
              </p>
              <p>
                PulseID is developed inside InsanLab as part of a broader effort to build practical
                infrastructure systems that replace closed, expensive, and inflexible tools with
                open and modular alternatives.
              </p>
              <p>
                This is an active project and continues to evolve as new features and deployment
                scenarios are tested.
              </p>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
