"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Clock, FileText } from "lucide-react";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa6";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Overview", href: "#overview" },
  { name: "Projects", href: "#projects" },
  { name: "Expertise", href: "#expertise" },
  { name: "Timeline", href: "#timeline" },
  { name: "Recognition", href: "#recognition" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("overview");
  const [localTime, setLocalTime] = useState("");

  // Live Local Time in Gombe, Nigeria (GMT+1 / WAT)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString("en-US", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        setLocalTime(timeStr);
      } catch {
        setLocalTime("WAT");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection for active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["overview", "projects", "expertise", "timeline", "recognition", "contact"];
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveItem(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveItem("overview");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pt-3 pointer-events-none"
      >
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className={cn(
            "pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 sm:px-5 py-2.5 rounded-2xl transition-all duration-300 border",
            scrolled
              ? "bg-[#08080c]/85 backdrop-blur-xl border-white/[0.09] shadow-[0_16px_36px_rgba(0,0,0,0.7)]"
              : "bg-[#090a0f]/60 backdrop-blur-md border-white/[0.05]"
          )}
        >
          {/* Brand mark & Identity */}
          <Link
            href="#overview"
            className="flex items-center gap-3 group"
            aria-label="Jungudo Muhammad Tukur"
          >
            <div className="relative w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-white group-hover:border-blue-500/50 group-hover:bg-blue-600/10 transition-all">
              <span>JT</span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-[#08080c]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold tracking-tight text-zinc-100 group-hover:text-blue-400 transition-colors">
                Jungudo M. Tukur
              </span>
              <span className="text-[10px] font-mono text-zinc-500 tracking-wider hidden sm:flex items-center gap-1.5">
                <span>Nigeria</span>
                {localTime && (
                  <>
                    <span>•</span>
                    <span className="text-zinc-400 flex items-center gap-0.5">
                      <Clock size={9} className="opacity-70" />
                      {localTime} WAT
                    </span>
                  </>
                )}
              </span>
            </div>
          </Link>

          {/* Desktop Segmented Navigation */}
          <div className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            {NAV_ITEMS.map((item) => {
              const id = item.href.substring(1);
              const isActive = activeItem === id;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs font-medium transition-all rounded-lg",
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.03]"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white/[0.08] border border-white/15 rounded-lg shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-2">
            {profile.cvAvailable && (
              <a
                href={profile.cv}
                download
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] transition-all"
                title="Download Official CV"
              >
                <FileText size={13} className="text-blue-400" />
                <span>Resume</span>
              </a>
            )}

            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-[0_0_16px_rgba(59,130,246,0.25)] hover:shadow-[0_0_24px_rgba(59,130,246,0.45)] transition-all"
            >
              <span>Connect</span>
              <ArrowUpRight size={13} />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-3 top-16 z-40 lg:hidden bg-[#0a0a0f]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl space-y-3"
          >
            <div className="flex flex-col space-y-0.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-zinc-600 text-xs font-mono">→</span>
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-white/8 flex items-center justify-between text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={14} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0077b5] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={14} />
                </a>
                <a
                  href={socialLinks.devto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Dev.to"
                >
                  <FaDev size={14} />
                </a>
              </div>

              {profile.cvAvailable && (
                <a
                  href={profile.cv}
                  download
                  className="text-blue-400 hover:underline flex items-center gap-1"
                >
                  <FileText size={11} />
                  <span>Download CV</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
