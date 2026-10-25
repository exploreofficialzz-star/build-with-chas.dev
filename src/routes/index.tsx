import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { HeroVisual } from "@/components/site/hero-visual";
import { Shell, useTheme } from "@/components/site/shell";
import { NOTES, PROJECTS, SITE, SKILLS } from "@/data/content";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "chAs — Chidalu Silas Ogbala" },
      {
        name: "description",
        content:
          "Personal site of Chidalu Silas Ogbala (chAs). Apps, games, enV, and the company Rumuo. Built from Ebonyi State.",
      },
    ],
  }),
});

function Home() {
  const { dark } = useTheme();
  const featured = PROJECTS.filter((project) => project.featured);

  return (
    <Shell>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 lg:grid-cols-12 lg:pt-16">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {SITE.brand} · {SITE.location}
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl">
            I build what I cannot stop thinking about.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            I am {SITE.legal}. People say {SITE.name}. The name is ch from Chidalu, a capital A from Aloka —
            the person I was named after — and S from Silas. {SITE.company} is the company. This brand is
            the record of how I got here.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="inline-flex min-h-12 items-center rounded-full bg-brand px-6 font-display text-sm font-bold text-brand-fg"
            >
              Explore the work
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center rounded-full border border-line px-6 font-display text-sm font-bold"
            >
              Contact me
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-5">
          <HeroVisual dark={dark} />
        </div>
      </section>

      <section className="border-y border-line">
        <dl className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Born", SITE.born],
            ["From", "Nwangwu, Ebonyi"],
            ["Family", "First of eight"],
            ["Machine", "A phone, not a GPU"],
          ].map(([label, value]) => (
            <div key={label} className="bg-bg px-5 py-6">
              <dt className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                {label}
              </dt>
              <dd className="mt-2 font-display text-lg font-bold">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">Selected work</h2>
          <p className="mt-3 text-muted">
            Real repositories and one Play listing. No invented downloads, revenue, or awards.
          </p>
        </div>
        <ul className="grid gap-4 lg:col-span-8">
          {featured.map((project) => (
            <li key={project.slug}>
              <Link
                to="/work/$slug"
                params={{ slug: project.slug }}
                className="group grid gap-3 rounded-3xl border border-line bg-elev p-5 transition-colors hover:border-brand sm:grid-cols-[8rem_1fr_auto] sm:items-center"
              >
                <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  {project.status}
                </p>
                <div>
                  <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                  <p className="mt-1 text-muted">{project.summary}</p>
                </div>
                <ArrowUpRight className="size-5 text-muted group-hover:text-brand" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-16 lg:grid-cols-2">
        <img
          src="/media/portrait.jpg"
          alt="Chidalu Silas Ogbala, a close portrait"
          className="aspect-[4/5] w-full rounded-3xl object-cover"
        />
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            What I do
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight">
            A founder still paying for the lesson.
          </h2>
          <p className="mt-4 text-muted">
            {SITE.company} is where I am putting the company: AI, and the other products I can actually
            finish. {SITE.brand} is the name on the personal work, the YouTube channel, and the FinReels
            listing. I help people who were told they needed a background they never had. That is why enV
            exists.
          </p>
          <ul className="mt-6 grid gap-4">
            {SKILLS.slice(0, 3).map((skill) => (
              <li key={skill.title} className="border-t border-line pt-4">
                <h3 className="font-display font-bold">{skill.title}</h3>
                <p className="mt-1 text-muted">{skill.copy}</p>
              </li>
            ))}
          </ul>
          <Link to="/story" className="mt-6 inline-flex font-display font-bold text-brand">
            Read the full story
          </Link>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-extrabold tracking-tight">Notes</h2>
            <Link to="/notes" className="font-display text-sm font-bold text-brand">
              All notes
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {NOTES.slice(0, 3).map((note) => (
              <li key={note.slug}>
                <Link
                  to="/notes/$slug"
                  params={{ slug: note.slug }}
                  className="flex h-full flex-col rounded-3xl border border-line p-5 hover:border-brand"
                >
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {note.kicker}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold">{note.title}</h3>
                  <p className="mt-2 text-muted">{note.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Shell>
  );
}
