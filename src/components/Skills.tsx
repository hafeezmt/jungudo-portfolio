"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 border-blue-500/15 text-blue-300",
  purple: "bg-purple-500/10 border-purple-500/15 text-purple-300",
  cyan: "bg-cyan-500/10 border-cyan-500/15 text-cyan-300",
  pink: "bg-pink-500/10 border-pink-500/15 text-pink-300",
  green: "bg-green-500/10 border-green-500/15 text-green-300",
  orange: "bg-orange-500/10 border-orange-500/15 text-orange-300",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative" aria-label="Skills section">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-white/[0.01]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">02 — Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            What I Work With
          </h2>
          <p className="mt-4 text-white/40 text-base max-w-xl">
            Technologies and tools I&apos;m actively learning and using. No fake proficiency bars — just honest skill categories.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group p-7 bg-white/[0.025] border border-white/6 rounded-2xl hover:border-white/10 hover:bg-white/[0.035] transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl" role="img" aria-hidden="true">{group.icon}</span>
                <h3 className="font-semibold text-white text-sm">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium border ${colorMap[group.color] ?? "bg-white/5 border-white/10 text-white/60"}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-xs text-white/20 font-mono"
        >
          Actively learning and growing — this list evolves constantly.
        </motion.p>
      </div>
    </section>
  );
}
