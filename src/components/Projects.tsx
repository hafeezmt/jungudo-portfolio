"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";
import {
  ExternalLink,
  ArrowUpRight,
  Terminal,
  CheckCircle2,
  Radio,
  Cpu,
  Zap,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const FILTER_TABS = ["All", "AI & LLMs", "IoT & Hardware", "PropTech", "Open Source"] as const;

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "AI & LLMs") return project.tags.includes("AI") || project.category.includes("AI");
    if (activeFilter === "IoT & Hardware") return project.tags.includes("IoT") || project.tags.includes("Hardware");
    if (activeFilter === "PropTech") return project.tags.includes("PropTech");
    if (activeFilter === "Open Source") return project.id === "listingwriter" || Boolean(project.github);
    return true;
  });

  return (
    <section id="projects" className="py-24 lg:py-32 relative" aria-label="Featured projects section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-blue-400 uppercase tracking-widest mb-3">
              01 // Selected Work &amp; Systems
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Engineered for Practical Impact
            </h2>
            <p className="mt-3 text-zinc-400 text-base max-w-xl">
              Systems designed for real-world constraints across Africa — spanning offline IoT telemetry, open-source AI, verified property marketplaces, and real-time audio.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-950 border border-white/[0.08] self-start md:self-auto">
            {FILTER_TABS.map((tab) => {
              const isSelected = activeFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer",
                    isSelected
                      ? "bg-white/[0.1] text-white border border-white/15 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-300"
                  )}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Showcase */}
        <div className="space-y-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isAgriSense = project.id === "agrisense-iot";
              const isListingWriter = project.id === "listingwriter";

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="studio-surface rounded-2xl p-6 sm:p-9 relative overflow-hidden group"
                >
                  {/* Subtle top indicator line */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Details Column (7 or 8 cols) */}
                    <div className={cn(project.image || isAgriSense || isListingWriter ? "lg:col-span-7" : "lg:col-span-8", "space-y-5")}>
                      
                      {/* Metadata row */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                          {project.category}
                        </span>

                        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-300 px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                          {project.status}
                        </span>

                        {isAgriSense && (
                          <span className="text-[10px] font-mono text-purple-300 px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 flex items-center gap-1">
                            <Zap size={10} /> Selected for iHatch Cohort 5
                          </span>
                        )}

                        {isListingWriter && (
                          <span className="text-[10px] font-mono text-emerald-300 px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                            <FaGithub size={10} /> Open Source Project
                          </span>
                        )}
                      </div>

                      {/* Title & Headline */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-zinc-300 mt-1 leading-snug">
                          {project.headline}
                        </p>
                      </div>

                      {/* Narrative */}
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Problem / Solution Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-1">
                            Operational Challenge
                          </span>
                          <p className="text-xs text-zinc-300 leading-relaxed">{project.problem}</p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-blue-500/[0.03] border border-blue-500/15">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 block mb-1">
                            Engineered Remedy
                          </span>
                          <p className="text-xs text-zinc-300 leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      {/* Architecture Highlights */}
                      {project.architectureHighlights && (
                        <div className="space-y-1.5 pt-1">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                            Key Architectural Highlights
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.architectureHighlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                                <CheckCircle2 size={13} className="text-blue-400 shrink-0 mt-0.5" />
                                <span className="leading-tight">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tech stack & Actions */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-zinc-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2.5">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-mono font-medium transition-colors"
                            >
                              <FaGithub size={12} />
                              <span>GitHub</span>
                              <ExternalLink size={11} className="opacity-60" />
                            </a>
                          )}

                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-[0_0_14px_rgba(59,130,246,0.3)]"
                            >
                              <span>Live Platform</span>
                              <ArrowUpRight size={13} />
                            </a>
                          )}
                        </div>
                      </div>

                    </div>

                    {/* Right Interactive / Architectural Panel (5 or 4 cols) */}
                    <div className={cn(project.image || isAgriSense || isListingWriter ? "lg:col-span-5" : "lg:col-span-4", "space-y-3 w-full")}>
                      
                      {/* Case 1: AgriSense Hardware Telemetry Mock */}
                      {isAgriSense && (
                        <div className="p-5 rounded-xl bg-zinc-950/90 border border-white/[0.08] font-mono space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
                            <span className="flex items-center gap-2 text-emerald-400">
                              <Radio size={14} className="animate-pulse" />
                              <span>OFFLINE SENSOR NODE</span>
                            </span>
                            <span className="text-[10px] text-zinc-500">2G / GSM CELLULAR</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-[11px]">
                            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                              <div className="text-zinc-500">COOP TEMP</div>
                              <div className="text-base font-bold text-amber-400 mt-0.5">38.4°C</div>
                              <div className="text-[9px] text-zinc-500">Threshold: 35.0°C</div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                              <div className="text-zinc-500">HUMIDITY</div>
                              <div className="text-base font-bold text-blue-400 mt-0.5">78% RH</div>
                              <div className="text-[9px] text-zinc-500">Threshold: 70%</div>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/20 text-[10px] text-red-200 space-y-1">
                            <div className="font-bold flex items-center gap-1.5 text-red-400 uppercase">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                              <span>Alert Triggered</span>
                            </div>
                            <p className="text-zinc-300 font-sans">
                              Siren activated in coop. Automated SMS dispatched via GSM shield to farmer basic phone (+234...).
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Case 2: ListingWriter AI Prompt Mock */}
                      {isListingWriter && (
                        <div className="p-5 rounded-xl bg-zinc-950/90 border border-white/[0.08] font-mono space-y-3">
                          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs">
                            <span className="flex items-center gap-1.5 text-blue-400">
                              <Terminal size={13} />
                              <span>AI LISTING GENERATION</span>
                            </span>
                            <span className="text-[10px] text-zinc-500">NIGERIAN REAL ESTATE</span>
                          </div>

                          <div className="text-[10px] space-y-2">
                            <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                              <div className="text-zinc-500 uppercase">Input Specs:</div>
                              <p className="text-zinc-300 font-sans mt-0.5">
                                4-bed duplex, Gwarinpa Abuja • Solar 5kVA • BQ • Tarred road
                              </p>
                            </div>

                            <div className="p-2.5 rounded-lg bg-blue-600/[0.08] border border-blue-500/20">
                              <div className="text-blue-400 uppercase font-bold flex items-center justify-between">
                                <span>WhatsApp Ready Output:</span>
                                <span className="text-[9px] text-zinc-500">Instant</span>
                              </div>
                              <p className="text-zinc-200 font-sans mt-1 text-[11px] leading-snug">
                                &quot;🏡 Executive 4-Bedroom Semi-Detached Duplex in Prime Gwarinpa. 24/7 Solar Backup, Self-Contained BQ, Clean Title. Schedule inspection today!&quot;
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Case 3: Live Image Preview (Tilawa Daily) */}
                      {project.image && !isAgriSense && !isListingWriter && (
                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-zinc-950 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                          <Image
                            src={project.image}
                            alt={`${project.title} Preview`}
                            fill
                            className="object-cover object-top filter brightness-[0.95] group-hover:scale-[1.02] transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 420px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                          {project.liveDemo && (
                            <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Live App
                            </div>
                          )}
                        </div>
                      )}

                      {/* Case 4: Concept & Architecture Specs for PropaBridge / WizzyAI / NomaVault */}
                      {!project.image && !isAgriSense && !isListingWriter && (
                        <div className="p-5 rounded-xl bg-zinc-950/90 border border-white/[0.08] space-y-3 font-mono text-xs">
                          <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-zinc-400">
                            <span className="flex items-center gap-1.5 text-blue-400 text-[11px]">
                              <Cpu size={13} /> Architecture Spec
                            </span>
                            <span className="text-[10px] text-zinc-500">{project.domain}</span>
                          </div>

                          <div className="space-y-1.5 text-[11px]">
                            <div className="flex justify-between text-zinc-500">
                              <span>Target Region:</span>
                              <span className="text-zinc-300 font-sans">Nigeria / West Africa</span>
                            </div>
                            <div className="flex justify-between text-zinc-500">
                              <span>Architecture:</span>
                              <span className="text-zinc-300 font-sans">
                                {project.id === "propabridge" && "Framer CMS + Verified UX Badging"}
                                {project.id === "wizzyai" && "Claude API + 6 Adaptive Learning Modes"}
                                {project.id === "nomavault-ai" && "ESP32 Microcontroller + CO₂ Telemetry"}
                              </span>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-[10px] text-zinc-400 font-sans leading-normal">
                            {project.id === "propabridge" &&
                              "Spearheaded anti-fraud verification workflows and affiliate UX that protects buyers from fake Nigerian listings."}
                            {project.id === "wizzyai" &&
                              "Engineered 6 adaptive tutoring modalities configured to engage African school children across varied connectivity speeds."}
                            {project.id === "nomavault-ai" &&
                              "Autonomous predictive spoilage warnings alerting rural grain silo operators prior to visible crop damage."}
                          </div>
                        </div>
                      )}

                    </div>

                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
