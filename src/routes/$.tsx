import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";

export const Route = createFileRoute("/$")({
  component: MissingPage,
  head: () => ({
    meta: [{ title: "Not found — chAs" }],
  }),
});

function MissingPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-5 py-20">
        <h1 className="font-display text-4xl font-extrabold">That page is not on this site.</h1>
        <Link to="/" className="mt-6 inline-flex font-display font-bold text-brand">
          Back home
        </Link>
      </div>
    </Shell>
  );
}
