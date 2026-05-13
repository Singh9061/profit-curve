export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border bg-card/90 p-10 shadow-2xl shadow-primary/10">
          <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl">Privacy Policy</h1>
          <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
            We respect your privacy. This website collects only the information needed to respond to inquiries and provide our services.
          </p>
          <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground sm:text-base">
            <div>
              <h2 className="text-xl font-bold text-foreground">Data We Collect</h2>
              <p className="mt-3">
                We use contact form details such as name, email, phone, and message only to respond to your request via WhatsApp.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">How We Use Data</h2>
              <p className="mt-3">
                Your information is used to contact you, schedule consultations, and send updates only when you request them.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">No Third-Party Sharing</h2>
              <p className="mt-3">
                We do not share your information with third parties except as needed for service delivery or when required by law.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
