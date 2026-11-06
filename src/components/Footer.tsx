import Link from "next/link";
import { FaGithub, FaLinkedin, FaDev, FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "@/data/social";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Recognition", href: "#recognition" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/6 py-14 relative bg-[#070709]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand & Identity */}
          <div className="text-center md:text-left space-y-1">
            <Link
              href="#home"
              className="text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors inline-block"
            >
              Jungudo Muhammad Tukur
            </Link>
            <p className="text-xs text-slate-400 font-mono">
              Building technology that solves real-world problems • Nigeria
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Profiles */}
          <div className="flex items-center gap-2.5">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/8 text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all"
            >
              <FaGithub size={15} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/8 text-slate-400 hover:text-[#0077b5] hover:bg-white/[0.08] hover:border-[#0077b5]/40 transition-all"
            >
              <FaLinkedin size={15} />
            </a>
            <a
              href={socialLinks.devto}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dev.to Articles"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/8 text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all"
            >
              <FaDev size={15} />
            </a>
            <a
              href={socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/8 text-slate-400 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all"
            >
              <FaXTwitter size={14} />
            </a>
          </div>

        </div>

        {/* Bottom Hairline & Legal */}
        <div className="mt-10 pt-6 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Jungudo Muhammad Tukur. All rights reserved.
          </div>
          <div className="text-[11px] text-slate-400">
            Engineered with Next.js, TypeScript &amp; Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
