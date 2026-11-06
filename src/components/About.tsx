"use client";

import { motion, type Variants } from "framer-motion";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { GraduationCap, Globe2, Compass } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative" aria-label="About section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/8 text-[11px] font-mono text-blue-400 uppercase tracking-widest mb-3">
            01 / Background &amp; Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl">
            Engineering for Real Realities, Not Ideal Assumptions.
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl">
            Software development, AI experimentation, and technological innovation anchored in practical utility and African infrastructure.
          </p>
        </motion.div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Professional Biography (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="lg:col-span-7 craft-card p-7 sm:p-9 rounded-2xl space-y-6"
          >
            <div className="flex items-center gap-2.5 pb-4 border-b border-white/8">
              <Compass size={18} className="text-blue-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">Professional Narrative</h3>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {profile.bioExtended.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Values / Engineering Principles */}
            <div className="pt-6 border-t border-white/8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                Core Engineering Principles
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {profile.principles.map((principle) => (
                  <div
                    key={principle.title}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/6 hover:border-blue-500/25 transition-colors"
                  >
                    <div className="text-xs font-bold text-white flex items-center gap-1.5 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {principle.title}
                    </div>
                    <p className="text-xs text-slate-400 leading-normal">{principle.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Academic Rigor (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="lg:col-span-5 space-y-6"
          >
            {/* Academic Card */}
            <div className="craft-card p-7 sm:p-8 rounded-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/8">
                <div className="flex items-center gap-2.5">
                  <GraduationCap size={18} className="text-indigo-400" />
                  <h3 className="text-lg font-bold text-white tracking-tight">Academic Foundations</h3>
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] border border-white/8">
                  Dual Pursuit
                </span>
              </div>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.institution} className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-bold text-white leading-snug">
                          {edu.degree} in {edu.field}
                        </h4>
                        <p className="text-xs text-blue-400 font-mono mt-0.5">{edu.institution}</p>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.03] border border-white/6 shrink-0">
                        {edu.period}
                      </span>
                    </div>

                    {edu.description && (
                      <p className="text-xs text-slate-300 leading-relaxed">{edu.description}</p>
                    )}

                    {edu.coursework && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/6 text-slate-400"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Focus Highlight */}
            <div className="craft-card p-6 rounded-2xl border-l-2 border-l-blue-500">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
                <Globe2 size={14} />
                <span>African Tech Development</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rather than treating emerging technology as isolated novelty, I focus on applying software engineering, LLM capabilities, and hardware prototypes to solve tangible problems in livestock management, property transparency, and childhood education across Nigeria.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
