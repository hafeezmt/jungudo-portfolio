"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { skillCategories, type SkillLevel } from "@/data/skills";
import { Code2, Wrench, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const categoryIcons = {
  Code2: <Code2 size={18} className="text-blue-400" />,
  Wrench: <Wrench size={18} className="text-indigo-400" />,
  Cpu: <Cpu size={18} className="text-violet-400" />,
};

const levelBadgeStyles: Record<SkillLevel, { label: string; text: string; bg: string; border: string }> = {
  Advanced: {
    label: "Advanced",
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  Proficient: {
    label: "Proficient",
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  Familiar: {
    label: "Familiar / R&D",
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const displayedCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="expertise" className="py-24 lg:py-32 relative" aria-label="Technical skills section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-blue-400 uppercase tracking-widest mb-3">
            02 // Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl">
            Skills &amp; Technology Stack
          </h2>
          <p className="mt-3 text-zinc-400 text-base max-w-2xl">
            Verified competencies in modern web development, developer tooling, and applied AI &amp; hardware systems.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-6">
            <button
              onClick={() => setSelectedCategory("all")}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer",
                selectedCategory === "all"
                  ? "bg-white/[0.1] text-white border border-white/15"
                  : "bg-white/[0.02] text-zinc-500 hover:text-zinc-300 border border-transparent"
              )}
            >
              All Domains ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5",
                  selectedCategory === cat.id
                    ? "bg-white/[0.1] text-white border border-white/15"
                    : "bg-white/[0.02] text-zinc-500 hover:text-zinc-300 border border-transparent"
                )}
              >
                <span>{cat.category}</span>
                <span className="text-[10px] text-zinc-500">({cat.skills.length})</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {displayedCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ delay: idx * 0.08 }}
              className="studio-surface p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-6"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                    {categoryIcons[cat.iconName]}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base tracking-tight">{cat.category}</h3>
                    <p className="text-[11px] text-zinc-500 font-mono mt-0.5">{cat.skills.length} core technologies</p>
                  </div>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed pt-3 pb-3">
                  {cat.tagline}
                </p>

                {/* Individual Skill Items */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => {
                    const badge = levelBadgeStyles[skill.level];
                    return (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05] hover:border-blue-500/25 transition-all group"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                            {skill.name}
                          </span>
                          <span
                            className={cn(
                              "text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider",
                              badge.bg,
                              badge.text,
                              badge.border
                            )}
                          >
                            {badge.label}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-normal">
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
