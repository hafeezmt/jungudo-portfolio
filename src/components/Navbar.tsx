"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detector
      const sections = NAV_LINKS.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
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
        className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none"
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={cn(
            "pointer-events-auto flex items-center justify-between w-full max-w-5xl px-4 sm:px-6 py-2.5 rounded-full transition-all duration-500 border",
            scrolled
              ? "bg-[#0a0a10]/85 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              : "bg-[#0d0d14]/70 backdrop-blur-md border-white/8 shadow-xl"
          )}
        >
          {/* Brand Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 group"
            aria-label="Jungudo Muhammad Tukur — Home"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-xs text-white shadow-[0_0_12px_rgba(59,130,246,0.5)] group-hover:scale-105 transition-transform">
              JT
            </div>
            <span className="font-bold tracking-tight text-white text-xs sm:text-sm hidden sm:inline-block group-hover:text-blue-400 transition-colors">
              JUNGUDO<span className="text-blue-500">.</span>
            </span>
          </Link>

          {/* Desktop Navigation Capsule */}
          <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/6 px-3 py-1 rounded-full">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative px-3.5 py-1.5 text-xs font-medium transition-all rounded-full",
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/50 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-blue-600/25 border border-blue-500/40 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-full transition-all hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <Sparkles size={12} />
              Let&apos;s Build
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center text-white/70 hover:text-white bg-white/5 rounded-full transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden bg-[#0d0d15]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-2xl space-y-3"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center py-3 bg-blue-600 text-white rounded-xl font-semibold text-xs hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
              >
                Let&apos;s Build Together
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
