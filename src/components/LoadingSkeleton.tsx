"use client";

export function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar skeleton */}
      <div className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 animate-pulse rounded-lg bg-muted" />
            <div className="h-5 w-28 animate-pulse rounded bg-muted" />
          </div>
          <div className="hidden gap-6 lg:flex">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 w-16 animate-pulse rounded bg-muted" />
            ))}
          </div>
          <div className="h-9 w-9 animate-pulse rounded-full bg-muted lg:h-10 lg:w-32" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="flex min-h-[100svh] flex-col items-center justify-center px-4 pt-20">
        <div className="h-12 w-3/4 max-w-xl animate-pulse rounded-lg bg-muted sm:h-16" />
        <div className="mt-4 h-8 w-1/2 max-w-md animate-pulse rounded-lg bg-muted" />
        <div className="mt-6 h-4 w-2/3 max-w-lg animate-pulse rounded bg-muted/70" />
        <div className="mt-10 flex gap-4">
          <div className="h-12 w-40 animate-pulse rounded-full bg-muted" />
          <div className="h-12 w-40 animate-pulse rounded-full bg-muted/60" />
        </div>
      </div>
    </div>
  );
}
