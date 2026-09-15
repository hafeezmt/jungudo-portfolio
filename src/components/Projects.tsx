"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects, type Project, type ProjectStatus } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ALL_FILTERS = ["All", "WebRTC", "AI", "EdTech", "PropTech", "AgriTech", "IoT", "CleanTech"] as const;

const statusColors: Record<ProjectStatus, string> = {
  Built: "bg-green-500/15 text-green-400 border-green-500/30",
  Prototype: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "In Development": "bg-amber-500/15 text-amber-400 border-amber-500/30",
  Concept: "bg-white/10 text-slate-400 border-white/12",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group bento-card rounded-3xl overflow-hidden flex flex-col justify-between"
    >
      <div>
        {/* Visual Thumbnail */}
        <div className="relative h-48 bg-[#0b0b12] border-b border-white/8 overflow-hidden flex items-center justify-center">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} Preview`}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="p-6 text-center">
              <span className="font-mono text-xs text-slate-500 tracking-[0.2em] uppercase">
                {project.category}
              </span>
              <p className="text-lg font-bold text-white/40 mt-1">{project.title}</p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10] via-transparent to-transparent opacity-80" />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">{project.category}</span>
              <h3 className="text-xl font-bold text-white mt-0.5 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>
            </div>
            <span
              className={cn(
                "shrink-0 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold border uppercase tracking-wider",
                statusColors[project.status]
              )}
            >
              {project.status}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Key Callouts */}
          <div className="space-y-2 pt-2">
            <div className="p-3 bg-white/[0.02] border border-white/6 rounded-xl">
              <p className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Problem</p>
              <p className="text-xs text-slate-300 mt-0.5">{project.problem}</p>
            </div>
            <div className="p-3 bg-blue-500/[0.04] border border-blue-500/12 rounded-xl">
              <p className="text-[9px] font-mono text-blue-400 uppercase tracking-wider">Solution</p>
              <p className="text-xs text-slate-300 mt-0.5">{project.solution}</p>
            </div>
          </div>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-white/[0.03] border border-white/6 rounded text-[10px] font-mono text-slate-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Links */}
      <div className="px-6 pb-6 pt-2 flex items-center gap-4 border-t border-white/6">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <FaGithub size={13} />
            <span>Source Code</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs text-slate-600 cursor-not-allowed">
            <FaGithub size={13} />
            <span>Private Code</span>
          </span>
        )}

        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 ml-auto transition-colors"
          >
            <span>Live Project</span>
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tags.some((t) => t === activeFilter));

  return (
    <section id="projects" className="py-24 lg:py-32 relative" aria-label="Projects section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">03 — Portfolio</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Featured Work &amp; Products
              </h2>
              <p className="mt-3 text-slate-400 text-base max-w-xl">
                A selection of real-world products, AI platforms, IoT hardware startups, and UI/UX rebrands.
              </p>
            </div>
            <a
              href="https://github.com/hafeezmt"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] border border-white/10 text-white text-xs font-semibold rounded-full hover:bg-white/8 transition-all"
            >
              <FaGithub size={14} />
              View GitHub Profile
            </a>
          </div>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {ALL_FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-medium transition-all",
                activeFilter === filter
                  ? "bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30"
                  : "bg-white/[0.03] border border-white/8 text-slate-400 hover:bg-white/8 hover:text-white"
              )}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
