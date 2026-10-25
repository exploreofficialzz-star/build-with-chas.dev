import { Component, lazy, Suspense, useEffect, useState, type ReactNode } from "react";

const MarkScene = lazy(() => import("./mark-scene"));

class Catch extends Component<
  { children: ReactNode; onError: () => void },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function MarkFallback() {
  return (
    <div className="grid h-full place-items-center">
      <img src="/brand/mark.png" alt="" className="h-44 w-44 rounded-full" />
    </div>
  );
}

function Boundary({ children, fallback }: { children: ReactNode; fallback: ReactNode }) {
  const [failed, setFailed] = useState(false);
  if (failed) return fallback;
  return (
    <Suspense fallback={<div className="h-full w-full" />}>
      <Catch onError={() => setFailed(true)}>{children}</Catch>
    </Suspense>
  );
}

export function HeroVisual({ dark }: { dark: boolean }) {
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setReady(true);
  }, []);

  return (
    <div className="relative h-80 w-full overflow-hidden rounded-3xl border border-line bg-bg sm:h-96 lg:h-[32rem]">
      {ready ? (
        <Boundary fallback={<MarkFallback />}>
          <MarkScene dark={dark} reduced={reduced} />
        </Boundary>
      ) : (
        <MarkFallback />
      )}
      <p className="sr-only">
        A slowly turning 3D mark: a blue arc and a capital A, the chAs monogram.
      </p>
    </div>
  );
}
