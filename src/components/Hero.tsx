"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4.5rem)] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Background glows ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-[130px] translate-x-1/4 translate-y-1/4" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── LEFT — Text ── */}
        <div className="space-y-7 order-2 lg:order-1">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-semibold tracking-widest text-blue-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Statistics · AI · Data · Technology
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-bold tracking-tight leading-[1.08] text-white">
              Turning Data &amp; Ideas
              <br />
              Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400">
                Real-World Solutions.
              </span>
            </h1>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-white/50 max-w-[520px] leading-relaxed"
          >
            {profile.bio}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
          >
            <span className="inline-flex items-center gap-1.5 text-sm text-white/30">
              <MapPin size={13} className="text-blue-400" />
              {profile.location}
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-3 pt-1"
          >
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-bold rounded-full hover:bg-blue-50 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              Explore My Work <ArrowRight size={15} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 border border-white/12 text-white text-sm font-medium rounded-full hover:bg-white/10 hover:border-white/20 transition-all"
            >
              Let&apos;s Connect
            </Link>
            {profile.cvAvailable ? (
              <a href={profile.cv} download className="inline-flex items-center gap-2 px-5 py-3.5 text-white/40 text-sm hover:text-white transition-colors">
                <Download size={14} /> Download CV
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-5 py-3.5 text-white/20 text-sm cursor-not-allowed">
                <Download size={14} /> CV Soon
              </span>
            )}
          </motion.div>

          {/* Role tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-2 pt-1"
          >
            {profile.roles.map((role) => (
              <span key={role} className="px-3 py-1 text-[11px] font-medium text-white/35 bg-white/[0.04] border border-white/[0.06] rounded-full">
                {role}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT — Circular Profile Photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-1 lg:order-2 flex items-center justify-center"
        >
          <div className="relative flex items-center justify-center">
            {/* Outer pulsing ring */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.15, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full border border-blue-500/30"
            />
            {/* Middle ring */}
            <motion.div
              animate={{ scale: [1, 1.04, 1], opacity: [0.2, 0.08, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full border border-blue-400/20"
            />

            {/* Glow behind photo */}
            <div className="absolute w-[260px] h-[260px] sm:w-[290px] sm:h-[290px] lg:w-[320px] lg:h-[320px] rounded-full bg-blue-600/20 blur-2xl" />

            {/* Circle photo frame */}
            <div className="relative w-[260px] h-[260px] sm:w-[290px] sm:h-[290px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-2 border-blue-500/30 bg-black shadow-[0_0_60px_rgba(59,130,246,0.25)]">
              <Image
                src={profile.profileImage}
                alt={`${profile.name} — Profile Photo`}
                width={640}
                height={640}
                className="w-full h-full object-cover object-top scale-110"
                priority
              />
            </div>

            {/* Floating badge — Location */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 bg-[#0f0f18] border border-white/10 rounded-xl px-4 py-2.5 shadow-2xl backdrop-blur-sm"
            >
              <p className="text-[10px] text-white/35 font-mono tracking-wider mb-0.5">Based in</p>
              <p className="text-sm font-semibold text-white">Gombe, Nigeria 🇳🇬</p>
            </motion.div>

            {/* Floating badge — Status */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 bg-[#0f0f18] border border-green-500/20 rounded-xl px-4 py-2.5 shadow-2xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-sm font-semibold text-white">Open to Collaborate</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
