"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { achievements } from "@/data/achievements";
import { Award, GraduationCap, Compass, ArrowUpRight } from "lucide-react";

function SectionHeader({ title, subtitle, number }: { title: string; subtitle?: string; number: string }) {
  return (
    <div className="mb-12">
      <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">
        {number} — {title}
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-slate-400 text-base max-w-xl">{subtitle}</p>}
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative" aria-label="About section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader number="01" title="About Me" subtitle="My philosophy, educational background, and journey as a tech entrepreneur." />
        </motion.div>

        {/* ── Main Bio & Currently Bento Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          
          {/* Extended Bio (8 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 bento-card p-7 sm:p-9 rounded-3xl space-y-5"
          >
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Compass size={20} className="text-blue-400" />
              Human-Centred &amp; Impact-Driven
            </h3>

            {profile.bioExtended.split("\n\n").map((para, i) => (
              <p key={i} className="text-base text-slate-300 leading-relaxed">
                {para}
              </p>
            ))}

            {/* Approach Pills */}
            <div className="pt-4 border-t border-white/8">
              <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Product Development Lifecycle</p>
              <div className="flex flex-wrap items-center gap-2">
                {["Learn User Needs", "Prototype Fast", "Test Offline/Online", "Iterate UI/UX", "Create Impact"].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold rounded-lg">
                      {step}
                    </span>
                    {i < arr.length - 1 && <span className="text-slate-600 text-xs">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Currently Card (4 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 bento-card p-7 sm:p-9 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <h3 className="text-base font-bold text-white">Currently Focus</h3>
              </div>
              <ul className="space-y-3.5">
                {profile.currently.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="text-blue-400 font-mono mt-0.5 shrink-0">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/8 flex items-center justify-between text-xs text-slate-400">
              <span>Gombe State, Nigeria</span>
              <span className="font-mono text-blue-400">2026</span>
            </div>
          </motion.div>

        </div>

        {/* ── Education & Achievements Bento Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">

          {/* Education (6 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 bento-card p-7 sm:p-9 rounded-3xl space-y-6"
          >
            <div className="flex items-center gap-2">
              <GraduationCap size={22} className="text-blue-400" />
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-5">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="p-5 bg-white/[0.02] border border-white/6 rounded-2xl space-y-2 hover:border-white/12 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-white text-base">{edu.institution}</h4>
                      <p className="text-xs text-blue-400 font-medium">{edu.degree} — {edu.field}</p>
                    </div>
                    <span className="shrink-0 px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 text-[11px] font-mono border border-green-500/20">
                      {edu.status}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="text-xs text-slate-400 leading-relaxed">{edu.description}</p>
                  )}
                  {edu.coursework && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {edu.coursework.map((c) => (
                        <span key={c} className="px-2 py-0.5 bg-white/5 text-slate-400 text-[10px] rounded">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Recognition (6 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-6 bento-card p-7 sm:p-9 rounded-3xl space-y-6"
          >
            <div className="flex items-center gap-2">
              <Award size={22} className="text-purple-400" />
              <h3 className="text-xl font-bold text-white">Achievements &amp; Milestones</h3>
            </div>

            <div className="space-y-4">
              {achievements.map((ach) => (
                <div
                  key={ach.title}
                  className="p-5 bg-purple-500/[0.03] border border-purple-500/12 rounded-2xl hover:border-purple-500/25 transition-all space-y-1.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-bold text-white text-sm">{ach.title}</h4>
                    {ach.year && (
                      <span className="shrink-0 text-xs font-mono text-purple-400">{ach.year}</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{ach.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── Journey Timeline ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bento-card p-7 sm:p-9 rounded-3xl"
        >
          <h3 className="text-xl font-bold text-white mb-8">My Career &amp; Project Journey</h3>
          <div className="relative">
            <div className="hidden md:block absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />
            <div className="space-y-8">
              {profile.journey.map((step, i) => (
                <motion.div
                  key={step.stage}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-lg">
                    {step.icon}
                  </div>
                  <div className="pb-2">
                    <h4 className="font-bold text-white text-base mb-1">{step.stage}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
