import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { Shell } from "@/components/site/shell";
import { PROJECTS, SITE, SKILLS, TRADING_BOT_REPOSITORIES, VALUES, repoHref } from "@/data/content";

export const Route = createFileRoute("/story")({
  component: StoryPage,
  head: () => ({
    meta: [
      { title: "About — Chidalu Silas Ogbala (chAs)" },
      {
        name: "description",
        content:
          "The story of Chidalu Silas Ogbala: a curious maker from Nwangwu, Ebonyi State, learning, building, and making technology more accessible.",
      },
    ],
  }),
});

const biography = [
  "I was born on 11 April 2004 in Nwangwu, Okpanku Nkaleke, Ebonyi State, the firstborn and first son in a family of eight children—four boys and four girls. My parents are Simeon Ogbala and Alice Ogbala. As a child, I repaired torches, radios, and sandals. I once opened a broken charger, salvaged the parts that still worked, and tried to build my own with a biscuit carton as the case. It failed, but I kept wondering how technology was made. I loved computer subjects and explored Google and Facebook on an Itel 2160; after changing schools, I got access to a computer lab and paid someone to teach me CorelDRAW and Photoshop.",
  "Music was part of that same curiosity: I learned ogene and keyboard, sang and performed at church, and wrote songs. When school fees became difficult around JSS2, I left school for a time, travelled, hawked, and continued learning. I studied HTML and CSS, used free mobile music tools because I could not afford paid ones, and learned programming from YouTube, Bro Code, and bootcamp lessons. I later sat WAEC and NECO at about 20. Music did not become the income I hoped for, so I tried other paths, including binary-options trading. I moved from a demo account to my own money and lost it over roughly a year; after one especially hard day, I broke my phone and repaired it the next morning. Near the end of 2025, online surveys paid me some hundreds of dollars that helped me get by and set up a Play Console account, though those accounts were later banned.",
  "In early 2026, ads about AI trading tools pulled me back toward code. I built bot experiments for binary options, forex, stocks, and crypto; none worked out. One AI-assisted project had both a backend and a frontend, and showed me I could build apps and websites with AI too. PromptReel AI and RiseUp grew from that discovery, but I could not afford to ship either, so they remain experiments rather than live products. I shifted toward apps and games I could build without a large ongoing server bill, including Emoji Rain, Pivot Ball, FinReels, NexSkills Hub, Red Flag Names, Alpha Crush, and Crystal Cascade. After repeated Play Store rejections, FinReels eventually went live on Google Play; Alpha Crush and Crystal Cascade also went live. Crystal Cascade has an update, while I am still working toward a 3D version of Alpha Crush.",
  "FinReels began as a financial-literacy app. When I imagined a wider discovery platform, I found the FinReels name was already in use and searched for another name. I chose Rumuo after my own search did not turn up a trademark or software reference under that name; that was my search, not legal clearance. The larger platform needs funding and substantial work, so it has no fixed launch date. I have not had access to a high-end computer with an Nvidia GPU, and much of my work has happened on phones. That experience is why I care about people who have curiosity but not expensive devices or a technical background. enV is my live browser-toolkit project, intended to make practical tools useful on modest devices, including phones with 2GB of RAM; that 2GB goal is still a direction I am building toward, not a claim that every setup is already solved. Rumuo is the company I am building around, while chAs Technologies LLC remains my personal brand. I want to keep learning, make useful things, and bring technology closer to home.",
].join(" ");

