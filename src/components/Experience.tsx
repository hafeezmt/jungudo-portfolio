"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

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
            Only verified experience is listed here — personal projects, ongoing learning, and hands-on exploration.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-8"
              >
                {/* Dot */}
                <div className="hidden md:flex shrink-0 w-10 h-10 items-center justify-center mt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                </div>

                {/* Card */}
                <div className="flex-1 p-6 bg-white/[0.025] border border-white/6 rounded-2xl hover:border-white/10 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-bold text-white text-base">{item.title}</h3>
                      <p className="text-xs text-white/30 mt-0.5 font-mono">{item.category}</p>
                    </div>
                    <span className="shrink-0 px-3 py-1 bg-white/5 border border-white/8 rounded-full text-xs text-white/40 font-mono">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm text-white/50 leading-relaxed mb-4">{item.description}</p>

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 bg-blue-500/8 border border-blue-500/12 text-blue-300/70 text-xs rounded"
                        >
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
