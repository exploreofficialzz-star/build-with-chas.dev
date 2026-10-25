import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { NOTES } from "@/data/content";

export const Route = createFileRoute("/notes/")({
  component: NotesPage,
  head: () => ({
    meta: [
      { title: "Notes — chAs" },
      {
        name: "description",
        content:
          "Short notes by Chidalu Silas Ogbala on building from Ebonyi, the failed charger, enV, and shipping what only costs time.",
      },
    ],
  }),
});

function NotesPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-5 py-12">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand">Notes</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Written here, from the life. Not a press page.
        </h1>
        <ul className="mt-10 grid gap-4">
          {NOTES.map((note) => (
            <li key={note.slug}>
              <Link
                to="/notes/$slug"
                params={{ slug: note.slug }}
                className="block rounded-3xl border border-line p-5 hover:border-brand"
              >
                <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {note.kicker}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold">{note.title}</h2>
                <p className="mt-2 text-muted">{note.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}
