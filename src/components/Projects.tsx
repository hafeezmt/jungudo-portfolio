"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project, type ProjectStatus } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const ALL_FILTERS = ["All", "AgriTech", "AI", "IoT", "Healthcare", "CleanTech", "PropTech", "Geospatial", "Computer Vision"] as const;

const statusColors: Record<ProjectStatus, string> = {
  Built: "bg-green-500/15 text-green-400 border-green-500/20",
  Prototype: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "In Development": "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
  Concept: "bg-white/8 text-white/50 border-white/10",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col bg-white/[0.025] border border-white/6 rounded-2xl overflow-hidden hover:border-white/10 transition-all"
    >
      {/* Visual header */}
      <div className="relative h-40 bg-gradient-to-br from-white/3 to-transparent border-b border-white/5 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <span className="font-mono text-xs text-white/15 tracking-[0.3em] uppercase z-10 select-none">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Top */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-bold text-white text-lg leading-snug group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>
          <span
            className={cn(
              "shrink-0 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-semibold border tracking-wide",
              statusColors[project.status]
            )}
          >
            {project.status}
          </span>
        </div>

        <p className="text-sm text-white/50 leading-relaxed mb-5">
          {project.shortDescription}
        </p>

        {/* Problem / Solution */}
        <div className="space-y-3 mb-5">
          <div className="p-3 bg-white/3 rounded-xl">
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">Problem</p>
            <p className="text-xs text-white/50 leading-relaxed">{project.problem}</p>
          </div>
          <div className="p-3 bg-blue-500/5 border border-blue-500/10 rounded-xl">
            <p className="text-[10px] font-mono text-blue-400/60 uppercase tracking-widest mb-1">Solution</p>
            <p className="text-xs text-white/50 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-white/5 border border-white/6 rounded text-[11px] text-white/40"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 text-[11px] text-white/25">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-white/5">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
            >
              <FaGithub size={13} />
              <span>Code</span>
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-white/20 cursor-not-allowed" title="Repository not yet public">
              <FaGithub size={13} />
              <span>Code</span>
            </span>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors"
            >
              <ExternalLink size={12} />
              <span>Live</span>
            </a>
          )}
        </div>
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
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">03 — Projects</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Featured Projects
              </h2>
              <p className="mt-3 text-white/40 text-base max-w-xl">
                Concepts, prototypes, and in-progress builds. All projects are clearly labelled by status.
              </p>
            </div>
            <a
              href="https://github.com/hafeezmt"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white/60 text-sm rounded-full hover:bg-white/10 hover:text-white transition-all"
            >
              <FaGithub size={14} />
              View GitHub
            </a>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
          role="group"
          aria-label="Project category filters"
        >
          {ALL_FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-medium transition-all",
                activeFilter === filter
                  ? "bg-white text-black"
                  : "bg-white/5 border border-white/8 text-white/50 hover:bg-white/10 hover:text-white"
              )}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-white/30 text-sm">
            No projects match this filter yet.
          </div>
        )}
      </div>
    </section>
  );
}
