import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { getProject, repoHref } from "@/data/content";

export const Route = createFileRoute("/work/$slug")({
  component: ProjectPage,
  head: ({ params }) => {
    const project = getProject(params.slug);
    return {
      meta: [
        { title: project ? `${project.title} — chAs` : "Not found — chAs" },
        {
          name: "description",
          content: project?.summary ?? "That project is not on this site.",
        },
      ],
    };
  },
});

function ProjectPage() {
  const { slug } = Route.useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h1 className="font-display text-4xl font-extrabold">That project is not here.</h1>
          <Link to="/work" className="mt-6 inline-flex font-display font-bold text-brand">
            Back to the work
          </Link>
        </div>
      </Shell>
    );
  }

  const links = [
    ...(project.repo ? [{ label: "GitHub", href: repoHref(project.repo) }] : []),
    ...(project.links ?? []),
  ];

  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-5 py-12">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          {project.status} · {project.year}
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-xl text-muted">{project.summary}</p>
        <div className="mt-8 grid gap-4">
          {project.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li key={item} className="rounded-full bg-chip px-3 py-1 font-display text-sm font-semibold">
              {item}
            </li>
          ))}
        </ul>
        {links.length ? (
          <ul className="mt-8 flex flex-wrap gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full border border-line px-4 font-display text-sm font-bold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
        <p className="mt-10">
          <Link to="/work" className="font-display font-bold text-brand">
            All work
          </Link>
        </p>
      </article>
    </Shell>
  );
}
