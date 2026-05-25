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
          "PulseID is built by InsanLab, an Islamic student-led R&D club. Learn about the people and principles behind the project.",
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
              A small R&amp;D club.
            </h1>
            <div className="prose-invert mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                InsanLab is an Islamic student-led research and development club. We build practical
                tools for our community — software that respects people&apos;s time, attention, and
                dignity.
              </p>
              <p>
                PulseID grew out of a simple frustration: managing attendance and access for our own
                gatherings was tedious. Cards got lost. Sign-in sheets piled up. Commercial systems
                were either too expensive or designed for enterprises we are not. So we built what
                we needed, and made it available to teams like ours.
              </p>
              <h2 className="text-xl font-semibold text-foreground">What guides us</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="text-foreground">Modesty in design.</span> Useful before flashy.
                  Clear before clever.
                </li>
                <li>
                  <span className="text-foreground">Respect for privacy.</span> Identifiers rotate
                  daily; we collect the minimum needed.
                </li>
                <li>
                  <span className="text-foreground">Care for the user.</span> Members should not
                  have to think about the system to use it.
                </li>
                <li>
                  <span className="text-foreground">Service over scale.</span> We support small
                  teams well rather than chasing growth.
                </li>
              </ul>
              <p>If our work is useful to your team, we would be glad to hear from you.</p>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
