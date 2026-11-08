"use client";

import { motion, type Variants } from "framer-motion";
import { achievements } from "@/data/achievements";
import { Award, Presentation, Code2, Sparkles, GraduationCap, Trophy } from "lucide-react";

const categoryIcons = {
  "Innovation & Startup": <Trophy size={16} className="text-white" />,
  "Technical Presentation": <Presentation size={16} className="text-white" />,
  "Hackathon": <Sparkles size={16} className="text-white" />,
  "Open Source": <Code2 size={16} className="text-white" />,
  "Academic": <GraduationCap size={16} className="text-white" />,
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Achievements() {
  return (
    <section id="recognition" className="py-24 sm:py-36 relative hairline-b" aria-label="Achievements section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            05 &bull; Honors &amp; Recognition
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl">
            Achievements &amp; Recognition
          </h2>
          <p className="mt-3 text-zinc-400 text-base max-w-2xl">
            Selected accelerator admissions, technical conference presentations, hackathon awards, and open-source contributions.
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
              transition={{ delay: idx * 0.06 }}
              className="p-7 rounded-2xl bg-[#09090b] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-8 h-8 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                    {categoryIcons[item.category] || <Award size={16} className="text-white" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-white/[0.02]">
                      {item.year}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-mono text-white px-2 py-0.5 rounded bg-white/[0.06] border border-white/[0.08]">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-white text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-1">{item.organization}</p>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {item.metric && (
                <div className="pt-3 hairline-t flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="text-zinc-600">Metric:</span>
                  <span className="text-white font-semibold">{item.metric}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
