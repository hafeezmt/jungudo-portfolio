"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Terminal,
  Download,
  Code2,
  Cpu,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa6";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { cn } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
  }),
};

const SYSTEM_TELEMETRY = [
  {
    id: "agrisense",
    label: "AgriSense IoT",
    tag: "Offline-First",
    snippet: "Sensor Node (ESP32) → GSM/SMS Gateway → Local Siren Alert [Zero Internet]",
    status: "Active Prototype",
  },
  {
    id: "listingwriter",
    label: "ListingWriter",
    tag: "Open Source AI",
    snippet: "Raw Property Specs → Regional LLM Prompts → WhatsApp / IG Copy [Next.js]",
    status: "Published OSS",
  },
  {
    id: "propabridge",
    label: "PropaBridge",
    tag: "Production",
    snippet: "Realtor Affiliate UX → Anti-Fraud Verification Flow → Framer CMS Engine",
    status: "In Production",
  },
];

export function Hero() {
  const [activeTelemetry, setActiveTelemetry] = useState(0);

  return (
    <section
      id="overview"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-32 pb-20 overflow-hidden"
      aria-label="Overview & Hero section"
    >
      {/* Background Grid Pattern with Radial Falloff */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-gradient-to-b from-blue-600/[0.08] via-indigo-600/[0.03] to-transparent rounded-full blur-[140px]" />
        <div className="absolute inset-0 grid-mesh opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ─────────── LEFT COLUMN: Brand Identity & Positioning (7 cols) ─────────── */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Status & Location Pill */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900/90 border border-white/[0.08] text-[11px] font-mono text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profile.availabilityText}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-zinc-400">
                <MapPin size={11} className="text-blue-400" />
                <span>{profile.location}</span>
              </div>
            </motion.div>

            {/* Main Statement */}
            <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] max-w-2xl">
                Building Technology That Solves{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-zinc-100">
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
              className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              {profile.description}
            </motion.p>

            {/* Interactive Architecture Console / Telemetry Strip */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="p-4 rounded-xl bg-zinc-950/70 border border-white/[0.08] backdrop-blur-md space-y-3 text-left max-w-2xl mx-auto lg:mx-0"
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.06] text-[11px] font-mono">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Terminal size={13} className="text-blue-400" />
                  <span>SYSTEM ARCHITECTURE PREVIEW</span>
                </div>
                <div className="flex items-center gap-1">
                  {SYSTEM_TELEMETRY.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTelemetry(idx)}
                      className={cn(
                        "px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer",
                        activeTelemetry === idx
                          ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                          : "text-zinc-500 hover:text-zinc-300"
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                <div className="text-zinc-300 truncate">
                  <span className="text-zinc-500 mr-2">$</span>
                  <span className="text-blue-300">{SYSTEM_TELEMETRY[activeTelemetry].snippet}</span>
                </div>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-white/[0.04] border border-white/[0.08] text-zinc-400 shrink-0">
                  {SYSTEM_TELEMETRY[activeTelemetry].status}
                </span>
              </div>
            </motion.div>

            {/* CTAs & Social Links */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-[0_0_24px_rgba(59,130,246,0.3)] hover:shadow-[0_0_32px_rgba(59,130,246,0.5)] transition-all"
              >
                <span>Explore My Work</span>
                <ArrowRight size={15} />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/[0.08] hover:border-white/20 text-zinc-200 text-sm font-medium transition-all"
              >
                <span>Let&apos;s Connect</span>
              </Link>

              {profile.cvAvailable && (
                <a
                  href={profile.cv}
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                  title="Download Curriculum Vitae"
                >
                  <Download size={14} />
                  <span>Resume PDF</span>
                </a>
              )}
            </motion.div>

            {/* Verified Developer Channels */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center justify-center lg:justify-start gap-3 pt-1 text-xs font-mono text-zinc-400"
            >
              <span className="text-zinc-600 uppercase tracking-wider text-[10px]">Profiles:</span>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/20 text-zinc-400 hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <FaGithub size={14} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-[#0077b5]/50 text-zinc-400 hover:text-[#0077b5] transition-all"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={14} />
              </a>
              <a
                href={socialLinks.devto}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/20 text-zinc-400 hover:text-white transition-all"
                aria-label="Dev.to Articles"
              >
                <FaDev size={14} />
              </a>
            </motion.div>

          </div>

          {/* ─────────── RIGHT COLUMN: Studio Portrait & Architectural Spec (5 cols) ─────────── */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="w-full max-w-[360px] sm:max-w-[400px] space-y-4"
            >
              {/* Studio Portrait Container */}
              <div className="relative studio-surface studio-surface-interactive rounded-2xl p-3 overflow-hidden shadow-2xl">
                {/* Visual Corner Crosshair Accents */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-zinc-600 select-none">+</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-zinc-600 select-none">+</div>
                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-zinc-600 select-none">+</div>
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-zinc-600 select-none">+</div>

                {/* Photo Frame */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-zinc-950 border border-white/[0.08]">
                  <Image
                    src={profile.profileImage}
                    alt={`${profile.name} — Software Developer & Technology Innovator`}
                    fill
                    priority
                    className="object-cover object-[center_15%] filter brightness-[0.98] contrast-[1.02]"
                    sizes="(max-width: 640px) 340px, 400px"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/60 to-transparent" />
                  
                  {/* Subtle In-Card System Badge */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-lg bg-zinc-950/85 border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span className="text-zinc-200 font-semibold">Active Systems</span>
                      </div>
                      <span className="text-blue-400">Nigeria</span>
                    </div>
                    <div className="text-xs font-semibold text-white mt-1">
                      AgriSense IoT • ListingWriter • PropaBridge
                    </div>
                  </div>
                </div>
              </div>

              {/* Engineering Metric Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div className="studio-surface p-3.5 rounded-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Code2 size={15} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Fullstack &amp; AI</div>
                    <div className="text-[10px] font-mono text-zinc-500">TypeScript / Next / LLMs</div>
                  </div>
                </div>

                <div className="studio-surface p-3.5 rounded-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Cpu size={15} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Offline-First IoT</div>
                    <div className="text-[10px] font-mono text-zinc-500">iHatch Cohort 5</div>
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
