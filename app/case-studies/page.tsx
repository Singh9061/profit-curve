export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-card/90 p-10 shadow-2xl shadow-primary/10">
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">Case Studies</h1>
          <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
            Explore examples of how we helped businesses improve visibility, automate processes, and grow online.
          </p>
          <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground sm:text-base">
            <div>
              <h2 className="text-xl font-bold text-foreground">Local Business Growth</h2>
              <p className="mt-3">
                Delivered a conversion-focused website and Google Business optimisation for better local leads.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">SEO & Automation</h2>
              <p className="mt-3">
                Implemented SEO improvements and automated lead capture to increase traffic and reduce manual work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
