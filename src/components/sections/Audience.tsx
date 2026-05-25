import { Building2, BookOpen, Users } from "lucide-react";

const groups = [
  {
    icon: Building2,
    title: "Small offices",
    body: "Teams of 5–50 who want reliable access and attendance without enterprise hardware contracts.",
  },
  {
    icon: BookOpen,
    title: "Islamic student organizations",
    body: "Halaqahs, study circles, and campus clubs that need quiet, dignified attendance tracking.",
  },
  {
    icon: Users,
    title: "Local community teams",
    body: "Volunteer groups and project teams run on modest budgets.",
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
