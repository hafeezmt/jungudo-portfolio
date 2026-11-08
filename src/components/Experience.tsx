"use client";

import { motion, type Variants } from "framer-motion";
import { experiences } from "@/data/experience";
import { ExternalLink, CheckCircle2, MapPin } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Experience() {
  return (
    <section id="timeline" className="py-24 sm:py-36 relative hairline-b" aria-label="Experience section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            03 &bull; Career &amp; Leadership
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl">
            Experience &amp; Leadership Timeline
          </h2>
          <p className="mt-3 text-zinc-400 text-base max-w-2xl">
            A verified trajectory of startup co-founding, technical poster presentations, and developer community leadership.
          </p>
        </motion.div>

        {/* Editorial Timeline Rows */}
        <div className="space-y-8">
          {experiences.map((item, idx) => (
            <motion.div
              key={`${item.organization}-${idx}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ delay: idx * 0.05 }}
              className="p-7 sm:p-9 rounded-2xl bg-[#09090b] border border-white/[0.08] hover:border-white/20 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 hairline-b">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <span className="text-xs font-mono uppercase text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mt-1 text-xs font-mono text-zinc-400">
                    {item.organizationUrl ? (
                      <a
                        href={item.organizationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:underline flex items-center gap-1 font-semibold"
                      >
                        <span>{item.organization}</span>
                        <ExternalLink size={11} />
                      </a>
                    ) : (
                      <span className="text-white font-semibold">{item.organization}</span>
                    )}

                    {item.location && (
                      <>
                        <span className="text-zinc-700">&bull;</span>
                        <span className="flex items-center gap-1 text-zinc-400">
                          <MapPin size={11} />
                          {item.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-400 shrink-0">
                  {item.period}
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed max-w-4xl">
                {item.summary}
              </p>

              {/* Highlights */}
              <div className="space-y-2 pt-1">
                {item.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed">
                    <CheckCircle2 size={13} className="text-zinc-500 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 pt-3 hairline-t">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
