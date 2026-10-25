import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/contact-form";
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
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-2">
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            If the work is serious, write.
          </h1>
          <p className="mt-4 text-muted">
            I read the mail myself. I do not have a team sitting on this inbox. LinkedIn and Instagram
            are not listed because you have not sent me those URLs yet.
          </p>
          <dl className="mt-8 grid gap-4">
            <div>
              <dt className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Email
              </dt>
              <dd className="mt-1">
                <a className="underline decoration-line underline-offset-4" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Phone
              </dt>
              <dd className="mt-1">
                <a className="underline decoration-line underline-offset-4" href={`tel:${SITE.phoneTel}`}>
                  {SITE.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Where
              </dt>
              <dd className="mt-1">{SITE.location}</dd>
            </div>
          </dl>
          <ul className="mt-6 flex flex-wrap gap-3">
            {SOCIALS.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-line px-4 font-display text-sm font-bold"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-line bg-elev p-5 sm:p-8">
          <h2 className="font-display text-2xl font-bold">Send a note</h2>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </Shell>
  );
}
