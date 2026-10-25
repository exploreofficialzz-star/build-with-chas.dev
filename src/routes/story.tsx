import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { SITE, SKILLS, TIMELINE, VALUES } from "@/data/content";

export const Route = createFileRoute("/story")({
  component: StoryPage,
  head: () => ({
    meta: [
      { title: "Story — chAs" },
      {
        name: "description",
        content:
          "The story of Chidalu Silas Ogbala, from Nwangwu in Ebonyi State to chAs Technologies LLC, FinReels, Rumuo, and enV.",
      },
    ],
  }),
});

function StoryPage() {
  return (
    <Shell>
      <article className="mx-auto max-w-6xl px-5 py-12">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          My story
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
          A poor village, a dead charger, and no excuse I was willing to keep.
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-muted">
          If Elon Musk can do it, I decided I would too. That sentence is not a comparison of results. It
          is the rule I used when there was no background to lean on.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <figure className="sm:col-span-1">
            <img
              src="/media/childhood.jpg"
              alt="Chidalu as a baby, lying on patterned fabric"
              className="aspect-[3/4] w-full rounded-3xl object-cover"
            />
            <figcaption className="mt-2 text-sm text-muted">Nwangwu. Small.</figcaption>
          </figure>
          <figure>
            <img
              src="/media/youth.jpg"
              alt="A younger Chidalu smiling outdoors in a green sweater"
              className="aspect-[3/4] w-full rounded-3xl object-cover"
            />
            <figcaption className="mt-2 text-sm text-muted">Still becoming chAs.</figcaption>
          </figure>
          <figure>
            <img
              src="/media/night.jpg"
              alt="Chidalu at night, red and purple light, one hand raised"
              className="aspect-[3/4] w-full rounded-3xl object-cover"
            />
            <figcaption className="mt-2 text-sm text-muted">Late. Still working.</figcaption>
          </figure>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[16rem_1fr]">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            In order
          </p>
          <ol className="grid gap-8 border-l border-line pl-6">
            {TIMELINE.map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[1.7rem] top-1.5 size-3 rounded-full bg-brand" aria-hidden />
                <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                  {item.when}
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold">{item.title}</h2>
                <p className="mt-2 text-muted">{item.copy}</p>
              </li>
            ))}
          </ol>
        </div>

        <section className="mt-16 grid items-end gap-10 lg:grid-cols-[1fr_16rem]">
          <blockquote>
            <p className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              “Life is deep. Do more of what amuses you. Getting my parents’ dreams into reality is still
              the goal underneath the products.”
            </p>
            <footer className="mt-4 text-muted">— {SITE.legal}</footer>
          </blockquote>
          <div>
            <video
              controls
              playsInline
              preload="metadata"
              poster="/media/night.jpg"
              className="aspect-[9/16] w-full max-w-xs rounded-3xl bg-chip object-cover"
            >
              <source src="/media/move.mp4" type="video/mp4" />
            </video>
            <p className="mt-2 max-w-xs text-sm text-muted">
              A phone clip of me moving. Twenty seconds. Not a brand film.
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-line p-6">
            <h2 className="font-display text-xl font-bold">Mission</h2>
            <p className="mt-3 text-muted">
              Become genuinely good at the work. The point of that success is the chances it opens for
              young people who are growing up the way I did.
            </p>
          </div>
          <div className="rounded-3xl border border-line p-6">
            <h2 className="font-display text-xl font-bold">Vision</h2>
            <p className="mt-3 text-muted">
              Bring technology home. enV is the practical version: hard setups, prepared, usable on a low
              2GB phone instead of a machine I have never owned.
            </p>
          </div>
          <div className="rounded-3xl border border-line p-6">
            <h2 className="font-display text-xl font-bold">Who I am building for</h2>
            <p className="mt-3 text-muted">
              People with no background who still believe they can do more. I am one of them. The company
              name for the next platform is {SITE.company}. The date is not fixed.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-extrabold">What I can actually claim</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {SKILLS.map((skill) => (
              <li key={skill.title} className="rounded-3xl bg-chip p-5">
                <h3 className="font-display text-lg font-bold">{skill.title}</h3>
                <p className="mt-2 text-muted">{skill.copy}</p>
              </li>
            ))}
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2">
            {VALUES.map((value) => (
              <li
                key={value}
                className="rounded-full border border-line px-4 py-2 font-display text-sm font-semibold"
              >
                {value}
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-12">
          <Link to="/work" className="font-display font-bold text-brand">
            The work, with the repos named
          </Link>
        </p>
      </article>
    </Shell>
  );
}
