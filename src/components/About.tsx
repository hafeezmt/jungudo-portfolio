"use client";

import { motion, type Variants } from "framer-motion";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { GraduationCap, Compass, Globe2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function About() {
  return (
    <section id="about" className="py-24 sm:py-36 relative hairline-b" aria-label="About section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            04 &bull; Engineering Philosophy
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl">
            Context-Aware Systems for Africa
          </h2>
          <p className="mt-3 text-zinc-400 text-base max-w-2xl">
            Software engineering and applied intelligence rooted in operational realities, low-latency interfaces, and grassroots infrastructure.
          </p>
        </motion.div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Biography Narrative (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#09090b] border border-white/[0.08] space-y-6"
          >
            <div className="flex items-center gap-2.5 pb-4 hairline-b">
              <Compass size={18} className="text-white" />
              <h3 className="text-lg font-bold text-white tracking-tight">Professional Narrative</h3>
            </div>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
              {profile.bioExtended.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Core Values / Principles */}
            <div className="pt-6 hairline-t">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4">
                Core Engineering Principles
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.principles.map((principle) => (
                  <div
                    key={principle.title}
                    className="p-4 rounded-xl bg-black/50 border border-white/[0.05] space-y-1"
                  >
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      {principle.title}
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{principle.desc}</p>
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
            <div className="p-8 rounded-2xl bg-[#09090b] border border-white/[0.08] space-y-6">
              <div className="flex items-center justify-between pb-4 hairline-b">
                <div className="flex items-center gap-2.5">
                  <GraduationCap size={18} className="text-white" />
                  <h3 className="text-base font-bold text-white tracking-tight">Academic Foundations</h3>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04]">
                  Dual Focus
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
                        <p className="text-xs text-zinc-400 font-mono mt-0.5">{edu.institution}</p>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 shrink-0">
                        {edu.period}
                      </span>
                    </div>

                    {edu.description && (
                      <p className="text-xs text-zinc-400 leading-relaxed">{edu.description}</p>
                    )}

                    {edu.coursework && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-zinc-400"
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

            {/* Regional Focus Callout */}
            <div className="p-6 rounded-2xl bg-[#09090b] border border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 uppercase tracking-wider mb-2">
                <Globe2 size={14} className="text-white" />
                <span>Regional Impact</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Rather than treating emerging technology as isolated novelty, I focus on applying software engineering, LLM capabilities, and hardware prototypes to solve tangible problems in livestock management, property transparency, and childhood education across Nigeria.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