function StoryPage() {
  const games = PROJECTS.filter((project) => project.kind === "game");

  return (
    <Shell>
      <article className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-14">
        <section className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.19em] text-brand">
              About · The long version
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.93] tracking-[-0.07em]">
              I learned by opening the things I couldn’t afford to replace.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              I’m {SITE.legal}, known as chAs. I started with a broken charger and a question. The
              work since then has been part curiosity, part survival, and a lot of trying again with
              what I have.
            </p>
            <a
              href="#the-story"
              className="mt-7 inline-flex items-center gap-2 font-display text-sm font-bold text-brand hover:gap-3"
            >
              Follow the story <ArrowDownRight className="size-4" aria-hidden />
            </a>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-chip p-2 shadow-[0_28px_80px_rgba(0,0,0,0.12)] sm:rounded-[2.5rem]">
              <img
                src="/media/portrait.jpg"
                alt="Portrait of Chidalu Silas Ogbala"
                className="story-image aspect-[4/4.5] w-full rounded-[1.55rem] object-cover sm:rounded-[2rem]"
                fetchPriority="high"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/65 p-4 text-white backdrop-blur-md">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                  Nwangwu · Ebonyi State
                </p>
                <p className="mt-1 font-display text-xl font-bold">Still becoming.</p>
              </div>
            </div>
          </Reveal>
        </section>

        <Reveal className="mt-8">
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {[
              ["Born", SITE.born],
              ["Firstborn", "One of eight children"],
              ["Rooted in", SITE.birthplace],
            ].map(([label, value]) => (
              <li key={label} className="bg-elev px-5 py-4 sm:px-6">
                <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.17em] text-muted">
                  {label}
                </p>
                <p className="mt-1 font-display text-sm font-semibold sm:text-base">{value}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <section className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[0.7fr_1.3fr]" id="the-story">
          <Reveal className="self-start lg:sticky lg:top-28">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">
              The name
            </p>
            <h2 className="mt-3 max-w-sm font-display text-3xl font-bold leading-tight tracking-tight">
              A small name that carries my people with it.
            </h2>
            <div className="mt-6 rounded-[1.75rem] border border-line bg-elev p-6 sm:p-7">
              <p className="font-display text-5xl font-bold tracking-[-0.08em]">
                ch<span className="text-brand">A</span>s
              </p>
              <dl className="mt-5 grid gap-3 text-sm">
                <div className="flex gap-3">
                  <dt className="w-9 font-display font-bold text-brand">ch</dt>
                  <dd className="text-muted">from Chidalu</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-9 font-display font-bold text-brand">A</dt>
                  <dd className="text-muted">from Aloka, the person I was named after</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-9 font-display font-bold text-brand">S</dt>
                  <dd className="text-muted">from Silas</dd>
                </div>
              </dl>
              <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                The A is capital because I’m proud of who I was named after.
              </p>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <section className="rounded-[1.75rem] border border-line bg-elev p-5 sm:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">
                My story
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                A life of making, learning, and starting again.
              </h2>
              <p className="mt-5 max-w-prose text-base leading-[1.9] text-muted">{biography}</p>
            </section>
          </Reveal>
        </section>

        <section className="mt-16 rounded-[2rem] border border-line bg-chip p-5 sm:mt-24 sm:p-8 lg:p-10">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">
                  Game projects · GitHub
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Every game repository, named.
                </h2>
              </div>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 font-display text-sm font-bold hover:text-brand"
              >
                More work <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((project, index) => (
              <li key={project.slug}>
                <Reveal delay={(index % 3) * 60}>
                  <div className="card-hover flex h-full flex-col rounded-2xl border border-line bg-bg p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-lg font-bold tracking-tight">
                        {project.title}
                      </h3>
                      <span className="rounded-full bg-elev px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-muted">
                        {project.status}
                      </span>
                    </div>
                    {project.repo ? (
                      <a
                        href={repoHref(project.repo)}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 break-all text-xs font-semibold text-brand underline decoration-brand/30 underline-offset-4"
                      >
                        {project.repo} <ExternalLink className="size-3 shrink-0" aria-hidden />
                      </a>
                    ) : null}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-5 rounded-[2rem] border border-line bg-elev p-5 sm:p-8">
          <Reveal>
            <details open className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="block font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">
                    A record of attempts
                  </span>
                  <span className="mt-2 block font-display text-xl font-bold sm:text-2xl">
                    Trading-bot repositories — names only
                  </span>
                </span>
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-chip font-display text-xl transition-transform group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
                I built experiments across binary options, forex, stocks, and crypto. None worked
                out. These are names from my repositories, not live tools, recommendations, or
                claims of trading performance; the private projects are not linked here.
              </p>
              <ul className="mt-5 grid gap-2 border-t border-line pt-5 sm:grid-cols-2 lg:grid-cols-3">
                {TRADING_BOT_REPOSITORIES.map((repo) => (
                  <li
                    key={repo}
                    className="rounded-xl bg-chip px-3 py-2 font-mono text-xs leading-relaxed text-muted"
                  >
                    {repo}
                  </li>
                ))}
              </ul>
            </details>
          </Reveal>
        </section>

        <section className="mt-16 grid gap-4 sm:mt-24 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[1.75rem] border border-line bg-elev p-6 sm:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">
                Mission
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight">
                Become good at the work—and open doors with it.
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                I want my growth to create opportunities and improvements for young people,
                especially those who believe they can do more without a head start.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="h-full rounded-[1.75rem] border border-line bg-elev p-6 sm:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">
                Vision
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight">
                Bring technology closer to home.
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                Useful tools should not require a high-end machine or a technical background. enV is
                one attempt to make that direction practical.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="mt-5 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="h-full rounded-[1.75rem] bg-fg p-6 text-bg sm:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">
                Personal philosophy
              </p>
              <blockquote className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                “Life is deep. Do more of what amuses you.”
              </blockquote>
              <p className="mt-4 text-sm leading-relaxed text-bg/70">
                And getting my parents’ dreams into reality remains the goal underneath it all.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full rounded-[1.75rem] border border-line bg-elev p-6 sm:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">
                How I work
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {VALUES.map((value) => (
                  <li
                    key={value}
                    className="rounded-full border border-line bg-chip px-3.5 py-2 text-sm font-semibold"
                  >
                    {value}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted">
                I build apps, games, and browser tools, often using AI as part of the process. I am
                still learning how to turn an idea into something people can actually use.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="grid h-full grid-cols-2 gap-3">
              <img
                src="/media/childhood.jpg"
                alt="Chidalu as a baby"
                className="story-image aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="grid gap-3">
                <img
                  src="/media/youth.jpg"
                  alt="A younger Chidalu outdoors"
                  className="story-image aspect-square w-full rounded-[1.5rem] object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src="/media/night.jpg"
                  alt="Chidalu working late under colored light"
                  className="story-image aspect-square w-full rounded-[1.5rem] object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </Reveal>
          <Reveal
            delay={80}
            className="flex flex-col justify-center rounded-[1.75rem] border border-line bg-elev p-6 sm:p-8"
          >
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">
              The next chapter
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              A story still in progress.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              Rumuo has no fixed platform release date. enV is live and still growing. I’m keeping
              this page honest as the work changes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="button-press inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-5 font-display text-sm font-bold text-brand-fg"
              >
                Explore the work <ArrowUpRight className="size-4" aria-hidden />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center rounded-full border border-line px-5 font-display text-sm font-bold hover:border-brand"
              >
                Contact me
              </Link>
            </div>
          </Reveal>
        </section>

        <section className="mt-16 border-t border-line pt-10 sm:mt-24">
          <Reveal>
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-brand">
              The skills I can claim
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SKILLS.map((skill, index) => (
                <article
                  key={skill.title}
                  className="card-hover rounded-[1.5rem] border border-line bg-elev p-5"
                >
                  <span className="font-display text-xs font-bold text-brand">0{index + 1}</span>
                  <h3 className="mt-3 font-display text-lg font-bold tracking-tight">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{skill.copy}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>
      </article>
    </Shell>
  );
}
