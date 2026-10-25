import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { getNote } from "@/data/content";

export const Route = createFileRoute("/notes/$slug")({
  component: NotePage,
  head: ({ params }) => {
    const note = getNote(params.slug);
    return {
      meta: [
        { title: note ? `${note.title} — chAs` : "Not found — chAs" },
        { name: "description", content: note?.summary ?? "That note is not on this site." },
      ],
    };
  },
});

function NotePage() {
  const { slug } = Route.useParams();
  const note = getNote(slug);

  if (!note) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-5 py-16">
          <h1 className="font-display text-4xl font-extrabold">That note is not here.</h1>
          <Link to="/notes" className="mt-6 inline-flex font-display font-bold text-brand">
            All notes
          </Link>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-5 py-12">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          {note.kicker}
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {note.title}
        </h1>
        <div className="mt-8 grid gap-5 text-lg">
          {note.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-10">
          <Link to="/notes" className="font-display font-bold text-brand">
            All notes
          </Link>
        </p>
      </article>
    </Shell>
  );
}
