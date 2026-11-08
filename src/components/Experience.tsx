"use client";

import { motion, type Variants } from "framer-motion";
import { experiences } from "@/data/experience";
import {
  ExternalLink,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categoryStyles: Record<string, { bg: string; text: string; border: string }> = {
  "Startup & Venture": {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
  },
  "Technical Presentation": {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
  },
  "Hackathon & Innovation": {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  "Community & Leadership": {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
  },
  "Product Engineering": {
    bg: "bg-cyan-500/10",
    text: "text-cyan-400",
    border: "border-cyan-500/20",
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function Experience() {
  return (
    <section id="timeline" className="py-24 lg:py-32 relative" aria-label="Experience & trajectory section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-blue-400 uppercase tracking-widest mb-3">
            03 // Trajectory &amp; Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl">
            Experience &amp; Milestones
          </h2>
          <p className="mt-3 text-zinc-400 text-base max-w-2xl">
            A chronological timeline of startup co-founding, technical poster presentations, international hackathons, and regional developer leadership.
          </p>
        </motion.div>

        {/* Timeline Stream */}
        <div className="relative border-l border-white/[0.08] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-10">
          {experiences.map((item, idx) => {
            const catStyle = categoryStyles[item.category] || {
              bg: "bg-white/[0.04]",
              text: "text-zinc-300",
              border: "border-white/[0.08]",
            };

            return (
              <motion.div
                key={`${item.organization}-${idx}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                transition={{ delay: idx * 0.07 }}
                className="relative group"
              >
                {/* Precision Timeline Node Indicator */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#050505] border-2 border-blue-500 group-hover:scale-125 group-hover:border-blue-400 transition-all shadow-[0_0_12px_rgba(59,130,246,0.6)]" />

                <div className="studio-surface p-6 sm:p-8 rounded-2xl space-y-4">
                  {/* Top Bar: Title, Org, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {item.role}
                        </span>
                        
                        <span className={cn("text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded border", catStyle.bg, catStyle.text, catStyle.border)}>
                          {item.category}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-zinc-400 font-mono">
                        {item.organizationUrl ? (
                          <a
                            href={item.organizationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
                          >
                            <span>{item.organization}</span>
                            <ExternalLink size={11} />
                          </a>
                        ) : (
                          <span className="text-zinc-200 font-semibold">{item.organization}</span>
                        )}

                        {item.location && (
                          <>
                            <span className="text-zinc-600">•</span>
                            <span className="flex items-center gap-1 text-zinc-400">
                              <MapPin size={11} />
                              {item.location}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="sm:self-start shrink-0 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-300">
                      {item.period}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-1">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-400 leading-relaxed">
                        <CheckCircle2 size={13} className="text-blue-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills/Tools pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.02] border border-white/[0.06] text-zinc-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
