"use client";

import { motion, type Variants } from "framer-motion";
import { skillCategories, type SkillLevel } from "@/data/skills";
import { Code2, Wrench, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryIcons = {
  Code2: <Code2 size={20} className="text-blue-400" />,
  Wrench: <Wrench size={20} className="text-indigo-400" />,
  Cpu: <Cpu size={20} className="text-violet-400" />,
};

const levelBadges: Record<SkillLevel, { label: string; textClass: string; bgClass: string; borderClass: string }> = {
  Advanced: {
    label: "Advanced",
    textClass: "text-blue-400",
    bgClass: "bg-blue-500/10",
    borderClass: "border-blue-500/25",
  },
  Proficient: {
    label: "Proficient",
    textClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10",
    borderClass: "border-emerald-500/25",
  },
  Familiar: {
    label: "Familiar / R&D",
    textClass: "text-amber-400",
    bgClass: "bg-amber-500/10",
    borderClass: "border-amber-500/25",
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative" aria-label="Technical skills section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/8 text-[11px] font-mono text-blue-400 uppercase tracking-widest mb-3">
            03 / Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl">
            Technical Stack &amp; Specializations
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl">
            Verified technical competencies across modern frontend engineering, developer tooling, and emerging AI/IoT concepts.
          </p>

          {/* Level Legend */}
          <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-mono text-slate-400">
            <span className="text-slate-500 text-[11px] uppercase tracking-wider">Proficiency:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Advanced Expertise</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Proficient Delivery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Familiar / Practical R&amp;D</span>
            </div>
          </div>
        </motion.div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ delay: catIdx * 0.1 }}
              className="craft-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-6"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/8">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                    {categoryIcons[cat.iconName]}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base tracking-tight">{cat.category}</h3>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">{cat.skills.length} core technologies</p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-3 pb-4">
                  {cat.tagline}
                </p>

                {/* Skill Items */}
                <div className="space-y-3">
                  {cat.skills.map((skill) => {
                    const badge = levelBadges[skill.level];
                    return (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/6 hover:border-blue-500/25 transition-all group"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                            {skill.name}
                          </span>
                          <span
                            className={cn(
                              "text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider",
                              badge.bgClass,
                              badge.textClass,
                              badge.borderClass
                            )}
                          >
                            {badge.label}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-normal">
                          {skill.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
