import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif" }}>Get in Touch</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Ready to supercharge your business? Fill out the form below and our team will get back to you shortly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <form className="group relative rounded-3xl bg-card p-8 shadow-2xl ring-1 ring-border sm:p-10">
            <div className="absolute -inset-0.5 -z-10 rounded-3xl bg-gradient-to-r from-primary to-[oklch(0.6_0.15_140)] opacity-20 blur transition duration-500 group-hover:opacity-40" />
            
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-foreground">
                  Name
                </label>
                <div className="relative mt-2.5">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 bg-background/50 py-2 pl-10 pr-3.5 text-foreground shadow-sm ring-1 ring-inset ring-border transition-all focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">
                  Email
                </label>
                <div className="relative mt-2.5">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-background/50 py-2 pl-10 pr-3.5 text-foreground shadow-sm ring-1 ring-inset ring-border transition-all focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-foreground">
                  Phone
                </label>
                <div className="relative mt-2.5">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 bg-background/50 py-2 pl-10 pr-3.5 text-foreground shadow-sm ring-1 ring-inset ring-border transition-all focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">
                  Message
                </label>
                <div className="relative mt-2.5">
                  <div className="pointer-events-none absolute top-3 left-3 flex items-start">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-background/50 py-2 pl-10 pr-3.5 text-foreground shadow-sm ring-1 ring-inset ring-border transition-all focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    placeholder="Tell us about your project..."
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
              >
                Send Message
                <Send className="h-4 w-4" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
