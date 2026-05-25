import { Building2, Users, FlaskConical } from "lucide-react";

const groups = [
  {
    icon: Building2,
    title: "Small offices and startups",
    body: "Teams of 5–25 with a fixed office entrance who want reliable access and attendance without enterprise hardware contracts.",
  },
  {
    icon: Users,
    title: "Co-working spaces",
    body: "Shared workspaces that need automated entry logging and attendance tracking across a consistent member base.",
  },
  {
    icon: FlaskConical,
    title: "University labs and research rooms",
    body: "Fixed academic spaces with a responsible person on-site to manage setup and maintenance.",
  },
];

export function Audience() {
  return (
    <section className="border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Built for</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Small groups who value their time.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="rounded-xl border border-border/60 bg-card/40 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/40 text-primary">
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-foreground">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
