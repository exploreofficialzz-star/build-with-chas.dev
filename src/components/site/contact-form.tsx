import { useState, type FormEvent } from "react";
import { SITE } from "@/data/content";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent"; detail: string }
  | { state: "error"; detail: string };

const ENDPOINT = `https://formsubmit.co/ajax/${SITE.email}`;

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [honey, setHoney] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.state === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (honey) {
      setStatus({ state: "error", detail: "That submission was empty in the wrong place, so it was not sent." });
      return;
    }
    if (name.length < 2) {
      setStatus({ state: "error", detail: "Add your name." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ state: "error", detail: "That email does not look usable." });
      return;
    }
    if (message.length < 12) {
      setStatus({ state: "error", detail: "Write a little more than a few words." });
      return;
    }

    setStatus({ state: "sending" });
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `build-with-chas.dev — note from ${name}`,
          _template: "table",
        }),
      });
      const payload = (await response.json().catch(() => null)) as
        | { success?: string | boolean; message?: string }
        | null;
      const ok = response.ok && (payload?.success === true || payload?.success === "true");
      if (!ok) {
        const detail = payload?.message || `The form service returned ${response.status}. Nothing was confirmed.`;
        setStatus({ state: "error", detail });
        return;
      }
      form.reset();
      setStatus({
        state: "sent",
        detail:
          payload?.message ||
          "FormSubmit accepted the message. The first time, it also emails chastechnologiesllc@gmail.com a confirmation link. Until that link is opened, delivery is not finished.",
      });
    } catch {
      setStatus({
        state: "error",
        detail: "The browser could not reach the form service. Use the email link instead.",
      });
    }
  }

  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent("Hello from build-with-chas.dev")}`;

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <label className="sr-only" aria-hidden="true">
        Company
        <input
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(event) => setHoney(event.target.value)}
          name="company"
        />
      </label>
      <label className="grid gap-2">
        <span className="font-display text-sm font-semibold">Name</span>
        <input
          name="name"
          required
          autoComplete="name"
          className="min-h-12 rounded-2xl border border-line bg-elev px-4 text-fg"
        />
      </label>
      <label className="grid gap-2">
        <span className="font-display text-sm font-semibold">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="min-h-12 rounded-2xl border border-line bg-elev px-4 text-fg"
        />
      </label>
      <label className="grid gap-2">
        <span className="font-display text-sm font-semibold">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-2xl border border-line bg-elev px-4 py-3 text-fg"
        />
      </label>
      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 font-display text-sm font-bold text-brand-fg disabled:opacity-60"
        >
          {status.state === "sending" ? "Sending…" : "Send the note"}
        </button>
        <a href={mailto} className="text-sm text-muted underline decoration-line underline-offset-4">
          Or write {SITE.email} directly
        </a>
      </div>
      <p className="text-sm text-muted" role="status" aria-live="polite">
        {status.state === "idle" &&
          "This posts to FormSubmit. I only call it sent when that service says it accepted the message. The first submission may sit until the inbox confirms the address."}
        {status.state === "sending" && "Sending. Waiting on FormSubmit."}
        {status.state === "sent" || status.state === "error" ? status.detail : null}
      </p>
    </form>
  );
}
