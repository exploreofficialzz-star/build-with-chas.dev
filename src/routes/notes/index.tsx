import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
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
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-10 sm:px-8 sm:pt-16">
        <Reveal>
          <div className="max-w-4xl border-b border-line pb-8">
            <p className="font-display text-xs font-bold uppercase tracking-[0.19em] text-brand">Notes · From the workbench</p>
            <h1 className="mt-4 font-display text-[clamp(3rem,6vw,5rem)] font-bold leading-[0.94] tracking-[-0.07em]">
              Things I’m still learning to say clearly.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">Personal notes about building, running out of resources, and starting again. Not a press page.</p>
          </div>
        </Reveal>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {NOTES.map((note, index) => (
            <li key={note.slug}>
              <Reveal delay={(index % 2) * 80}>
                <Link
                  to="/notes/$slug"
                  params={{ slug: note.slug }}
                  className="card-hover group flex h-full min-h-52 flex-col rounded-[1.6rem] border border-line bg-elev p-5 sm:p-7"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-display text-[0.67rem] font-bold uppercase tracking-[0.16em] text-brand">{note.kicker}</p>
                    <ArrowUpRight className="size-4 text-muted transition-colors group-hover:text-brand" aria-hidden />
                  </div>
                  <div className="mt-auto pt-8">
                    <h2 className="font-display text-2xl font-bold tracking-tight">{note.title}</h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{note.summary}</p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}
