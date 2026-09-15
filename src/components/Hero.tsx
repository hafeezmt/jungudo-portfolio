"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, MapPin, Sparkles, Code, Cpu, Layout, Award } from "lucide-react";
import { profile } from "@/data/profile";

const CYCLING_TITLES = [
  "UI/UX Lead @ PropaBridge",
  "Founder & Lead @ WizzyAI",
  "Co-Founder @ AgriSense IoT",
  "B.Sc. Computer Science & Stats",
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % CYCLING_TITLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Background Glows & Grid ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-blue-600/12 via-purple-600/8 to-cyan-400/10 rounded-full blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ─────────── LEFT COLUMN: Main Spotlight (7 cols) ─────────── */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">

            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-blue-400"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={CYCLING_TITLES[titleIndex]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="font-semibold text-white/90"
                >
                  {CYCLING_TITLES[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                Designing &amp; Building{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                  Human-Centred Digital Products.
                </span>
              </h1>
            </motion.div>

            {/* Short Subhead / Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              {profile.bio}
            </motion.p>

            {/* Location & Status Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400"
            >
              <span className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.02] border border-white/6 rounded-lg">
                <MapPin size={13} className="text-blue-400" />
                {profile.location}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for Product &amp; Design Roles
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(59,130,246,0.4)]"
              >
                <Sparkles size={15} />
                Explore Projects
                <ArrowRight size={15} />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/[0.04] border border-white/10 text-white text-sm font-medium rounded-xl hover:bg-white/8 hover:border-white/20 transition-all"
              >
                Let&apos;s Connect
              </Link>

              {profile.cvAvailable && (
                <a
                  href={profile.cv}
                  download
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-slate-400 text-sm font-medium hover:text-white transition-colors"
                >
                  <Download size={14} />
                  Download CV
                </a>
              )}
            </motion.div>

            {/* Quick Skills Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2"
            >
              {profile.roles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 text-[11px] font-medium text-slate-400 bg-white/[0.02] border border-white/6 rounded-lg"
                >
                  {role}
                </span>
              ))}
            </motion.div>

          </div>

          {/* ─────────── RIGHT COLUMN: Bento Portrait & Metric Cards (5 cols) ─────────── */}
          <div className="lg:col-span-5 flex flex-col items-center gap-5">
            
            {/* Bento Portrait Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative w-full max-w-[340px] sm:max-w-[380px]"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 via-purple-600/20 to-cyan-400/20 rounded-[2rem] blur-2xl opacity-70" />

              {/* Card Container */}
              <div className="relative bento-card p-4 rounded-[2rem] overflow-hidden border border-white/10 bg-[#0d0d15]/90">
                {/* Photo Frame */}
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden border border-white/10 bg-[#07070b]">
                  <Image
                    src={profile.profileImage}
                    alt={`${profile.name} — Profile Photo`}
                    fill
                    className="object-cover object-top scale-105"
                    priority
                    sizes="(max-width: 640px) 340px, 380px"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0d15] via-[#0d0d15]/40 to-transparent" />
                </div>

                {/* Overlaid Floating Bento Chips */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 left-6 right-6 p-3 bg-[#0d0d16]/90 border border-white/10 rounded-xl backdrop-blur-md shadow-2xl flex items-center justify-between"
                >
                  <div>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Current Focus</p>
                    <p className="text-xs font-bold text-white mt-0.5">WizzyAI &amp; PropaBridge</p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Sparkles size={14} />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Bento Quick Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-2 gap-3 w-full max-w-[340px] sm:max-w-[380px]"
            >
              <div className="bento-card p-4 rounded-2xl bg-white/[0.02] border border-white/6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
                  <Layout size={18} />
                </div>
                <div>
                  <p className="text-base font-extrabold text-white">4+ Products</p>
                  <p className="text-[10px] text-slate-400 font-mono">Designed &amp; Built</p>
                </div>
              </div>

              <div className="bento-card p-4 rounded-2xl bg-white/[0.02] border border-white/6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400 shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <p className="text-base font-extrabold text-white">iHatch Cohort 5</p>
                  <p className="text-[10px] text-slate-400 font-mono">AgriSense Accelerator</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
