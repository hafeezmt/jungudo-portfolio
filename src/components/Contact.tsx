"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Loader2, CheckCircle, AlertCircle, MessageSquare, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "@/data/social";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

const INITIAL_FORM: FormState = { name: "", email: "", subject: "", message: "" };

function InputField({
  label,
  id,
  type = "text",
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  id: keyof FormState;
  type?: string;
  value: string;
  onChange: (id: keyof FormState, val: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-mono text-slate-300">
        {label}
        {required && <span className="text-blue-400 ml-1">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        className="w-full px-4 py-3 bg-white/[0.03] border border-white/8 rounded-xl text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.05] transition-all"
      />
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [copied, setCopied] = useState(false);

  const handleChange = useCallback((id: keyof FormState, val: string) => {
    setForm((prev) => ({ ...prev, [id]: val }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await new Promise((res) => setTimeout(res, 600));

      const subject = encodeURIComponent(form.subject || `Inquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );

      // Open mail client directly
      window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const canSubmit = form.name && form.email && form.message && status !== "loading";

  return (
    <section id="contact" className="py-24 lg:py-32 relative" aria-label="Contact section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">05 — Connect</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-xl">
            Open for product leads, UI/UX design architecture, AI collaborations, and startup opportunities.
          </p>
        </motion.div>

        {/* Bento Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Info Bento Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 bento-card p-7 sm:p-9 rounded-3xl flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Direct Reach</h3>
                  <p className="text-xs text-slate-400">Response within 24 hours</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Email Address</p>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="text-sm font-semibold text-blue-400 hover:text-blue-300 break-all transition-colors"
                  >
                    {socialLinks.email}
                  </a>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(socialLinks.email);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    title="Copy email to clipboard"
                    className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/8 text-slate-400 hover:text-white transition-all text-xs flex items-center gap-1"
                  >
                    {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
                    <span className="text-[10px]">{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Social Profiles</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                    aria-label="GitHub"
                  >
                    <FaGithub size={16} />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#0077b5] hover:bg-[#0077b5]/10 transition-all"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={16} />
                  </a>
                  <a
                    href={socialLinks.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                    aria-label="X (Twitter)"
                  >
                    <FaXTwitter size={15} />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-500/[0.04] border border-blue-500/12 rounded-2xl text-xs text-slate-300 leading-relaxed">
              Based in Gombe State, Nigeria — working with teams and clients worldwide.
            </div>
          </motion.div>

          {/* Right Form Bento Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bento-card p-7 sm:p-9 rounded-3xl"
          >
            {status === "success" ? (
              <div className="h-full min-h-[380px] flex flex-col items-center justify-center gap-5 text-center">
                <CheckCircle size={48} className="text-green-400" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Opening Mail App...</h3>
                  <p className="text-slate-400 text-xs sm:text-sm max-w-xs">
                    Your message has been pre-formatted and opened in your email app to send to {socialLinks.email}.
                  </p>
                </div>
                <button
                  onClick={() => { setStatus("idle"); setForm(INITIAL_FORM); }}
                  className="px-5 py-2 bg-white/[0.05] border border-white/10 text-white text-xs font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField label="Name" id="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                  <InputField label="Email" id="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                </div>
                <InputField label="Subject" id="subject" value={form.subject} onChange={handleChange} placeholder="Project inquiry, design, or role..." />

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono text-slate-300">
                    Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 bg-white/[0.03] border border-white/8 rounded-xl text-white text-xs sm:text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.05] transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-xs">
                    <AlertCircle size={15} />
                    <span>Something went wrong. Please try emailing directly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all",
                    canSubmit
                      ? "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.4)] active:scale-[0.98]"
                      : "bg-white/[0.04] text-slate-600 cursor-not-allowed"
                  )}
                >
                  {status === "loading" ? (
                    <><Loader2 size={15} className="animate-spin" /> Preparing Mail...</>
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
