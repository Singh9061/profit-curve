export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-card/90 p-10 shadow-2xl shadow-primary/10">
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">About Us</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Profit Curve is a growth-focused digital agency helping businesses in Raebareli and beyond scale with intelligent systems, digital marketing, and performance-driven web experiences.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-foreground">What We Do</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                We build automated workflows, modern websites, and marketing campaigns that turn visitors into leads and helps business owners work less while growing more.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Why Choose Us</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Our team combines technical expertise with local market knowledge to deliver practical solutions, fast execution, and measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
