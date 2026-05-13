"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Phone, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = form;

    // Build a WhatsApp message from the form data
    const text = [
      `*New Inquiry from Profit Curve Website* 🚀`,
      ``,
      `*Name:* ${name}`,
      email ? `*Email:* ${email}` : null,
      phone ? `*Phone:* ${phone}` : null,
      message ? `*Message:* ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/918005150056?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)] sm:text-3xl lg:text-4xl" style={{ fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif" }}>
            Get in Touch
          </h2>
          <p className="mt-3 text-sm leading-7 text-cyan-100 sm:mt-4 sm:text-base lg:text-lg">
            Ready to supercharge your business? Fill out the form and we&apos;ll reply on WhatsApp instantly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-10 max-w-xl sm:mt-16 lg:mt-20"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-card p-8 text-center shadow-2xl ring-1 ring-border sm:gap-4 sm:rounded-3xl sm:p-12"
            >
              <CheckCircle2 className="h-12 w-12 text-primary sm:h-16 sm:w-16" />
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">Message Sent! 🎉</h3>
              <p className="text-sm text-muted-foreground sm:text-base">
                WhatsApp pe humara message chala gaya hai. Humari team jaldi reply karegi!
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                className="mt-3 rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:mt-4 sm:px-6 sm:py-2.5"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="group relative rounded-2xl bg-slate-950/95 p-6 shadow-[0_0_60px_rgba(34,211,238,0.15)] ring-1 ring-cyan-400/20 sm:rounded-3xl sm:p-8 lg:p-10"
            >
              <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-primary to-[oklch(0.6_0.15_140)] opacity-20 blur transition duration-500 group-hover:opacity-40 sm:rounded-3xl" />

              <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-semibold leading-6 text-foreground">
                    Name <span className="text-primary">*</span>
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <User className="h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className="block w-full rounded-md border-0 bg-white/95 py-2 pl-9 pr-3 text-sm text-slate-950 placeholder:text-muted-foreground shadow-sm ring-1 ring-inset ring-slate-300 transition-all focus:bg-white focus:text-slate-950 focus:ring-2 focus:ring-inset focus:ring-cyan-400 sm:pl-10 sm:pr-3.5 sm:text-sm sm:leading-6"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-foreground">
                    Email
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail className="h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-white/95 py-2 pl-9 pr-3 text-sm text-slate-950 placeholder:text-muted-foreground shadow-sm ring-1 ring-inset ring-slate-300 transition-all focus:bg-white focus:text-slate-950 focus:ring-2 focus:ring-inset focus:ring-cyan-400 sm:pl-10 sm:pr-3.5 sm:text-sm sm:leading-6"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-foreground">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Phone className="h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 bg-white/95 py-2 pl-9 pr-3 text-sm text-slate-950 placeholder:text-muted-foreground shadow-sm ring-1 ring-inset ring-slate-300 transition-all focus:bg-white focus:text-slate-950 focus:ring-2 focus:ring-inset focus:ring-cyan-400 sm:pl-10 sm:pr-3.5 sm:text-sm sm:leading-6"
                      placeholder="+91 80051-50056"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-foreground">
                    Message
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute top-3 left-3 flex items-start">
                      <MessageSquare className="h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 bg-white/95 py-2 pl-9 pr-3 text-sm text-slate-950 placeholder:text-muted-foreground shadow-sm ring-1 ring-inset ring-slate-300 transition-all focus:bg-white focus:text-slate-950 focus:ring-2 focus:ring-inset focus:ring-cyan-400 sm:pl-10 sm:pr-3.5 sm:text-sm sm:leading-6"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 sm:px-8 sm:py-3.5"
                >
                  Send via WhatsApp
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
