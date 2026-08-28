"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#050505]/90 backdrop-blur-2xl border-b border-white/[0.06] py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">

          {/* Logo — Full Name */}
          <Link
            href="#home"
            className="shrink-0 font-bold tracking-tight text-white hover:text-blue-400 transition-colors text-sm lg:text-base"
            aria-label="Jungudo Muhammad Tukur — Home"
          >
            JUNGUDO MUHAMMAD TUKUR<span className="text-blue-500">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-full transition-all hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-blue-600/20 shrink-0"
          >
            Let&apos;s Build Together
          </Link>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="md:hidden overflow-hidden bg-[#080810]/95 backdrop-blur-2xl border-b border-white/[0.06]"
            >
              <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-3 text-base font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-3 mt-2 border-t border-white/[0.06]">
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center py-3.5 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-500 transition-colors"
                  >
                    Let&apos;s Build Together
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="h-[4.5rem]" aria-hidden="true" />
    </>
  );
}
