const steps = [
  {
    n: "01",
    title: "Enroll a member",
    body: "An admin adds the member through the dashboard. Their device is enrolled and assigned a signed daily identifier.",
  },
  {
    n: "02",
    title: "Phone broadcasts quietly",
    body: "With the app open, the phone advertises a rotating BLE identifier. Nothing personal is broadcast — only a daily-rotating UUID that resets every 24 hours.",
  },
  {
    n: "03",
    title: "Reader detects and verifies",
    body: "The reader at the door listens for trusted identifiers. When a match is verified, the door unlocks.",
  },
  {
    n: "04",
    title: "Attendance is logged",
    body: "Each entry is recorded with a timestamp. Leaves and holidays are applied so reports reflect actual presence.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">How it works</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From the doorway to the dashboard.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Four small steps. Once set up, members don&apos;t have to think about it again.
          </p>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="bg-card/60 p-6">
              <span className="text-xs font-mono text-primary">{s.n}</span>
              <h3 className="mt-3 text-base font-medium text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
