"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Send, Mail, Copy, Check, MapPin, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaDev, FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "@/data/social";
import { profile } from "@/data/profile";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const encodedSubject = encodeURIComponent(
      form.subject ? `[Portfolio Inquiry] ${form.subject}` : `Inquiry from ${form.name}`
    );
    const encodedBody = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:${socialLinks.email}?subject=${encodedSubject}&body=${encodedBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative" aria-label="Contact section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">
            06 &bull; Initiate Connection
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white max-w-2xl">
            Let&apos;s Build Together
          </h2>
          <p className="mt-3 text-zinc-400 text-base max-w-xl">
            Available for software engineering roles, technology projects, AI initiatives, and research collaborations.
          </p>
        </motion.div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Channels (5 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-[#09090b] border border-white/[0.08] space-y-6">
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">Direct Inbox</h3>
                <p className="text-xs text-zinc-400 mt-1 font-normal">
                  Drop me an email directly or connect across verified channels.
                </p>
              </div>

              {/* Email Address with Copy Button */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-md bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white shrink-0">
                    <Mail size={15} />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono uppercase text-zinc-500">Email Address</div>
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:underline truncate block mt-0.5"
                    >
                      {socialLinks.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-all shrink-0 cursor-pointer"
                  aria-label="Copy email address"
                  title="Copy email address"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location & Availability */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-black/50 border border-white/[0.05]">
                  <div className="text-zinc-500 text-[10px] uppercase">Base</div>
                  <div className="text-zinc-200 mt-0.5 flex items-center gap-1">
                    <MapPin size={11} className="text-zinc-400" />
                    <span>{profile.location}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/50 border border-white/[0.05]">
                  <div className="text-zinc-500 text-[10px] uppercase">Availability</div>
                  <div className="text-white mt-0.5 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Actively Open</span>
                  </div>
                </div>
              </div>

              {/* Verified Profiles Grid */}
              <div className="pt-4 hairline-t">
                <div className="text-[10px] font-mono uppercase text-zinc-500 mb-3">
                  Verified Developer Profiles
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-black/50 hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/20 transition-all flex items-center justify-between text-xs font-medium text-zinc-300 hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <FaGithub size={14} /> GitHub
                    </span>
                    <ExternalLink size={11} className="opacity-50" />
                  </a>

                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-black/50 hover:bg-white/[0.04] border border-white/[0.05] hover:border-[#0077b5]/50 transition-all flex items-center justify-between text-xs font-medium text-zinc-300 hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <FaLinkedin size={14} /> LinkedIn
                    </span>
                    <ExternalLink size={11} className="opacity-50" />
                  </a>

                  <a
                    href={socialLinks.devto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-black/50 hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/20 transition-all flex items-center justify-between text-xs font-medium text-zinc-300 hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <FaDev size={14} /> Dev.to
                    </span>
                    <ExternalLink size={11} className="opacity-50" />
                  </a>

                  <a
                    href={socialLinks.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-black/50 hover:bg-white/[0.04] border border-white/[0.05] hover:border-white/20 transition-all flex items-center justify-between text-xs font-medium text-zinc-300 hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <FaXTwitter size={13} /> X / Twitter
                    </span>
                    <ExternalLink size={11} className="opacity-50" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Column (7 cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-2xl bg-[#09090b] border border-white/[0.08]">
              <h3 className="text-base font-bold text-white tracking-tight mb-1">Direct Message Form</h3>
              <p className="text-xs text-zinc-400 mb-6 font-normal">
                Submit an inquiry or project scope. Dispatches directly to my primary inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono text-zinc-300">
                      Your Name <span className="text-white">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Amina Bello"
                      value={form.name}
                      onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] focus:border-white focus:bg-black text-white text-xs sm:text-sm placeholder:text-zinc-600 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono text-zinc-300">
                      Your Email <span className="text-white">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. amina@example.com"
                      value={form.email}
                      onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] focus:border-white focus:bg-black text-white text-xs sm:text-sm placeholder:text-zinc-600 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono text-zinc-300">
                    Subject / Opportunity
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="e.g. Software Engineering Opportunity / AgriSense Collaboration"
                    value={form.subject}
                    onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] focus:border-white focus:bg-black text-white text-xs sm:text-sm placeholder:text-zinc-600 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-300">
                    Message <span className="text-white">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/[0.08] focus:border-white focus:bg-black text-white text-xs sm:text-sm placeholder:text-zinc-600 focus:outline-none transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
                >
                  <Send size={13} />
                  <span>Send Message via Email</span>
                </button>

                {submitted && (
                  <p className="text-xs font-mono text-emerald-400 pt-2 flex items-center gap-1.5">
                    <Check size={14} /> Email client opened! If your client didn&apos;t open, copy the email directly.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
