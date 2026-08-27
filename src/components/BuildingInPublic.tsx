"use client";

import { motion } from "framer-motion";

const explorations = [
  {
    icon: "🤖",
    title: "AI",
    description: "Exploring practical AI applications and AI-powered products — chatbots, data analysis, and generative tools.",
  },
  {
    icon: "📊",
    title: "Data",
    description: "Using statistics and data analysis to understand problems and support better decisions.",
  },
  {
    icon: "💻",
    title: "Software",
    description: "Improving software development skills by building practical applications with Python, React, and Next.js.",
  },
  {
    icon: "🎨",
    title: "UI/UX",
    description: "Designing interfaces that are useful, clear, and easy to understand using Figma and design principles.",
  },
  {
    icon: "🗺️",
    title: "Geospatial",
    description: "Exploring maps, spatial data, and location-based technology with QGIS and GIS tools.",
  },
  {
    icon: "📡",
    title: "IoT",
    description: "Exploring how sensors and connected devices can solve real-world problems in agriculture, healthcare, and beyond.",
  },
];

export function BuildingInPublic() {
  return (
    <section className="py-24 lg:py-32 relative" aria-label="What I'm exploring section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">Building in Public</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            What I&apos;m Exploring
          </h2>
          <p className="text-white/40 text-base max-w-xl mx-auto">
            An active builder who learns by doing. These are the areas I&apos;m currently investing time and energy in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {explorations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group p-6 bg-white/[0.025] border border-white/6 rounded-2xl hover:border-blue-500/20 hover:bg-blue-500/[0.03] transition-all"
            >
              <div className="text-3xl mb-4" role="img" aria-hidden="true">{item.icon}</div>
              <h3 className="font-bold text-white text-lg mb-2 group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Impact diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 bg-white/[0.02] border border-white/5 rounded-2xl text-center"
        >
          <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-6">Technology → Impact</p>
          <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
            {[
              { label: "Technology", color: "text-blue-400" },
              { label: "→", color: "text-white/20" },
              { label: "People", color: "text-white/60" },
              { label: "→", color: "text-white/20" },
              { label: "Problems", color: "text-white/60" },
              { label: "→", color: "text-white/20" },
              { label: "Solutions", color: "text-white/60" },
              { label: "→", color: "text-white/20" },
              { label: "Impact", color: "text-green-400" },
            ].map((node, i) => (
              <span key={i} className={`font-medium ${node.color}`}>{node.label}</span>
            ))}
          </div>
          <p className="mt-5 text-xs text-white/25 max-w-lg mx-auto">
            The goal is not simply to build software. It&apos;s to build useful technology that makes a difference in agriculture, healthcare, education, waste management, and digital access.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
