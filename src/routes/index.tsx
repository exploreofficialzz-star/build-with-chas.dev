import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { HeroVisual } from "@/components/site/hero-visual";
import { Reveal } from "@/components/site/reveal";
import { Shell } from "@/components/site/shell";
import { useTheme } from "@/components/site/theme-context";
import { NOTES, PROJECTS, SITE, SKILLS } from "@/data/content";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "chAs — Chidalu Silas Ogbala" },
      {
        name: "description",
        content:
          "Meet Chidalu Silas Ogbala (chAs), an independent builder from Ebonyi State, Nigeria, making apps, games, and tools for people with limited resources.",
      },
    ],
  }),
});

function Home() {
  const { dark } = useTheme();
  const featured = PROJECTS.filter((project) => project.featured).slice(0, 4);

  return (
    <Shell>
      <div className="overflow-hidden">
        <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pt-20">
          <Reveal className="order-2 lg:order-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-elev/80 px-3 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.13em] text-muted">
              <span className="size-2 rounded-full bg-brand" aria-hidden />
              Independent builder · {SITE.location}
            </p>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(3.25rem,8vw,6.9rem)] font-bold leading-[0.91] tracking-[-0.075em]">
              Curious enough to <span className="text-brand">open it up.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              I’m {SITE.legal}, known as chAs. I started with broken radios, sandals, and a charger I couldn’t make work. Now I build apps, games, and browser tools with the devices and resources I have.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="button-press inline-flex min-h-12 items-center gap-2 rounded-full bg-brand px-6 font-display text-sm font-bold text-brand-fg"
              >
                Explore my work <ArrowUpRight className="size-4" aria-hidden />
              </Link>
              <Link
                to="/story"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line bg-elev/70 px-6 font-display text-sm font-bold hover:border-brand"
              >
                Read the story <ArrowDownRight className="size-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line pt-5 text-sm text-muted">
              <span><strong className="font-display text-fg">ch</strong> from Chidalu</span>
              <span><strong className="font-display text-brand">A</strong> from Aloka</span>
              <span><strong className="font-display text-fg">S</strong> from Silas</span>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={100}>
            <div className="relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden rounded-[2rem] border border-line bg-chip p-2 shadow-[0_28px_90px_rgba(0,0,0,0.10)] sm:rounded-[2.5rem]">
              <div className="h-full w-full overflow-hidden rounded-[1.6rem] sm:rounded-[2rem]">
                <HeroVisual dark={dark} />
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 rounded-2xl border border-white/15 bg-black/65 p-4 text-white backdrop-blur-md">
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.17em] text-white/70">A name with a reason</p>
                  <p className="mt-1 font-display text-xl font-bold tracking-tight">ch<span className="text-[#91a6ff]">A</span>s</p>
                </div>
                <span className="text-right text-xs leading-relaxed text-white/75">Chidalu · Aloka · Silas</span>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="border-y border-line bg-elev/55">
          <dl className="mx-auto grid max-w-7xl gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Born", SITE.born],
              ["From", "Nwangwu, Ebonyi State"],
              ["Family", "First of eight"],
              ["Building now", "enV · Rumuo"],
            ].map(([label, value]) => (
              <div key={label} className="bg-bg px-5 py-5 sm:px-8 sm:py-6">
                <dt className="font-display text-[0.67rem] font-bold uppercase tracking-[0.17em] text-muted">{label}</dt>
                <dd className="mt-2 font-display text-lg font-semibold tracking-tight">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mx-auto grid max-w-7xl gap-9 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">A few things made real</p>
            <h2 className="mt-3 max-w-sm font-display text-3xl font-bold tracking-tight sm:text-4xl">The work is the proof of the curiosity.</h2>
            <p className="mt-4 max-w-sm text-muted">A live app, games, and experiments in different stages. Each project page says what exists—and what does not.</p>
            <Link to="/work" className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold text-brand hover:gap-3">
              See every repository <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {featured.map((project, index) => (
              <li key={project.slug}>
                <Reveal delay={index * 70}>
                  <Link
                    to="/work/$slug"
                    params={{ slug: project.slug }}
                    className="card-hover group flex h-full min-h-48 flex-col rounded-[1.6rem] border border-line bg-elev p-5 sm:p-6"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-chip px-3 py-1 font-display text-[0.67rem] font-bold uppercase tracking-[0.12em] text-muted">{project.status}</span>
                      <ArrowUpRight className="size-4 text-muted transition-colors group-hover:text-brand" aria-hidden />
                    </div>
                    <div className="mt-auto pt-8">
                      <h3 className="font-display text-2xl font-bold tracking-tight">{project.title}</h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{project.summary}</p>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-16 sm:px-8 sm:pb-20 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-chip">
              <img
                src="/media/portrait.jpg"
                alt="Portrait of Chidalu Silas Ogbala"
                className="story-image aspect-[4/4.5] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/65 px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">Nwangwu · Ebonyi</span>
            </div>
          </Reveal>
          <Reveal delay={90} className="flex flex-col justify-center">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">The reason underneath the work</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">Bring technology closer to home.</h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted">
              I have not had access to a high-end computer or an Nvidia GPU. I know what it means to learn and build from a phone. enV is my attempt to make useful browser tools reachable for people using modest devices and starting without a technical background.
            </p>
            <ul className="mt-7 grid gap-4 border-t border-line pt-5 sm:grid-cols-2">
              {SKILLS.slice(0, 2).map((skill) => (
                <li key={skill.title}>
                  <h3 className="font-display text-base font-bold">{skill.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{skill.copy}</p>
                </li>
              ))}
            </ul>
            <Link to="/story" className="mt-7 inline-flex items-center gap-2 font-display text-sm font-bold text-brand hover:gap-3">
              More about me <ArrowUpRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </section>

        <section className="border-t border-line bg-elev/45">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">Notes from the workbench</p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">Things I learned the hard way.</h2>
              </div>
              <Link to="/notes" className="inline-flex items-center gap-2 font-display text-sm font-bold hover:text-brand">
                All notes <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </Reveal>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {NOTES.slice(0, 3).map((note, index) => (
                <li key={note.slug}>
                  <Reveal delay={index * 80}>
                    <Link
                      to="/notes/$slug"
                      params={{ slug: note.slug }}
                      className="card-hover block h-full rounded-[1.5rem] border border-line bg-bg p-5 sm:p-6"
                    >
                      <p className="font-display text-[0.67rem] font-bold uppercase tracking-[0.16em] text-brand">{note.kicker}</p>
                      <h3 className="mt-3 font-display text-xl font-bold tracking-tight">{note.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{note.summary}</p>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </Shell>
  );
}
