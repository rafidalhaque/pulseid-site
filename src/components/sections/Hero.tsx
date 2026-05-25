import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.32 0.12 277 / 0.45), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Built by InsanLab
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Office access and attendance, through the phone in your pocket.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            PulseID uses Bluetooth Low Energy to recognize trusted team members as they arrive —
            unlocking entry and logging attendance automatically. No cards. No NFC taps. No queues
            at the door.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#contact">Request access</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#how">How it works</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="mx-auto aspect-square w-full max-w-md rounded-2xl border border-border/60 bg-card/50 p-8 shadow-xl">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 320 320"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Phone broadcasting a Bluetooth signal to a door reader"
    >
      <defs>
        <linearGradient id="phone-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.32 0.08 277)" />
          <stop offset="100%" stopColor="oklch(0.22 0.05 280)" />
        </linearGradient>
      </defs>

      {/* Door reader */}
      <rect
        x="220"
        y="100"
        width="60"
        height="120"
        rx="10"
        fill="oklch(0.22 0.04 280)"
        stroke="oklch(0.4 0.05 280)"
      />
      <circle cx="250" cy="140" r="8" fill="oklch(0.62 0.21 277)" />
      <rect x="232" y="165" width="36" height="6" rx="3" fill="oklch(0.35 0.05 280)" />
      <rect x="232" y="180" width="24" height="6" rx="3" fill="oklch(0.35 0.05 280)" />

      {/* Phone */}
      <rect
        x="50"
        y="70"
        width="90"
        height="180"
        rx="16"
        fill="url(#phone-grad)"
        stroke="oklch(0.45 0.07 277)"
      />
      <rect x="60" y="84" width="70" height="120" rx="6" fill="oklch(0.16 0.04 280)" />
      <circle cx="95" cy="225" r="6" fill="oklch(0.4 0.05 280)" />

      {/* PulseID icon inside phone */}
      <g
        transform="translate(82, 124)"
        stroke="oklch(0.7 0.18 277)"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="13" cy="13" r="3" fill="oklch(0.7 0.18 277)" stroke="none" />
        <path d="M13 5a8 8 0 0 1 8 8 M13 9a4 4 0 0 1 4 4" />
        <path d="M13 21a8 8 0 0 1-8-8 M13 17a4 4 0 0 1-4-4" opacity="0.6" />
      </g>

      {/* BLE waves */}
      <g stroke="oklch(0.62 0.21 277)" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M155 160 q 20 -25 0 -50" opacity="0.9" />
        <path d="M175 160 q 30 -35 0 -70" opacity="0.6" />
        <path d="M195 160 q 40 -45 0 -90" opacity="0.35" />
      </g>
    </svg>
  );
}
