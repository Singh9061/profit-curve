import { Mail, Phone, MapPin } from "lucide-react";

const serviceLinks = ["AI Automation", "Web Development", "SEO", "Social Media Marketing"];
const companyLinks = ["About Us", "Our Process", "Case Studies", "Contact"];
const legalLinks = ["Privacy Policy", "Terms of Service"];

import { motion } from "framer-motion";

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/30 pt-20 pb-10">
      {/* Background decoration */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[500px] -right-[500px] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle,rgba(var(--primary-rgb),0.03)_0%,transparent_70%)]"
      />
      
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 lg:grid-cols-4"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpeg" alt="Profit Curve Logo" className="h-10 w-10 rounded-lg object-cover" />
            <h3 className="text-2xl font-black text-foreground tracking-tight">Profit Curve</h3>
          </div>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed">
            Empowering businesses with AI automation solutions that drive growth and efficiency.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-4 text-sm text-muted-foreground group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Mail className="h-4 w-4 text-primary" />
              </div>
              <span className="group-hover:text-foreground transition-colors">theprofitcurve@gmai.com</span>
            </li>
            <li className="flex items-center gap-4 text-sm text-muted-foreground group">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Phone className="h-4 w-4 text-primary" />
              </div>
              <span className="group-hover:text-foreground transition-colors">+91 80051-50056</span>
            </li>
            <li className="flex items-start gap-4 text-sm text-muted-foreground group">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
              </div>
              <span className="mt-2 group-hover:text-foreground transition-colors">Patrakarpuram, Raebareli 229001</span>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <h4 className="text-lg font-bold text-foreground">Services</h4>
          <ul className="mt-6 space-y-3">
            {serviceLinks.map((l) => (
              <li key={l}>
                <a href="#services" className="group inline-flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-colors">
                  <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <h4 className="text-lg font-bold text-foreground">Company</h4>
          <ul className="mt-6 space-y-3">
            {companyLinks.map((l) => (
              <li key={l}>
                <a href="#" className="group inline-flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-colors">
                  <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
          <h4 className="text-lg font-bold text-foreground">Legal</h4>
          <ul className="mt-6 space-y-3">
            {legalLinks.map((l) => (
              <li key={l}>
                <a href="#" className="group inline-flex items-center gap-2 text-base text-muted-foreground hover:text-primary transition-colors">
                  <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mx-auto mt-20 max-w-7xl border-t border-border/50 px-6 pt-8"
      >
        <p className="text-center text-sm font-medium tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} Profit Curve. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}
