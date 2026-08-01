"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Phone, CheckCircle2 } from "lucide-react";
import { AuroraBackground } from "./AuroraBackground";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = form;

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

  const inputClass =
    "block w-full rounded-xl border-0 bg-background/80 py-2.5 pl-10 pr-4 text-sm text-foreground shadow-sm ring-1 ring-inset ring-border transition-all placeholder:text-muted-foreground/60 focus:bg-background focus:ring-2 focus:ring-inset focus:ring-primary sm:pl-11 sm:text-sm";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32"
    >
      <AuroraBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-extrabold uppercase tracking-widest text-primary sm:text-sm">
            Contact
          </p>
          <h2
            className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl xl:text-5xl"
            style={{ fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif" }}
          >
            Get in Touch
          </h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground sm:mt-4 sm:text-base lg:text-lg">
            Ready to supercharge your business? Fill out the form and we&apos;ll reply on WhatsApp
            instantly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-10 max-w-xl sm:mt-14 lg:mt-16"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border/60 bg-card/80 p-8 text-center shadow-2xl backdrop-blur-sm sm:gap-4 sm:rounded-3xl sm:p-12"
            >
              <CheckCircle2 className="h-12 w-12 text-primary sm:h-16 sm:w-16" />
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">Message Sent! 🎉</h3>
              <p className="text-sm text-muted-foreground sm:text-base">
                WhatsApp pe humara message chala gaya hai. Humari team jaldi reply karegi!
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", phone: "", message: "" });
                }}
                className="mt-3 rounded-full border border-primary px-5 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:mt-4 sm:px-6 sm:py-2.5"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="group relative rounded-2xl border border-border/60 bg-card/80 p-6 shadow-[0_0_50px_oklch(0.55_0.18_155/0.1)] backdrop-blur-sm sm:rounded-3xl sm:p-8 lg:p-10"
            >
              {/* Glow border on hover */}
              <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 opacity-0 blur-sm transition duration-500 group-hover:opacity-100 sm:rounded-3xl" />

              <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
                {/* Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                    Name <span className="text-primary">*</span>
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                      <User className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className={inputClass}
                      placeholder="Vashishtha"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                    Email
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className={inputClass}
                      placeholder="vashishtha@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
                    Phone <span className="text-primary">*</span>
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      className={inputClass}
                      placeholder="+91 80051-50056"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                    Message
                  </label>
                  <div className="relative mt-2">
                    <div className="pointer-events-none absolute left-3.5 top-3">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none pt-2.5`}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_0_30px_oklch(0.55_0.18_155/0.3)] transition-all hover:shadow-[0_0_50px_oklch(0.55_0.18_155/0.5)] sm:px-8 sm:py-4"
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
