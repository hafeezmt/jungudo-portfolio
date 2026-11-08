"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import {
  ExternalLink,
  ArrowUpRight,
  Terminal,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { cn } from "@/lib/utils";

const FILTER_TABS = ["All Initiatives", "Applied AI", "IoT & Telemetry", "PropTech", "Open Source"] as const;

export function Projects() {
  const [activeTab, setActiveTab] = useState<string>("All Initiatives");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All Initiatives") return true;
    if (activeTab === "Applied AI") return project.tags.includes("AI") || project.category.includes("AI");
    if (activeTab === "IoT & Telemetry") return project.tags.includes("IoT") || project.tags.includes("Hardware");
    if (activeTab === "PropTech") return project.tags.includes("PropTech");
    if (activeTab === "Open Source") return project.id === "listingwriter" || Boolean(project.github);
    return true;
  });

  return (
    <section id="work" className="py-24 sm:py-36 relative hairline-b" aria-label="Selected work section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-8 hairline-b">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
              01 &bull; Engineering Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Selected Work &amp; Systems
            </h2>
            <p className="mt-3 text-zinc-400 text-base max-w-xl">
              Full-width architectural deep dives into platforms, offline telemetry, and applied artificial intelligence engineered for African impact.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            {FILTER_TABS.map((tab) => {
              const isSelected = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer",
                    isSelected
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.06]"
                  )}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Full-Width Editorial Case Studies */}
        <div className="space-y-24 sm:space-y-36">
          {filteredProjects.map((project, index) => {
            const isAgriSense = project.id === "agrisense-iot";
            const isListingWriter = project.id === "listingwriter";
            const isEven = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Text & Narrative Column (6 cols) */}
                <div
                  className={cn(
                    "lg:col-span-6 space-y-6",
                    isEven ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  {/* Meta Badges */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="text-zinc-500 uppercase tracking-widest">
                      {project.domain}
                    </span>
                    <span className="text-zinc-700">&bull;</span>
                    <span className="text-zinc-400">{project.category}</span>
                    <span className="text-zinc-700">&bull;</span>
                    <span className="text-emerald-400">{project.status}</span>
                  </div>

                  {/* Title & Headline */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-base sm:text-lg text-zinc-300 font-normal mt-2 leading-snug">
                      {project.headline}
                    </p>
                  </div>

                  {/* Deep Narrative Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Operational Challenge & Engineered Remedy */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider mb-1">
                        Operational Problem
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider mb-1">
                        Technical Solution
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Architecture Highlights */}
                  {project.architectureHighlights && (
                    <div className="space-y-2 pt-2">
                      <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                        Key Architectural Highlights
                      </div>
                      <div className="space-y-1.5">
                        {project.architectureHighlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                            <CheckCircle2 size={13} className="text-zinc-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech stack pills & External Action */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 hairline-t">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.12] text-white text-xs font-mono transition-colors"
                        >
                          <FaGithub size={13} />
                          <span>View Code</span>
                          <ExternalLink size={11} className="opacity-60" />
                        </a>
                      )}

                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-semibold transition-colors"
                        >
                          <span>Visit Platform</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

                {/* Live Mockup / Visual Demonstration Column (6 cols) */}
                <div
                  className={cn(
                    "lg:col-span-6 w-full",
                    isEven ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <div className="relative rounded-2xl bg-[#09090b] border border-white/[0.08] overflow-hidden shadow-2xl p-6 sm:p-8">
                    
                    {/* Visual 1: AgriSense IoT Live Telemetry Mockup */}
                    {isAgriSense && (
                      <div className="space-y-5 font-mono text-xs">
                        <div className="flex items-center justify-between pb-3 hairline-b">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-white font-semibold text-xs tracking-wider">
                              AGRISENSE NODE #04 // LIVE TELEMETRY
                            </span>
                          </div>
                          <span className="text-[10px] text-zinc-500">GSM 2G CELLULAR</span>
                        </div>

                        {/* Telemetry Metric Displays */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-4 rounded-xl bg-black/60 border border-white/[0.06]">
                            <div className="text-[10px] text-zinc-500 uppercase tracking-wider">POULTRY COOP TEMP</div>
                            <div className="text-2xl font-bold text-amber-400 mt-1">38.4°C</div>
                            <div className="text-[10px] text-zinc-500 mt-0.5">Threshold: 35.0°C &bull; CRITICAL</div>
                          </div>

                          <div className="p-4 rounded-xl bg-black/60 border border-white/[0.06]">
                            <div className="text-[10px] text-zinc-500 uppercase tracking-wider">RELATIVE HUMIDITY</div>
                            <div className="text-2xl font-bold text-blue-400 mt-1">79% RH</div>
                            <div className="text-[10px] text-zinc-500 mt-0.5">Threshold: 70% &bull; HIGH</div>
                          </div>
                        </div>

                        {/* Hardware Alert Status */}
                        <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-red-200 text-xs space-y-2">
                          <div className="flex items-center justify-between font-bold text-red-400 uppercase text-[11px]">
                            <span className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                              Local Siren &amp; SMS Triggered
                            </span>
                            <span className="text-[10px] font-mono text-zinc-400">0s Latency</span>
                          </div>
                          <p className="text-zinc-300 font-sans text-xs leading-relaxed">
                            Offline siren active in Northern Nigerian coop. SMS dispatched via localized GSM gateway to farmer basic handset (+234...). No smartphone or Wi-Fi required.
                          </p>
                        </div>

                        <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-500">
                          <span>Accelerated by:</span>
                          <span className="text-white font-semibold">NITDA / JICA iHatch Cohort 5</span>
                        </div>
                      </div>
                    )}

                    {/* Visual 2: ListingWriter AI Prompt & Generation Engine */}
                    {isListingWriter && (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between pb-3 hairline-b">
                          <div className="flex items-center gap-2">
                            <Terminal size={14} className="text-white" />
                            <span className="text-white font-semibold text-xs tracking-wider">
                              LISTINGWRITER // OPEN SOURCE ENGINE
                            </span>
                          </div>
                          <span className="text-[10px] text-emerald-400">GitHub OSS</span>
                        </div>

                        <div className="space-y-3 text-xs">
                          <div className="p-3.5 rounded-xl bg-black/60 border border-white/[0.06]">
                            <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">
                              Raw Agent Inputs
                            </div>
                            <p className="text-zinc-200 font-sans text-xs">
                              &quot;4 bedroom semi-detached duplex, Guzape Abuja, 5kVA solar inverter, clean borehole, 24/7 security, tarred access.&quot;
                            </p>
                          </div>

                          <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.12]">
                            <div className="flex items-center justify-between text-[10px] text-zinc-400 uppercase tracking-wider mb-1">
                              <span>Formatted WhatsApp Broadcast Output</span>
                              <span className="text-emerald-400 font-mono">Ready to Post</span>
                            </div>
                            <p className="text-zinc-100 font-sans text-xs leading-relaxed mt-1">
                              🏡 <strong className="text-white">LUXURY 4-BEDROOM DUPLEX IN GUZAPE, ABUJA</strong><br />
                              &bull; 24/7 Power with 5kVA Solar Inverter Backup<br />
                              &bull; Independent Borehole &bull; Serene Tarred Access<br />
                              &bull; Ideal for Executives. Verification title available. Schedule your inspection today!
                            </p>
                          </div>
                        </div>

                        <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-500">
                          <span>Repository:</span>
                          <a
                            href="https://github.com/hafeezmt/listingwriter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline hover:text-blue-400"
                          >
                            github.com/hafeezmt/listingwriter
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Visual 3: Live Image Preview (Tilawa Daily) */}
                    {project.image && !isAgriSense && !isListingWriter && (
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black border border-white/[0.08]">
                        <Image
                          src={project.image}
                          alt={`${project.title} Preview`}
                          fill
                          className="object-cover object-top filter brightness-[0.96]"
                          sizes="(max-width: 1024px) 100vw, 550px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-emerald-500/30 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live Application
                        </div>
                      </div>
                    )}

                    {/* Visual 4: Architecture Specifications (PropaBridge, WizzyAI, NomaVault) */}
                    {!project.image && !isAgriSense && !isListingWriter && (
                      <div className="space-y-4 font-mono text-xs">
                        <div className="flex items-center justify-between pb-3 hairline-b">
                          <div className="flex items-center gap-2">
                            <Cpu size={14} className="text-white" />
                            <span className="text-white font-semibold text-xs tracking-wider">
                              SYSTEM SPECIFICATION // {project.title.toUpperCase()}
                            </span>
                          </div>
                          <span className="text-[10px] text-zinc-500">{project.category}</span>
                        </div>

                        <div className="space-y-2.5 text-xs">
                          <div className="flex justify-between p-3 rounded-lg bg-black/50 border border-white/[0.05]">
                            <span className="text-zinc-500">Core Architecture:</span>
                            <span className="text-zinc-200 font-sans">
                              {project.id === "propabridge" && "Framer CMS & Anti-Fraud Verification Engine"}
                              {project.id === "wizzyai" && "Claude API & 6 Adaptive Learning Modes"}
                              {project.id === "nomavault-ai" && "ESP32 Microcontroller Node + Solar Circuitry"}
                            </span>
                          </div>

                          <div className="flex justify-between p-3 rounded-lg bg-black/50 border border-white/[0.05]">
                            <span className="text-zinc-500">Operational Target:</span>
                            <span className="text-zinc-200 font-sans">Nigeria / West Africa</span>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs text-zinc-300 font-sans leading-relaxed">
                          {project.id === "propabridge" &&
                            "Led complete visual identity rebrand, Realtor Affiliate UX, and anti-fraud listing badge mechanics protecting Nigerian property seekers in Abuja, Kaduna, and Minna."}
                          {project.id === "wizzyai" &&
                            "Engineered 6 specialized interaction modes (Homework Help, Cultural Storytelling, STEM Quizzes, Curiosity Exploration, Chat, and Creative Writing) for African youth aged 5–15."}
                          {project.id === "nomavault-ai" &&
                            "Engineered autonomous CO₂ and temperature early-warning nodes for rural grain silos to eliminate post-harvest crop rot and weevil damage."}
                        </div>
                      </div>
                    )}

                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
