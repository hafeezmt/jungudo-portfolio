"use client";

import { motion, type Variants } from "framer-motion";
import { skillCategories, type SkillLevel } from "@/data/skills";
import { Code2, Wrench, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryIcons = {
  Code2: <Code2 size={18} className="text-white" />,
  Wrench: <Wrench size={18} className="text-white" />,
  Cpu: <Cpu size={18} className="text-white" />,
};

const levelBadgeStyles: Record<SkillLevel, { label: string; text: string }> = {
  Advanced: {
    label: "Advanced",
    text: "text-white",
  },
  Proficient: {
    label: "Proficient",
    text: "text-zinc-300",
  },
  Familiar: {
    label: "Familiar / R&D",
    text: "text-zinc-500",
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-36 relative hairline-b" aria-label="Technical skills section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            02 &bull; Core Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl">
            Technical Stack &amp; Capabilities
          </h2>
          <p className="mt-3 text-zinc-400 text-base max-w-2xl">
            Verified technical proficiencies across modern frontend engineering, developer toolchains, and applied machine intelligence.
          </p>
        </motion.div>

        {/* 3 Modern Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-8 rounded-2xl bg-[#09090b] border border-white/[0.08] space-y-6"
            >
              <div className="flex items-center gap-3 pb-4 hairline-b">
                <div className="w-8 h-8 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                  {categoryIcons[category.iconName]}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">{category.category}</h3>
                  <p className="text-[11px] text-zinc-500 font-mono mt-0.5">{category.skills.length} core competencies</p>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {category.tagline}
              </p>

              {/* Skill rows list */}
              <div className="space-y-3 pt-2">
                {category.skills.map((skill) => {
                  const badge = levelBadgeStyles[skill.level];
                  return (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-black/50 border border-white/[0.05] space-y-1 hover:border-white/20 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-white tracking-tight">
                          {skill.name}
                        </span>
                        <span className={cn("text-[10px] font-mono uppercase tracking-wider", badge.text)}>
                          {badge.label}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
