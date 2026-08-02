export default function PslashPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-card/90 p-10 shadow-2xl shadow-primary/10">
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">Pslash</h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
            Welcome to the Pslash page. This route is now available in the app and ready for custom content.
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-foreground">What is Pslash?</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Use this page to share your Pslash content, product details, or any other custom information.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Next Steps</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Update this page with your own messaging and visuals to make it unique to your brand.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
