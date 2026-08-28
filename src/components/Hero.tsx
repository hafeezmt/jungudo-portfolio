"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

function DataNode({
  label,
  color,
  cx,
  cy,
  delay = 0,
}: {
  label: string;
  color: string;
  cx: number;
  cy: number;
  delay?: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      <circle cx={cx} cy={cy} r={28} fill="rgba(0,0,0,0.6)" stroke={color} strokeWidth={1} />
      <text
        x={cx}
        y={cy + 5}
        textAnchor="middle"
        fill="white"
        fontSize="9"
        fontFamily="monospace"
        opacity={0.9}
      >
        {label}
      </text>
    </motion.g>
  );
}

export function Hero() {
  const hasProfileImage = true; // Profile image active

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left — Text */}
        <div className="space-y-8 order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/8 text-xs font-medium tracking-widest text-blue-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Statistics · AI · Data · Technology
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
              Turning Data &amp; Ideas Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400">
                Real-World Solutions.
              </span>
            </h1>
          </motion.div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-white/50 max-w-xl leading-relaxed"
          >
            {profile.bio}
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-1.5 text-sm text-white/30"
          >
            <MapPin size={13} />
            <span>{profile.location}</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore My Work
              <ArrowRight size={15} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all"
            >
              Let&apos;s Connect
            </Link>
            {profile.cvAvailable ? (
              <a
                href={profile.cv}
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white/50 text-sm font-medium hover:text-white transition-colors"
              >
                <Download size={14} />
                Download CV
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-6 py-3 text-white/20 text-sm cursor-not-allowed" title="CV coming soon">
                <Download size={14} />
                CV (Soon)
              </span>
            )}
          </motion.div>
        </div>

        {/* Right — Profile Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex items-center justify-center"
        >
          {hasProfileImage ? (
            <div className="relative w-[280px] sm:w-[340px] lg:w-[380px] aspect-[4/5]">
              {/* Glow */}
              <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl" />
              {/* Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl bg-[#0d0d14]">
                <Image
                  src={profile.profileImage}
                  alt={`${profile.name} — Profile Photo`}
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                />
                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0d0d14]/80 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-[#0f0f0f] border border-white/8 rounded-xl px-4 py-3 shadow-2xl"
              >
                <p className="text-xs text-white/40 font-mono">Currently</p>
                <p className="text-sm font-semibold text-white mt-0.5">Building & Learning</p>
              </motion.div>
            </div>
          ) : (
            // Abstract data visualization (placeholder until real image added)
            <div className="relative w-[280px] sm:w-[340px] lg:w-[380px] aspect-[4/5] flex items-center justify-center">
              {/* Glow */}
              <div className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-3xl" />
              <div className="relative w-full h-full bg-white/2 border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 300 370" className="w-full h-full p-4" aria-label="Abstract data visualization">
                  {/* Center node */}
                  <motion.circle
                    cx={150} cy={185} r={42}
                    fill="rgba(59,130,246,0.15)"
                    stroke="rgba(59,130,246,0.4)"
                    strokeWidth={1.5}
                    animate={{ r: [42, 46, 42] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <text x={150} y={180} textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="bold" fontFamily="monospace">JUNGUDO</text>
                  <text x={150} y={195} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace">Muhammad Tukur</text>

                  {/* Connection lines */}
                  {[
                    { x2: 60, y2: 80 }, { x2: 240, y2: 80 },
                    { x2: 40, y2: 185 }, { x2: 260, y2: 185 },
                    { x2: 80, y2: 300 }, { x2: 220, y2: 300 },
                  ].map((line, i) => (
                    <motion.line
                      key={i}
                      x1={150} y1={185} x2={line.x2} y2={line.y2}
                      stroke="rgba(59,130,246,0.15)"
                      strokeWidth={1}
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: i * 0.2, duration: 1 }}
                    />
                  ))}

                  {/* Satellite nodes */}
                  <DataNode label="AI" color="rgba(139,92,246,0.6)" cx={60} cy={80} delay={0.3} />
                  <DataNode label="DATA" color="rgba(59,130,246,0.6)" cx={240} cy={80} delay={0.5} />
                  <DataNode label="GIS" color="rgba(34,211,238,0.6)" cx={40} cy={185} delay={0.4} />
                  <DataNode label="IoT" color="rgba(16,185,129,0.6)" cx={260} cy={185} delay={0.6} />
                  <DataNode label="STATS" color="rgba(245,158,11,0.6)" cx={80} cy={300} delay={0.7} />
                  <DataNode label="UX" color="rgba(236,72,153,0.6)" cx={220} cy={300} delay={0.8} />
                </svg>

                {/* Add your photo hint */}
                <div className="absolute inset-x-0 bottom-0 border-t border-white/5 bg-black/40 backdrop-blur-sm px-4 py-3">
                  <p className="text-xs text-white/30 text-center font-mono">[ profile photo placeholder ]</p>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-[#0f0f0f] border border-white/8 rounded-xl px-4 py-3 shadow-2xl"
              >
                <p className="text-xs text-white/40 font-mono">Based in</p>
                <p className="text-sm font-semibold text-white mt-0.5">Gombe, Nigeria 🇳🇬</p>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
