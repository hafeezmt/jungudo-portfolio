"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects, type ProjectStatus } from "@/data/projects";
import {
  ExternalLink,
  ArrowUpRight,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const FILTER_CATEGORIES = ["All", "AI", "IoT", "PropTech", "AgriTech", "EdTech"] as const;

const statusStyles: Record<ProjectStatus, { bg: string; text: string; border: string }> = {
  Built: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/20",
  },
  Prototype: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
  },
  "In Development": {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
  },
  Concept: {
    bg: "bg-slate-500/10",
    text: "text-slate-400",
    border: "border-slate-500/20",
  },
};

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "All") return true;
    return (
      project.tags.includes(selectedFilter) ||
      project.category.toLowerCase().includes(selectedFilter.toLowerCase())
    );
  });

  return (
    <section id="projects" className="py-24 lg:py-32 relative" aria-label="Featured projects section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.03] border border-white/8 text-[11px] font-mono text-blue-400 uppercase tracking-widest mb-3">
              02 / Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Featured Projects &amp; Systems
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-xl">
              Practical technology solutions engineered for real-world impact across Nigeria — spanning offline IoT, applied AI, property tech, and education.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-white/[0.02] border border-white/6 self-start md:self-auto">
            {FILTER_CATEGORIES.map((filter) => {
              const isSelected = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer",
                    isSelected
                      ? "bg-blue-600 text-white shadow-[0_0_12px_rgba(59,130,246,0.35)]"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Layout Showcase */}
        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const status = statusStyles[project.status];
              const isFlagship = project.id === "agrisense-iot" || project.id === "propabridge";

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={cn(
                    "craft-card rounded-2xl overflow-hidden group transition-all",
                    isFlagship ? "p-7 sm:p-9" : "p-6 sm:p-8"
                  )}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Details Column */}
                    <div className={cn(project.image ? "lg:col-span-7" : "lg:col-span-8", "space-y-5")}>
                      
                      {/* Meta badges */}
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20">
                          {project.category}
                        </span>

                        <span
                          className={cn(
                            "text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded border font-medium",
                            status.bg,
                            status.text,
                            status.border
                          )}
                        >
                          {project.status}
                        </span>

                        {project.id === "agrisense-iot" && (
                          <span className="text-[10px] font-mono text-purple-300 px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/20">
                            Selected for iHatch Cohort 5
                          </span>
                        )}

                        {project.id === "listingwriter" && (
                          <span className="text-[10px] font-mono text-emerald-300 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1">
                            <FaGithub size={11} /> Open Source
                          </span>
                        )}
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-300 mt-1.5 leading-snug">
                          {project.headline}
                        </p>
                      </div>

                      {/* Full Narrative Description */}
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Problem & Solution Mini Blocks */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/6">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                            Problem Context
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed">{project.problem}</p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-blue-500/[0.03] border border-blue-500/15">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 block mb-1">
                            Engineering Solution
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      {/* Architecture Highlights */}
                      {project.architectureHighlights && (
                        <div className="space-y-1.5 pt-1">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                            Key Architectural Highlights
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.architectureHighlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                                <CheckCircle2 size={13} className="text-blue-400 shrink-0 mt-0.5" />
                                <span className="leading-tight">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tech stack pills & links */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/6">
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/6 text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-semibold transition-colors"
                            >
                              <FaGithub size={13} />
                              <span>GitHub</span>
                              <ExternalLink size={12} className="opacity-70" />
                            </a>
                          )}

                          {project.liveDemo && (
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-[0_0_14px_rgba(59,130,246,0.3)]"
                            >
                              <span>Live Preview</span>
                              <ArrowUpRight size={13} />
                            </a>
                          )}
                        </div>
                      </div>

                    </div>

                    {/* Right Visual / Architecture Panel */}
                    <div className={cn(project.image ? "lg:col-span-5" : "lg:col-span-4", "space-y-4")}>
                      {project.image ? (
                        <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden bg-[#090a0f] border border-white/10 group-hover:border-blue-500/30 transition-colors">
                          <Image
                            src={project.image}
                            alt={`${project.title} Preview`}
                            fill
                            className="object-cover object-top filter brightness-[0.95] group-hover:scale-[1.02] transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 420px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-transparent to-transparent opacity-60" />
                          {project.liveDemo && (
                            <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Live App
                            </div>
                          )}
                        </div>
                      ) : (
                        /* Architectural Conceptual Spec Panel */
                        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/8 space-y-4 font-mono text-xs">
                          <div className="flex items-center justify-between pb-3 border-b border-white/6 text-slate-400">
                            <span className="flex items-center gap-1.5 text-blue-400 text-[11px]">
                              <Terminal size={13} /> System Architecture
                            </span>
                            <span className="text-[10px] text-slate-500">SPEC // 2026</span>
                          </div>

                          <div className="space-y-2 text-[11px]">
                            <div className="flex justify-between text-slate-400">
                              <span>Domain:</span>
                              <span className="text-slate-200 font-sans">{project.domain}</span>
                            </div>
                            <div className="flex justify-between text-slate-400">
                              <span>Operational Mode:</span>
                              <span className="text-slate-200">
                                {project.id === "agrisense-iot" || project.id === "nomavault-ai"
                                  ? "Offline / GSM SMS"
                                  : "Web / Distributed"}
                              </span>
                            </div>
                            <div className="flex justify-between text-slate-400">
                              <span>Target Region:</span>
                              <span className="text-slate-200">Nigeria</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-[#07080c] border border-white/6 text-[10px] text-slate-400 space-y-1">
                            <div className="text-blue-400 font-semibold uppercase tracking-wider">
                              Core Innovation
                            </div>
                            <p className="text-slate-300 font-sans">
                              {project.id === "agrisense-iot" &&
                                "Zero-internet telemetry triggering local sirens + direct SMS to basic 2G handsets."}
                              {project.id === "listingwriter" &&
                                "Specialized Nigerian property vocabulary prompts converting raw specs into verified social listings."}
                              {project.id === "wizzyai" &&
                                "Adaptive multilingual pedagogy for African kids spanning 6 interactive exploration modes."}
                              {project.id === "propabridge" &&
                                "Verified anti-fraud realtor badge system and unified listing workflow in Framer CMS."}
                              {project.id === "nomavault-ai" &&
                                "Pre-spoilage CO2 & microclimate warning nodes for rural grain silos."}
                            </p>
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
