import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
          "Projects by Chidalu Silas Ogbala: enV, FinReels, Rumuo, games, and the public GitHub repos under exploreofficialzz-star.",
      },
    ],
  }),
});

function WorkPage() {
  const [filter, setFilter] = useState<"all" | Kind>("all");
  const visible = PROJECTS.filter((project) => filter === "all" || project.kind === filter);

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 py-12">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand">Work</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          What is actually in the account.
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Thirty-two public repositories sit on GitHub under exploreofficialzz-star. The ones below are the
          products, games, experiments, and pages. Trading bots I built for binary, forex, stocks, and
          crypto did not work out. I am not attaching a profit number to any of them. Private repos are
          absent on purpose.
        </p>
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {FILTERS.map((item) => {
            const selected = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(item.id)}
                className={`min-h-11 rounded-full px-4 font-display text-sm font-semibold ${
                  selected ? "bg-brand text-brand-fg" : "border border-line text-fg"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {visible.map((project) => (
            <li key={project.slug}>
              <Link
                to="/work/$slug"
                params={{ slug: project.slug }}
                className="flex h-full flex-col rounded-3xl border border-line p-5 hover:border-brand"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                    {project.status}
                  </p>
                  <p className="text-sm text-muted">{project.year}</p>
                </div>
                <h2 className="mt-3 font-display text-2xl font-bold">{project.title}</h2>
                <p className="mt-2 text-muted">{project.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
        {visible.length === 0 ? (
          <p className="mt-8 text-muted">Nothing in that filter.</p>
        ) : null}
      </div>
    </Shell>
  );
}
