export default function OurProcessPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-card/90 p-10 shadow-2xl shadow-primary/10">
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">Our Process</h1>
          <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
            We follow a simple, transparent process to build effective marketing and automation systems for your business.
          </p>
          <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground sm:text-base">
            <div>
              <h2 className="text-xl font-bold text-foreground">1. Discovery</h2>
              <p className="mt-3">
                We start by understanding your business, goals, and current challenges to recommend the right solution.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">2. Strategy</h2>
              <p className="mt-3">
                Our team creates a customised plan focused on automation, web growth, SEO, or social media performance.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">3. Delivery</h2>
              <p className="mt-3">
                We implement the solution quickly and support you with ongoing updates until your goals are met.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
