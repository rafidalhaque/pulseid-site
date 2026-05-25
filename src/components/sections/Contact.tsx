import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const CONTACT_EMAIL = "lab@insan.qzz.io";

export function Contact() {
  const subject = encodeURIComponent("PulseID — Request access");
  const body = encodeURIComponent(
    "Assalamu alaikum InsanLab,\n\nWe'd like to learn more about PulseID for our team.\n\nOrganization:\nTeam size:\nLocation:\nNotes:\n\nJazakum Allahu khairan.",
  );

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="rounded-2xl border border-border/60 bg-card/60 p-8 sm:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary">Get in touch</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Request access or ask a question.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              PulseID is offered to small offices and student organizations on an invite basis while
              we refine the system. Tell us about your team and we&apos;ll get back to you, in sha
              Allah.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`}>
                <Mail className="h-4 w-4" />
                Contact InsanLab
              </a>
            </Button>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
