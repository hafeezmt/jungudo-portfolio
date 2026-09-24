"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Cpu, Layout, BarChart3, Users, Map } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Design & Product": <Layout size={20} className="text-pink-400" />,
  "Development & AI": <Cpu size={20} className="text-blue-400" />,
  "Data & Statistics": <BarChart3 size={20} className="text-purple-400" />,
  "Soft Skills & Leadership": <Users size={20} className="text-cyan-400" />,
  "Geospatial & Tools": <Map size={20} className="text-green-400" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative" aria-label="Skills section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">02 — Capabilities</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Skills &amp; Capabilities
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-xl">
            My core toolset spanning Product Design, AI Development, Data Analysis, and Technical Strategy.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bento-card p-7 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                      {categoryIcons[group.category] || <span className="text-xl">{group.icon}</span>}
                    </div>
                    <h3 className="font-bold text-white text-base">{group.category}</h3>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/8 text-[10px] font-mono text-slate-400">
                    {group.items.length}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-white/[0.03] border border-white/8 hover:border-blue-500/30 hover:bg-blue-500/10 text-slate-300 hover:text-white text-xs font-medium rounded-xl transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
