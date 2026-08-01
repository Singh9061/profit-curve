"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";

const team = [
  {
    name: "Vashishtha Yadav",
    role: "Founder",
    email: "vashishthayadav1@gmail.com",
    instagram: "https://www.instagram.com/shiv_vashishtha_?igsh=MWd5anlodmxyYnh6NA==",
    image: "/images/cofounder.jpg",
    bio: "Visionary founder driving innovation and growth at Profit Curve.",
  },
  {
    name: "Devesh Singh Chauhan",
    role: "Co-Founder",
    email: "deveshkv04@gmail.com",
    instagram: "https://www.instagram.com/devx.esh?igsh=c2d3OGJwMjVyenBu",
    image: "/images/founder.jpg",
    bio: "Tech expert building scalable digital solutions for businesses.",
  },
];

export function TeamCarousel() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? team.length - 1 : a - 1));
  const next = () => setActive((a) => (a === team.length - 1 ? 0 : a + 1));

  const getPosition = (index: number) => {
    const diff = (index - active + team.length) % team.length;
    if (diff === 0) return "center";
    if (diff === 1 || (diff === team.length - 1 && team.length === 2)) return "right";
    return "left";
  };

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* 3D Stage */}
      <div
        className="relative flex h-[420px] items-center justify-center sm:h-[480px]"
        style={{ perspective: "1200px" }}
      >
        <AnimatePresence mode="popLayout">
          {team.map((member, index) => {
            const position = getPosition(index);
            const isCenter = position === "center";

            return (
              <motion.div
                key={member.name}
                initial={false}
                animate={{
                  x: position === "center" ? 0 : position === "left" ? -220 : 220,
                  z: isCenter ? 0 : -180,
                  rotateY: position === "center" ? 0 : position === "left" ? 35 : -35,
                  scale: isCenter ? 1 : 0.78,
                  opacity: isCenter ? 1 : 0.55,
                  filter: isCenter ? "blur(0px)" : "blur(1.5px)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className="absolute w-[280px] cursor-pointer sm:w-[320px]"
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => setActive(index)}
              >
                <div className="overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-b from-card to-background shadow-2xl">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden sm:h-60">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-5 text-center sm:p-6">
                    <h3 className="text-lg font-black text-foreground sm:text-xl">{member.name}</h3>
                    <p className="mt-1 text-xs font-bold tracking-wide text-primary sm:text-sm">
                      {member.role}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{member.bio}</p>

                    <div className="mt-4 flex items-center justify-center gap-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:text-xs"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="h-3.5 w-3.5" />
                        Email
                      </a>
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full bg-foreground/10 px-3 py-1.5 text-[10px] font-semibold text-foreground transition-all hover:bg-foreground hover:text-background sm:text-xs"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Instagram
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur transition-all hover:border-primary hover:bg-primary/10"
          aria-label="Previous"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {team.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-primary" : "w-2 bg-muted-foreground/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur transition-all hover:border-primary hover:bg-primary/10"
          aria-label="Next"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
