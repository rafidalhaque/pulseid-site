import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bluetooth,
  ClipboardCheck,
  KeyRound,
  RefreshCw,
  CalendarDays,
  LayoutDashboard,
} from "lucide-react";

const features = [
  {
    icon: Bluetooth,
    title: "Passive BLE detection",
    body: "Members are recognized as they approach the door. Open the app once, tap broadcast. PulseID handles the rest.",
  },
  {
    icon: KeyRound,
    title: "No cards or NFC",
    body: "Replace lost cards and fragile readers with the phone every member already carries.",
  },
  {
    icon: ClipboardCheck,
    title: "Automatic attendance",
    body: "Every entry is timestamped and recorded — no sign-in sheets, no manual logs.",
  },
  {
    icon: RefreshCw,
    title: "Daily rotating UUIDs",
    body: "Each device broadcasts a fresh, signed identifier every day to prevent spoofing or replay.",
  },
  {
    icon: CalendarDays,
    title: "Leave & holiday management",
    body: "Approved leaves and holiday calendars are reflected in attendance reports automatically.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin dashboard",
    body: "Manage members, review entries, export reports, and configure access from one place.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-border/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-primary">Capabilities</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Quiet technology that does its job.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            PulseID is intentionally minimal. It focuses on doing access and attendance well —
            without surveillance, accounts to manage, or features your team won&apos;t use.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="border-border/60 bg-card/60">
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/40 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-4 text-lg">{f.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{f.body}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
