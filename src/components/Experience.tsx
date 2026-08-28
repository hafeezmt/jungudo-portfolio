"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative" aria-label="Experience section">
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
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">04 — Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Experience &amp; Learning
          </h2>
          <p className="mt-4 text-white/40 text-base max-w-xl">
            Verified experience, ongoing learning, and hands-on exploration.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-8"
              >
                {/* Dot */}
                <div className="hidden md:flex shrink-0 w-10 items-start justify-center pt-6">
                  <div className={`w-2.5 h-2.5 rounded-full shadow-lg ${
                    item.category === "Professional"
                      ? "bg-blue-400 shadow-blue-400/50"
                      : "bg-white/30"
                  }`} />
                </div>

                {/* Card */}
                <div className={`flex-1 p-6 rounded-2xl border transition-colors ${
                  item.category === "Professional"
                    ? "bg-blue-500/[0.06] border-blue-500/15 hover:border-blue-500/25"
                    : "bg-white/[0.025] border-white/6 hover:border-white/10"
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-bold text-white text-base leading-snug">{item.title}</h3>
                      {item.company && (
                        <div className="flex items-center gap-1.5 mt-1.5">
                          {item.companyUrl ? (
                            <a
                              href={item.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
                            >
                              {item.company} <ExternalLink size={11} />
                            </a>
                          ) : (
                            <span className="text-sm text-blue-400 font-medium">{item.company}</span>
                          )}
                          <span className="text-white/20 text-xs">·</span>
                          <span className="text-xs text-white/30 font-mono">{item.category}</span>
                        </div>
                      )}
                      {!item.company && (
                        <p className="text-xs text-white/30 mt-0.5 font-mono">{item.category}</p>
                      )}
                    </div>
                    <span className="shrink-0 px-3 py-1 bg-white/5 border border-white/8 rounded-full text-xs text-white/40 font-mono">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm text-white/50 leading-relaxed mb-4">{item.description}</p>

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-0.5 bg-blue-500/8 border border-blue-500/12 text-blue-300/70 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
