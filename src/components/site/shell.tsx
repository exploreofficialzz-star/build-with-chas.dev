import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { SITE, SOCIALS } from "@/data/content";
import { ThemeContext } from "@/components/site/theme-context";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/story", label: "About" },
  { to: "/work", label: "Work" },
  { to: "/notes", label: "Notes" },
  { to: "/contact", label: "Contact" },
] as const;

function Wordmark() {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="chAs home">
      <span className="grid size-10 place-items-center rounded-[0.95rem] border border-line bg-chip font-display text-lg font-bold tracking-[-0.08em] text-fg transition-transform group-hover:-rotate-3">
        ch<span className="text-brand">A</span>s
      </span>
      <span className="grid leading-tight">
        <span className="font-display text-sm font-bold tracking-tight text-fg">chAs</span>
        <span className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.19em] text-muted">
          Technologies LLC
        </span>
      </span>
    </Link>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("chas-theme", next ? "dark" : "light");
    } catch {
      // Theme still changes for this session when storage is unavailable.
    }
    setDark(next);
  }

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div className="flex min-h-screen flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-elev focus:px-4 focus:py-3 focus:font-display focus:font-semibold"
        >
          Skip to content
        </a>

        <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/85 backdrop-blur-xl">
          <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
            <Wordmark />
            <nav className="hidden items-center gap-1 rounded-full border border-line/80 bg-elev/80 p-1 md:flex" aria-label="Primary">
              {NAV.map((item) => {
                const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-4 py-2 text-[0.82rem] font-semibold ${
                      active ? "bg-chip text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggle}
                className="button-press grid size-10 place-items-center rounded-full border border-line bg-elev text-fg hover:border-brand"
                aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              >
                {dark ? <Sun className="size-4" aria-hidden /> : <Moon className="size-4" aria-hidden />}
              </button>
              <Link
                to="/contact"
                className="button-press hidden min-h-10 items-center gap-2 rounded-full bg-fg px-4 font-display text-sm font-semibold text-bg hover:bg-brand hover:text-brand-fg sm:inline-flex"
              >
                Let’s talk <ArrowUpRight className="size-4" aria-hidden />
              </Link>
              <button
                type="button"
                className="button-press grid size-10 place-items-center rounded-full border border-line bg-elev text-fg hover:border-brand md:hidden"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
              >
                {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
              </button>
            </div>
          </div>

          {open ? (
            <nav className="mobile-menu-enter border-t border-line bg-bg px-5 py-4 md:hidden" aria-label="Mobile">
              <ul className="mx-auto grid max-w-7xl gap-1">
                {NAV.map((item) => {
                  const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        aria-current={active ? "page" : undefined}
                        className={`flex min-h-12 items-center justify-between rounded-xl px-4 font-display font-semibold ${
                          active ? "bg-chip text-fg" : "text-muted hover:bg-chip hover:text-fg"
                        }`}
                      >
                        {item.label}
                        <ArrowUpRight className="size-4" aria-hidden />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ) : null}
        </header>

        <main id="content" className="page-enter flex-1">
          {children}
        </main>

        <footer className="mt-12 border-t border-line">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-16">
            <div>
              <p className="font-display text-3xl font-bold tracking-tight">
                Still curious. <span className="text-brand">Still building.</span>
              </p>
              <p className="mt-3 max-w-xl text-muted">
                {SITE.legal} — known as chAs. A personal record of the things I have tried, shipped, and want to make more accessible.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="button-press inline-flex min-h-11 items-center rounded-full bg-brand px-5 font-display text-sm font-bold text-brand-fg"
                  href={`mailto:${SITE.email}`}
                >
                  Email me <ArrowUpRight className="ml-2 size-4" aria-hidden />
                </a>
                <Link
                  to="/story"
                  className="inline-flex min-h-11 items-center rounded-full border border-line px-5 font-display text-sm font-semibold hover:border-brand"
                >
                  Read my story
                </Link>
              </div>
            </div>

            <div className="grid gap-7 sm:grid-cols-2 lg:justify-self-end">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-muted">Say hello</p>
                <a className="mt-3 block break-all text-sm font-semibold hover:text-brand" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
                <a className="mt-2 block text-sm text-muted hover:text-fg" href={`tel:${SITE.phoneTel}`}>
                  {SITE.phoneDisplay}
                </a>
                <p className="mt-2 text-sm text-muted">{SITE.location}</p>
              </div>
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-muted">Around the web</p>
                <ul className="mt-3 grid gap-2">
                  {SOCIALS.map((social) => (
                    <li key={social.href}>
                      <a
                        className="text-sm font-semibold text-fg underline decoration-line underline-offset-4 hover:text-brand"
                        href={social.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {social.label} <ArrowUpRight className="inline size-3.5" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-line">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <span>{SITE.brand} · {SITE.domain}</span>
              <span>{SITE.company} is the company I’m building. This site is my personal story.</span>
            </div>
          </div>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}
