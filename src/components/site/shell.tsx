import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { SITE, SOCIALS } from "@/data/content";

type ThemeValue = { dark: boolean; toggle: () => void };

const ThemeContext = createContext<ThemeValue>({ dark: false, toggle: () => {} });

export function useTheme() {
  return useContext(ThemeContext);
}

const NAV = [
  { to: "/", label: "Home" },
  { to: "/story", label: "Story" },
  { to: "/work", label: "Work" },
  { to: "/notes", label: "Notes" },
  { to: "/contact", label: "Contact" },
] as const;

function Wordmark() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="font-display text-xl font-extrabold tracking-tight text-fg">
        ch<span className="text-brand">A</span>s
      </span>
      <span className="hidden text-xs uppercase tracking-[0.18em] text-muted sm:block">
        Technologies LLC
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
    localStorage.setItem("chas-theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <div className="flex min-h-screen flex-col">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-elev focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/90 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
            <Wordmark />
            <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
              {NAV.map((item) => {
                const active = item.to === "/" ? path === "/" : path.startsWith(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`rounded-full px-3 py-2 text-sm font-display font-semibold ${
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
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-fg"
                aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              >
                {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
              </button>
              <button
                type="button"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-fg md:hidden"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
              >
                {open ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>
          </div>
          {open ? (
            <nav className="border-t border-line px-5 py-3 md:hidden" aria-label="Mobile">
              <ul className="grid gap-1">
                {NAV.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="flex min-h-11 items-center font-display font-semibold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </header>
        <main id="content" className="flex-1">
          {children}
        </main>
        <footer className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2">
            <div>
              <p className="font-display text-2xl font-extrabold">
                ch<span className="text-brand">A</span>s
              </p>
              <p className="mt-2 max-w-sm text-muted">
                {SITE.legal}. Personal brand of {SITE.brand}. The company is {SITE.company}.
              </p>
              <p className="mt-4 text-sm text-muted">{SITE.domain}</p>
            </div>
            <div className="sm:justify-self-end">
              <ul className="grid gap-2">
                <li>
                  <a className="underline decoration-line underline-offset-4" href={`mailto:${SITE.email}`}>
                    {SITE.email}
                  </a>
                </li>
                <li>
                  <a className="underline decoration-line underline-offset-4" href={`tel:${SITE.phoneTel}`}>
                    {SITE.phoneDisplay}
                  </a>
                </li>
                {SOCIALS.map((social) => (
                  <li key={social.href}>
                    <a
                      className="underline decoration-line underline-offset-4"
                      href={social.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted">{SITE.location}</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}
