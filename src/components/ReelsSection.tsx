"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Instagram, Volume2, VolumeX, ExternalLink } from "lucide-react";

/**
 * Add your reel videos here.
 * Put .mp4 files in /public/reels/ then set the src paths below.
 *
 * Recommended mapping:
 * - Video-33824.mp4 (woman in red – Raebareli advertising) → reel1.mp4
 * - Video-47220.mp4 (man on bench with laptop)            → reel2.mp4
 * - Video-31205.mp4 (full services + website demo)         → reel3.mp4
 * - Video-30387.mp4 (Uzma testimonial)                     → reel4.mp4
 */
const reels = [
  {
    id: 1,
    src: "", // /reels/reel1.mp4
    title: "Raebareli Businesses",
    caption: "Mujhe pata hai aap Raebareli se hain...",
  },
  {
    id: 2,
    src: "", // /reels/reel2.mp4
    title: "Digital Marketing Agency",
    caption: "Hello Raebarelians — The Profit Curve is here",
  },
  {
    id: 3,
    src: "", // /reels/reel3.mp4
    title: "Turning Media into Profit",
    caption: "SEO • Social Media • Websites & more",
  },
  {
    id: 4,
    src: "", // /reels/reel4.mp4
    title: "Real Client Results",
    caption: "Uzma Home Baker – growth story",
  },
];

const IG_URL = "https://www.instagram.com/theprofitcurve";

function IPhoneFrame({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto"
      style={{ width: 240, height: 480 }}
    >
      <div
        className="absolute inset-0 rounded-[2.4rem] p-[3px]"
        style={{
          background:
            "linear-gradient(145deg, #3a3a3c 0%, #1c1c1e 40%, #2c2c2e 100%)",
          boxShadow:
            "0 25px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-black">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-2.5 z-30 h-[20px] w-[82px] -translate-x-1/2 rounded-full bg-black" />

          {/* Side buttons */}
          <div className="absolute -left-[3px] top-20 h-7 w-[3px] rounded-l-sm bg-[#2c2c2e]" />
          <div className="absolute -left-[3px] top-32 h-10 w-[3px] rounded-l-sm bg-[#2c2c2e]" />
          <div className="absolute -left-[3px] top-46 h-10 w-[3px] rounded-l-sm bg-[#2c2c2e]" />
          <div className="absolute -right-[3px] top-36 h-14 w-[3px] rounded-r-sm bg-[#2c2c2e]" />

          <div className="absolute inset-[2px] overflow-hidden rounded-[2.05rem]">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ReelPhone({ reel, index }: { reel: (typeof reels)[number]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [hasVideo, setHasVideo] = useState(Boolean(reel.src));

  useEffect(() => {
    setHasVideo(Boolean(reel.src));
  }, [reel.src]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <IPhoneFrame index={index}>
      {hasVideo ? (
        <div className="relative h-full w-full bg-black">
          <video
            ref={videoRef}
            src={reel.src}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onError={() => setHasVideo(false)}
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-3 pb-7 pt-14">
            <p className="text-[13px] font-bold text-white">{reel.title}</p>
            <p className="mt-0.5 text-[11px] text-white/70">{reel.caption}</p>
          </div>

          <button
            onClick={toggleMute}
            className="absolute bottom-7 right-2.5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          </button>

          <div className="absolute left-2.5 top-9 z-20 flex items-center gap-1.5 rounded-full bg-black/40 px-2 py-0.5 backdrop-blur-sm">
            <Instagram className="h-3 w-3 text-white" />
            <span className="text-[9px] font-semibold text-white">@theprofitcurve</span>
          </div>
        </div>
      ) : (
        <a
          href={IG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden"
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(160deg, #0a2e1a 0%, #064e3b 40%, #022c22 100%)",
                "linear-gradient(200deg, #064e3b 0%, #0a2e1a 40%, #14532d 100%)",
                "linear-gradient(160deg, #0a2e1a 0%, #064e3b 40%, #022c22 100%)",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-primary/60"
              style={{
                left: `${18 + i * 15}%`,
                top: `${22 + (i % 3) * 22}%`,
              }}
              animate={{ y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}

          <div className="relative z-10 flex flex-col items-center px-5 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 ring-1 ring-primary/30">
              <Instagram className="h-6 w-6 text-primary" />
            </div>
            <p className="mt-3 text-[13px] font-bold text-white">{reel.title}</p>
            <p className="mt-1 text-[11px] text-white/50">{reel.caption}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold text-primary">
              Watch on Instagram
              <ExternalLink className="h-2.5 w-2.5" />
            </span>
          </div>

          {/* Story progress bars */}
          <div className="absolute left-2.5 right-2.5 top-9 flex gap-1">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/20">
                {i === index % 4 && (
                  <motion.div
                    className="h-full bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </div>
            ))}
          </div>
        </a>
      )}
    </IPhoneFrame>
  );
}

export function ReelsSection() {
  return (
    <section className="relative overflow-hidden border-t border-border/30 bg-background py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary sm:text-sm">
            Watch Us
          </p>
          <h2
            className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif" }}
          >
            Profit Curve{" "}
            <span className="bg-gradient-to-r from-primary to-[oklch(0.7_0.16_145)] bg-clip-text text-transparent">
              Reels
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground sm:mt-4 sm:text-base">
            Real stories from Raebareli — tips, results & behind the scenes.
          </p>
        </motion.div>

        {/* iPhone reels – 4 phones in a responsive row */}
        <div className="mt-12 flex flex-wrap items-start justify-center gap-6 sm:mt-16 sm:gap-8 lg:gap-10">
          {reels.map((reel, i) => (
            <ReelPhone key={reel.id} reel={reel} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center sm:mt-16"
        >
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-primary/20 hover:scale-105"
          >
            <Instagram className="h-4 w-4" />
            Follow @theprofitcurve
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
