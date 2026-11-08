"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa6";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Selected Work", href: "#work" },
  { name: "Expertise", href: "#skills" },
  { name: "Timeline", href: "#timeline" },
  { name: "About", href: "#about" },
  { name: "Recognition", href: "#recognition" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("work");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["work", "skills", "timeline", "about", "recognition", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveLink(sectionIds[i]);
          return;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        
        {/* Left: Brand Identity */}
        <Link
          href="#overview"
          className="flex items-center gap-3 group"
          aria-label="Jungudo Muhammad Tukur"
        >
          <div className="w-8 h-8 rounded-md bg-white text-black font-mono font-bold text-xs flex items-center justify-center transition-transform group-hover:scale-105">
            JT
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-zinc-300 transition-colors">
              Jungudo Muhammad Tukur
            </span>
            <span className="text-[11px] font-mono text-zinc-500 tracking-wider hidden sm:block">
              Software Developer &bull; Nigeria
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeLink === id;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs font-medium tracking-wide transition-colors relative py-1",
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-1 inset-x-0 h-px bg-white"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {profile.cvAvailable && (
            <a
              href={profile.cv}
              download
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono text-zinc-400 hover:text-white border border-white/[0.08] hover:border-white/20 transition-all"
              title="Download Resume"
            >
              <FileText size={12} />
              <span>Resume</span>
            </a>
          )}

          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-semibold transition-all shadow-sm"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight size={13} />
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b border-white/[0.08] px-6 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-4">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  <FaGithub size={15} />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  <FaLinkedin size={15} />
                </a>
                <a href={socialLinks.devto} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  <FaDev size={15} />
                </a>
              </div>
              {profile.cvAvailable && (
                <a href={profile.cv} download className="text-white hover:underline flex items-center gap-1">
                  <FileText size={12} />
                  <span>Download CV</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
