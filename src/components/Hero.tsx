"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Download,
  Code2,
  Cpu,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa6";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent rounded-full blur-[140px]" />
        <div className="absolute inset-0 tech-grid-pattern opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ─────────── LEFT COLUMN: Brand Statement & CTA (7 cols) ─────────── */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Monospace Identifier & Status Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] border border-white/8 text-[11px] font-mono uppercase tracking-wider text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Jungudo Muhammad Tukur
              </span>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{profile.availabilityText}</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] max-w-2xl">
                Building Technology That Solves{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
                  Real-World Problems.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Description */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              {profile.description}
            </motion.p>

            {/* Location & Roles Strip */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono text-slate-400"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/8">
                <MapPin size={13} className="text-blue-400" />
                <span>{profile.location}</span>
              </span>

              <div className="hidden sm:flex items-center gap-1.5">
                {profile.roles.slice(0, 3).map((role) => (
                  <span
                    key={role}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/6 text-slate-400 text-[11px]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Primary & Secondary CTAs */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:shadow-[0_0_32px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white text-sm font-medium transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Let&apos;s Connect</span>
              </Link>

              {profile.cvAvailable && (
                <a
                  href={profile.cv}
                  download
                  className="inline-flex items-center gap-2 px-4 py-3.5 text-slate-400 hover:text-white text-sm font-medium transition-colors"
                >
                  <Download size={15} />
                  <span>CV</span>
                </a>
              )}
            </motion.div>

            {/* Social Proof Channels */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-slate-400 text-xs font-mono"
            >
              <span className="text-slate-500 text-[11px] uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] border border-white/8 text-slate-300 hover:text-white hover:bg-white/[0.08] hover:border-blue-500/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={15} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] border border-white/8 text-slate-300 hover:text-[#0077b5] hover:bg-white/[0.08] hover:border-[#0077b5]/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={15} />
                </a>
                <a
                  href={socialLinks.devto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] border border-white/8 text-slate-300 hover:text-white hover:bg-white/[0.08] hover:border-white/30 transition-all"
                  aria-label="Dev.to Articles"
                >
                  <FaDev size={15} />
                </a>
              </div>
            </motion.div>

          </div>

          {/* ─────────── RIGHT COLUMN: Architectural Portrait & Tech Telemetry (5 cols) ─────────── */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-[360px] sm:max-w-[400px] space-y-4"
            >
              {/* Portrait Frame */}
              <div className="relative craft-card rounded-2xl p-3 overflow-hidden shadow-2xl">
                {/* Visual Corner Accents */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-bl-full pointer-events-none" />
                
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#090a0f] border border-white/10">
                  <Image
                    src={profile.profileImage}
                    alt={`${profile.name} — Software Developer & Technology Innovator`}
                    fill
                    priority
                    className="object-cover object-top filter brightness-[0.98] contrast-[1.02]"
                    sizes="(max-width: 640px) 340px, 400px"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0b0c12] via-[#0b0c12]/60 to-transparent" />
                  
                  {/* Subtle telemetry overlay */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-lg bg-[#0c0d14]/85 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-[11px] font-mono text-slate-300 font-medium">Systems Active</span>
                      </div>
                      <span className="text-[10px] font-mono text-blue-400">Nigeria</span>
                    </div>
                    <p className="text-xs font-semibold text-white mt-1">
                      AgriSense IoT • ListingWriter • PropaBridge
                    </p>
                  </div>
                </div>
              </div>

              {/* Engineered Micro-Metrics Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="craft-card p-3.5 rounded-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Code2 size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Fullstack &amp; AI</div>
                    <div className="text-[10px] font-mono text-slate-400">TypeScript / Next / LLMs</div>
                  </div>
                </div>

                <div className="craft-card p-3.5 rounded-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                    <Cpu size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Offline-First IoT</div>
                    <div className="text-[10px] font-mono text-slate-400">iHatch Cohort 5</div>
                  </div>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
