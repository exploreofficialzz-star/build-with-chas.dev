import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
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
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <h1 className="font-display text-4xl font-bold">That note is not here.</h1>
          <Link to="/notes" className="mt-6 inline-flex items-center gap-2 font-display font-bold text-brand"><ArrowLeft className="size-4" aria-hidden /> All notes</Link>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <article className="mx-auto max-w-4xl px-5 pb-20 pt-10 sm:px-8 sm:pt-16">
        <Reveal>
          <p className="font-display text-xs font-bold uppercase tracking-[0.19em] text-brand">{note.kicker} · Notes</p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(3rem,6vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.07em]">{note.title}</h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted">{note.summary}</p>
        </Reveal>
        <div className="mt-9 grid gap-5 border-t border-line pt-8 text-lg leading-relaxed sm:gap-6">
          {note.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph.slice(0, 32)} delay={(index % 2) * 70}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-10">
          <Link to="/notes" className="inline-flex items-center gap-2 font-display text-sm font-bold text-brand hover:gap-3"><ArrowLeft className="size-4" aria-hidden /> All notes</Link>
        </p>
      </article>
    </Shell>
  );
}
