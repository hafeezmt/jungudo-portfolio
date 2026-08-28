import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "@/data/social";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 relative" role="contentinfo">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.04),transparent_70%)]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="#home" className="text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
              JMT<span className="text-blue-500">.</span>
            </Link>
            <p className="text-xs text-white/30 mt-1 font-mono">
              Building with Data, AI &amp; Technology.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs text-white/30 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex gap-3">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/8 text-white/40 hover:text-white hover:bg-white/10 transition-all">
              <FaGithub size={14} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/8 text-white/40 hover:text-[#0077b5] hover:bg-[#0077b5]/10 transition-all">
              <FaLinkedin size={14} />
            </a>
            <a href={socialLinks.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/8 text-white/40 hover:text-white hover:bg-white/10 transition-all">
              <FaXTwitter size={13} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Jungudo Muhammad Tukur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
