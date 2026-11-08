"use client";

import { motion, type Variants } from "framer-motion";
import { achievements } from "@/data/achievements";
import { Award, Presentation, Code2, Sparkles, GraduationCap, Trophy } from "lucide-react";

const categoryIcons = {
  "Innovation & Startup": <Trophy size={16} className="text-blue-400" />,
  "Technical Presentation": <Presentation size={16} className="text-purple-400" />,
  "Hackathon": <Sparkles size={16} className="text-emerald-400" />,
  "Open Source": <Code2 size={16} className="text-cyan-400" />,
  "Academic": <GraduationCap size={16} className="text-indigo-400" />,
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function Achievements() {
  return (
    <section id="recognition" className="py-24 lg:py-32 relative" aria-label="Achievements and recognition section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-blue-400 uppercase tracking-widest mb-3">
            05 // Recognition &amp; Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl">
            Achievements &amp; Honors
          </h2>
          <p className="mt-3 text-zinc-400 text-base max-w-2xl">
            Key milestones spanning startup accelerators, engineering presentations, hackathons, open source, and academics.
          </p>
        </motion.div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              variants={fadeUp}
              transition={{ delay: idx * 0.08 }}
              className="studio-surface p-6 rounded-2xl flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    {categoryIcons[item.category] || <Award size={16} className="text-blue-400" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
                      {item.year}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-mono text-blue-400 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-white text-base group-hover:text-blue-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-blue-400 font-mono mt-1">{item.organization}</p>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {item.metric && (
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="text-zinc-500">Recognition:</span>
                  <span className="text-zinc-200 font-semibold">{item.metric}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
