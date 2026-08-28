"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { achievements } from "@/data/achievements";
import { Award } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">{children}</p>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative" aria-label="About section">
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
          <SectionLabel>01 — About</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            {profile.bioExtended.split("\n\n").map((para, i) => (
              <p key={i} className="text-base md:text-lg text-white/60 leading-relaxed">
                {para}
              </p>
            ))}

            {/* Approach */}
            <div className="mt-8 p-6 bg-white/[0.025] border border-white/6 rounded-2xl">
              <p className="text-xs font-mono text-white/30 tracking-widest mb-4 uppercase">My Approach</p>
              <div className="flex flex-wrap gap-3 items-center">
                {["Learn", "Build", "Test", "Improve", "Create Impact"].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-blue-300 text-sm font-medium">
                      {step}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-white/20 text-sm">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Currently Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-white/[0.025] border border-white/6 rounded-2xl p-7"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <h3 className="text-base font-semibold text-white">Currently</h3>
            </div>
            <ul className="space-y-3.5">
              {profile.currently.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-white/50">
                  <span className="text-blue-400 mt-0.5 shrink-0">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Education & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs font-mono tracking-widest text-white/30 uppercase mb-6">Education</p>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="group p-6 bg-white/[0.025] border border-white/6 rounded-2xl hover:border-white/10 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h4 className="font-semibold text-white text-base">{edu.institution}</h4>
                      <p className="text-sm text-blue-400/90 font-medium mt-0.5">{edu.degree} — {edu.field}</p>
                    </div>
                    <span className="shrink-0 px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/15">
                      {edu.status}
                    </span>
                  </div>
                  {edu.description && (
                    <p className="text-sm text-white/40 leading-relaxed mb-3">{edu.description}</p>
                  )}
                  {edu.coursework && (
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {edu.coursework.map((c) => (
                        <span key={c} className="px-2 py-0.5 bg-white/5 text-white/40 text-[11px] rounded">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Recognition */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-xs font-mono tracking-widest text-white/30 uppercase mb-6">Achievements &amp; Recognition</p>
            <div className="space-y-4">
              {achievements.map((ach) => (
                <div
                  key={ach.title}
                  className="p-6 bg-blue-500/[0.04] border border-blue-500/12 rounded-2xl hover:border-blue-500/25 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <Award size={16} className="text-blue-400 shrink-0" />
                      <h4 className="font-semibold text-white text-base">{ach.title}</h4>
                    </div>
                    {ach.year && (
                      <span className="shrink-0 text-xs font-mono text-blue-400/70">{ach.year}</span>
                    )}
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{ach.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Journey */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-xs font-mono tracking-widest text-white/30 uppercase mb-8">My Journey</p>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent ml-[19px]" />
            <div className="space-y-8">
              {profile.journey.map((step, i) => (
                <motion.div
                  key={step.stage}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/8 text-lg">
                    {step.icon}
                  </div>
                  <div className="pb-2">
                    <h4 className="font-semibold text-white mb-1.5">{step.stage}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
