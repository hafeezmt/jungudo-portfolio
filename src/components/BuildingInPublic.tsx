"use client";

import { motion } from "framer-motion";

const explorations = [
  {
    icon: "🤖",
    title: "AI & LLM Workflows",
    description: "Exploring practical AI applications and generative AI tools — custom chatbots, Anthropic API integration, and educational tools.",
  },
  {
    icon: "📊",
    title: "Data & Statistics",
    description: "Applying statistical inference and exploratory data analysis to extract insights and inform product strategy.",
  },
  {
    icon: "💻",
    title: "Fullstack Web",
    description: "Building responsive, modern applications with React, Next.js App Router, TypeScript, and Supabase.",
  },
  {
    icon: "🎨",
    title: "UI/UX Architecture",
    description: "Architecting human-centred user interfaces, design systems, and wireframe prototypes in Figma & Framer.",
  },
  {
    icon: "🗺️",
    title: "Geospatial & GIS",
    description: "Exploring spatial data, location-based property mapping, and spatial visualization using QGIS.",
  },
  {
    icon: "📡",
    title: "Offline-First IoT",
    description: "Designing sensor-driven hardware and offline SMS/siren alerts for agriculture and environmental monitoring.",
  },
];

export function BuildingInPublic() {
  return (
    <section className="py-24 lg:py-32 relative" aria-label="What I'm exploring section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">Building in Public</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Active R&amp;D &amp; Exploration
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            An active builder who learns by doing. These are the key domains I am currently investing energy into.
          </p>
        </motion.div>

        {/* Exploration Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {explorations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bento-card p-7 rounded-3xl group"
            >
              <div className="text-3xl mb-4" role="img" aria-hidden="true">{item.icon}</div>
              <h3 className="font-bold text-white text-base mb-2 group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technology Impact Chain */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bento-card p-8 rounded-3xl text-center"
        >
          <p className="text-xs font-mono text-slate-400 tracking-widest uppercase mb-6">Core Mission: Technology → Impact</p>
          <div className="flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm font-mono">
            {[
              { label: "Technology", color: "text-blue-400 font-bold" },
              { label: "→", color: "text-slate-600" },
              { label: "People", color: "text-slate-300" },
              { label: "→", color: "text-slate-600" },
              { label: "Real Problems", color: "text-slate-300" },
              { label: "→", color: "text-slate-600" },
              { label: "Human-Centred Solutions", color: "text-slate-300" },
              { label: "→", color: "text-slate-600" },
              { label: "Community Impact", color: "text-green-400 font-bold" },
            ].map((node, i) => (
              <span key={i} className={node.color}>{node.label}</span>
            ))}
          </div>
          <p className="mt-5 text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
            Building software with purpose — making digital tools accessible for education, real estate transparency, and agricultural resilience across African communities.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
