"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Briefcase, ExternalLink, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative" aria-label="Experience section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">04 — Experience</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Professional Experience &amp; Leadership
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-xl">
            Hands-on product leadership, UI/UX design architecture, startup operations, and software engineering roles.
          </p>
        </motion.div>

        {/* Experience Bento Cards */}
        <div className="space-y-6">
          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bento-card p-7 sm:p-9 rounded-3xl space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/8 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} className="text-blue-400 shrink-0" />
                    <h3 className="font-extrabold text-white text-lg sm:text-xl">{item.title}</h3>
                  </div>
                  {item.company && (
                    <div className="flex items-center gap-2 mt-1">
                      {item.companyUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-colors"
                        >
                          {item.company}
                          <ExternalLink size={11} />
                        </a>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/8 text-xs font-semibold text-slate-300">{item.company}</span>
                      )}
                      <span className="text-slate-600 text-xs">•</span>
                      <span className="text-xs font-mono text-slate-400">{item.category}</span>
                    </div>
                  )}
                </div>

                <span className="shrink-0 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full text-xs font-mono text-slate-300">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>

              {/* Highlights List */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="space-y-2 pt-2">
                  {item.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Pills */}
              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/6">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-mono rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
