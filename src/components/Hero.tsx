"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa6";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section
      id="overview"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 overflow-hidden hairline-b"
      aria-label="Overview section"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none select-none ambient-glow-top" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Executive Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Meta indicator */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profile.availabilityText}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono text-zinc-400">
                <MapPin size={11} className="text-zinc-400" />
                <span>Gombe State, Nigeria</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] max-w-2xl">
                Building Technology That Solves Real-World Problems.
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              {profile.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                href="#work"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black text-sm font-semibold transition-all shadow-[0_0_24px_rgba(255,255,255,0.2)]"
              >
                <span>Explore Selected Work</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-white text-sm font-medium transition-all"
              >
                <span>Let&apos;s Connect</span>
              </Link>

              {profile.cvAvailable && (
                <a
                  href={profile.cv}
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  <Download size={14} />
                  <span>Resume PDF</span>
                </a>
              )}
            </motion.div>

            {/* Social channels */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-mono text-zinc-400"
            >
              <span className="text-zinc-600 uppercase tracking-widest text-[10px]">Profiles:</span>
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#0077b5] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href={socialLinks.devto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label="Dev.to"
                >
                  <FaDev size={16} />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Executive Portrait Spotlight (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-[380px] space-y-4"
            >
              <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] shadow-2xl">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black border border-white/[0.08]">
                  <Image
                    src={profile.profileImage}
                    alt={`${profile.name} — Software Developer & Technology Innovator`}
                    fill
                    priority
                    className="object-cover object-[center_15%]"
                    sizes="(max-width: 640px) 340px, 380px"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Subtle lower status */}
                  <div className="absolute bottom-4 inset-x-4 p-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/[0.08]">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-zinc-400 uppercase tracking-wider">Focus</span>
                      <span className="text-white font-semibold">AI &bull; IoT &bull; Fullstack</span>
                    </div>
                    <div className="text-xs text-zinc-300 font-sans mt-0.5">
                      AgriSense IoT &bull; ListingWriter &bull; PropaBridge
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Metrics row */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <div className="text-white font-bold text-sm">iHatch Cohort 5</div>
                  <div className="text-zinc-500 text-[10px]">AgriSense IoT Accelerator</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center">
                  <div className="text-white font-bold text-sm">Open Source</div>
                  <div className="text-zinc-500 text-[10px]">ListingWriter Creator</div>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
