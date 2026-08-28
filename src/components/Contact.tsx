"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Loader2, CheckCircle, AlertCircle } from "lucide-react";
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
      <label htmlFor={id} className="block text-sm font-medium text-white/60">
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
        className="w-full px-4 py-3 bg-white/[0.04] border border-white/8 rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.06] transition-all"
      />
    </div>
  );
}

export function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [status, setStatus] = useState<SubmitStatus>("idle");

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
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2">05 — Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Have a Problem Worth Solving?
          </h2>
          <p className="mt-4 text-white/40 text-base max-w-2xl">
            I&apos;m interested in collaborating on technology, AI, data, software, geospatial, IoT, and social-impact projects. Let&apos;s build something useful together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-5">Get in touch</p>
              <a
                href={`mailto:${socialLinks.email}`}
                className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/8 group-hover:bg-blue-500/15 group-hover:border-blue-500/25 transition-all">
                  <Mail size={15} />
                </div>
                <span className="text-sm break-all">{socialLinks.email}</span>
              </a>
            </div>

            <div>
              <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-5">Elsewhere</p>
              <div className="flex gap-3">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/8 text-white/50 hover:bg-white hover:text-black hover:border-white transition-all"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/8 text-white/50 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href={socialLinks.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/8 text-white/50 hover:bg-white hover:text-black hover:border-white transition-all"
                >
                  <FaXTwitter size={15} />
                </a>
              </div>
            </div>

            <div className="p-5 bg-blue-500/[0.04] border border-blue-500/12 rounded-2xl">
              <p className="text-xs text-blue-300/80 leading-relaxed">
                <strong className="font-semibold text-white">Direct Email:</strong> You can also send an email directly to <a href={`mailto:${socialLinks.email}`} className="underline text-blue-400 hover:text-blue-300">{socialLinks.email}</a> for inquiries, project ideas, or collaborations.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="h-full min-h-[380px] flex flex-col items-center justify-center gap-5 text-center p-10 bg-white/[0.025] border border-white/6 rounded-2xl">
                <CheckCircle size={48} className="text-green-400" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Opening Email Client...</h3>
                  <p className="text-white/40 text-sm max-w-xs">
                    Your message has been formatted and opened in your email app to send directly to {socialLinks.email}.
                  </p>
                </div>
                <button
                  onClick={() => { setStatus("idle"); setForm(INITIAL_FORM); }}
                  className="px-5 py-2 bg-white/8 border border-white/10 text-white text-sm rounded-full hover:bg-white/15 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white/[0.025] border border-white/6 rounded-2xl p-7 lg:p-9 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField label="Name" id="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                  <InputField label="Email" id="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
                </div>
                <InputField label="Subject" id="subject" value={form.subject} onChange={handleChange} placeholder="What is this about?" />

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-sm font-medium text-white/60">
                    Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/8 rounded-xl text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-blue-500/60 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle size={15} />
                    <span>Something went wrong. Please try again or email directly.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all",
                    canSubmit
                      ? "bg-blue-600 text-white hover:bg-blue-500 active:scale-[0.98]"
                      : "bg-white/5 text-white/30 cursor-not-allowed"
                  )}
                >
                  {status === "loading" ? (
                    <><Loader2 size={15} className="animate-spin" /> Preparing Email...</>
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
