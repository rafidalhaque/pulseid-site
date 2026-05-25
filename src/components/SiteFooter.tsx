import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
        <div className="flex items-center gap-2">
          <Logo className="h-6 w-6 text-primary" />
          <div className="text-sm">
            <p className="font-medium text-foreground">PulseID</p>
            <p className="text-muted-foreground">
              A project by InsanLab
            </p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} InsanLab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}