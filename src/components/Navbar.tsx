"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { socialLinks } from "@/data/social";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Recognition", href: "#recognition" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ["about", "projects", "skills", "experience", "recognition", "contact"];
      const scrollPos = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        role="banner"
        className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pt-3 pointer-events-none"
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={cn(
            "pointer-events-auto flex items-center justify-between w-full max-w-6xl px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 border",
            scrolled
              ? "bg-[#0b0c12]/90 backdrop-blur-xl border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
              : "bg-[#0c0d14]/75 backdrop-blur-md border-white/6 shadow-lg"
          )}
        >
          {/* Brand Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 group"
            aria-label="Jungudo Muhammad Tukur — Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-mono font-bold text-xs text-white shadow-[0_0_15px_rgba(59,130,246,0.35)] group-hover:scale-105 transition-transform">
              JT
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight text-white text-xs sm:text-sm group-hover:text-blue-400 transition-colors">
                Jungudo M. Tukur
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider hidden sm:block">
                Software Dev • Innovator
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.02] border border-white/6 px-2 py-1 rounded-xl">
            {NAV_LINKS.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs font-medium transition-all rounded-lg",
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-blue-500/15 border border-blue-500/30 rounded-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Action: GitHub + Contact CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/10 transition-all"
            >
              <FaGithub size={15} />
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-[0_0_16px_rgba(59,130,246,0.3)] hover:shadow-[0_0_22px_rgba(59,130,246,0.5)]"
            >
              <span>Connect</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-18 z-40 md:hidden bg-[#0c0d14]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl space-y-4"
          >
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.06] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-slate-500 font-mono text-xs">→</span>
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white"
              >
                <FaGithub size={14} />
                <span>github.com/hafeezmt</span>
              </a>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
