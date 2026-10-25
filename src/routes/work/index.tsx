import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/site/reveal";
import { Shell } from "@/components/site/shell";
import { FILTERS, PROJECTS, type Kind } from "@/data/content";

export const Route = createFileRoute("/work/")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: "Work — chAs" },
      {
        name: "description",
        content:
          "Apps, games, experiments, and public repositories by Chidalu Silas Ogbala (chAs). Real work, with clear notes on what has and has not shipped.",
      },
    ],
  }),
});

function WorkPage() {
  const [filter, setFilter] = useState<"all" | Kind>("all");
  const visible = PROJECTS.filter((project) => filter === "all" || project.kind === filter);

  return (
    <Shell>
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pt-16">
        <Reveal>
          <div className="grid gap-6 border-b border-line pb-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-[0.19em] text-brand">Work · The project shelf</p>
              <h1 className="mt-4 max-w-4xl font-display text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.07em]">
                Built, tried, learned. <span className="text-muted">In public where possible.</span>
              </h1>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted lg:justify-self-end">
              These are real repositories and products at different stages. I distinguish what is live from what is still an experiment; I do not attach imaginary users, revenue, or results to them.
            </p>
          </div>
        </Reveal>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {FILTERS.map((item) => {
              const selected = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setFilter(item.id)}
                  className={`button-press min-h-11 rounded-full px-4 font-display text-sm font-semibold ${
                    selected ? "bg-fg text-bg" : "border border-line bg-elev text-muted hover:border-brand hover:text-fg"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.13em] text-muted">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </p>
        </div>

        {visible.length ? (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {visible.map((project, index) => (
              <li key={project.slug}>
                <Reveal delay={(index % 3) * 55}>
                  <Link
                    to="/work/$slug"
                    params={{ slug: project.slug }}
                    className="card-hover group flex h-full min-h-56 flex-col rounded-[1.6rem] border border-line bg-elev p-5 sm:p-6"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-chip px-3 py-1 font-display text-[0.64rem] font-bold uppercase tracking-[0.12em] text-brand">
                        {project.status}
                      </span>
                      <span className="font-display text-xs font-semibold text-muted">{project.year}</span>
                    </div>
                    <div className="mt-auto pt-8">
                      <div className="flex items-end justify-between gap-3">
                        <h2 className="font-display text-2xl font-bold tracking-tight">{project.title}</h2>
                        <ArrowUpRight className="size-5 shrink-0 text-muted transition-colors group-hover:text-brand" aria-hidden />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 3).map((item) => (
                          <span key={item} className="rounded-full border border-line px-2.5 py-1 text-[0.65rem] font-semibold text-muted">{item}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-8 rounded-2xl border border-line bg-elev p-6 text-muted">Nothing in that filter yet.</p>
        )}
      </div>
    </Shell>
  );
}
