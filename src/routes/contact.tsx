import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { Reveal } from "@/components/site/reveal";
import { Shell } from "@/components/site/shell";
import { SITE, SOCIALS } from "@/data/content";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — chAs" },
      {
        name: "description",
        content:
          "Write to Chidalu Silas Ogbala at chastechnologiesllc@gmail.com, or use the form. Ebonyi State, Nigeria.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <Shell>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 pt-10 sm:px-8 sm:pt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="self-start lg:sticky lg:top-28">
          <p className="font-display text-xs font-bold uppercase tracking-[0.19em] text-brand">Contact · Open to a good conversation</p>
          <h1 className="mt-4 max-w-xl font-display text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.07em]">
            Have something worth building?
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            I read this inbox myself. Use the form or reach me directly. I don’t have a team sitting behind it, and I won’t claim a message was delivered unless the form service confirms it.
          </p>
          <dl className="mt-8 grid gap-5 border-t border-line pt-6">
            <div>
              <dt className="font-display text-[0.67rem] font-bold uppercase tracking-[0.16em] text-muted">Email</dt>
              <dd className="mt-1"><a className="font-semibold underline decoration-line underline-offset-4 hover:text-brand" href={`mailto:${SITE.email}`}>{SITE.email}</a></dd>
            </div>
            <div>
              <dt className="font-display text-[0.67rem] font-bold uppercase tracking-[0.16em] text-muted">Phone</dt>
              <dd className="mt-1"><a className="font-semibold underline decoration-line underline-offset-4 hover:text-brand" href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></dd>
            </div>
            <div>
              <dt className="font-display text-[0.67rem] font-bold uppercase tracking-[0.16em] text-muted">Based in</dt>
              <dd className="mt-1 font-semibold">{SITE.location}</dd>
            </div>
          </dl>
          <ul className="mt-7 flex flex-wrap gap-2">
            {SOCIALS.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-elev px-4 font-display text-sm font-semibold hover:border-brand"
                >
                  {social.label} <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-[2rem] border border-line bg-elev p-5 shadow-[0_24px_72px_rgba(0,0,0,0.06)] sm:p-8">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">Send a note</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight">Tell me what you’re thinking.</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">The form uses FormSubmit. The status below the button tells you whether the service accepted your message.</p>
            <div className="mt-6"><ContactForm /></div>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}
