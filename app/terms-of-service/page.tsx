export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-card/90 p-10 shadow-2xl shadow-primary/10">
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">Terms of Service</h1>
          <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
            These terms explain the services we provide through this website and how we work with clients.
          </p>
          <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground sm:text-base">
            <div>
              <h2 className="text-xl font-bold text-foreground">Service Scope</h2>
              <p className="mt-3">
                We offer web development, SEO optimisation, and social media marketing services as described on this site.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Communication</h2>
              <p className="mt-3">
                All client requests start via WhatsApp contact. We confirm scope, pricing and timelines before beginning any work.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Limitation of Liability</h2>
              <p className="mt-3">
                We are not liable for indirect damages, and all services are provided subject to our mutual agreement and confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
