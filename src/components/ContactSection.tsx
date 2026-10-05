"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import MagneticButton from "./MagneticButton";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all required fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="section bg-[#08090B] border-t border-[#252A33]" id="contact">
      <div className="container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Vectors & Value Prop */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="eyebrow">
              <span>// START A CONVERSATION</span>
            </div>

            <h2 className="heading-section text-[#F5F7FA]">
              Have a project in mind?
            </h2>

            <p className="text-base text-[#A5ABB5] leading-relaxed">
              Let's build something useful, scalable, and beautifully engineered. Whether you need a complete web application built from scratch, backend API architecture, or database optimization, I'm ready to collaborate.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              <a
                href="mailto:contact@farhankhan.dev"
                className="p-4 rounded-xl bg-[#101216] border border-[#252A33] flex items-center justify-between group hover:border-[#6366F1] transition-all no-underline"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#15181D] border border-[#252A33] text-[#6366F1]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#6F7682]">PRIMARY EMAIL</div>
                    <div className="text-sm font-bold text-[#F5F7FA] group-hover:text-[#6366F1] transition-colors">
                      contact@farhankhan.dev
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6F7682] group-hover:text-[#6366F1] transition-colors" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#101216] border border-[#252A33] flex items-center justify-between group hover:border-[#6366F1] transition-all no-underline"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#15181D] border border-[#252A33] text-[#0A66C2]">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#6F7682]">LINKEDIN PROFILE</div>
                    <div className="text-sm font-bold text-[#F5F7FA] group-hover:text-[#6366F1] transition-colors">
                      linkedin.com/in/farhankhan
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6F7682] group-hover:text-[#6366F1] transition-colors" />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#101216] border border-[#252A33] flex items-center justify-between group hover:border-[#6366F1] transition-all no-underline"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#15181D] border border-[#252A33] text-[#F5F7FA]">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-xs text-[#6F7682]">GITHUB REPOSITORIES</div>
                    <div className="text-sm font-bold text-[#F5F7FA] group-hover:text-[#6366F1] transition-colors">
                      github.com/farhankhan
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6F7682] group-hover:text-[#6366F1] transition-colors" />
              </a>
            </div>

            {/* Availability Badge */}
            <div className="p-4 rounded-xl bg-[#101216] border border-[#252A33] flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs font-mono text-[#A5ABB5]">
                Currently available for full-time roles & high-impact contracts.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#101216] border border-[#252A33] rounded-2xl p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="heading-card text-[#F5F7FA]">Message Received!</h3>
                <p className="text-sm text-[#A5ABB5] max-w-md">
                  Thank you for reaching out. I will review your project details and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="btn btn-secondary btn-sm mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-heading text-xl font-bold text-[#F5F7FA] mb-4">
                  Send a Direct Message
                </h3>

                {error && (
                  <div className="p-3 rounded-lg bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] text-xs font-mono flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-[#A5ABB5] mb-1.5">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#08090B] border border-[#252A33] text-[#F5F7FA] placeholder-[#6F7682] focus:border-[#6366F1] outline-none text-sm transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-[#A5ABB5] mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#08090B] border border-[#252A33] text-[#F5F7FA] placeholder-[#6F7682] focus:border-[#6366F1] outline-none text-sm transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#A5ABB5] mb-1.5">
                    SUBJECT / PROJECT TYPE
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Web Application / API Development"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#08090B] border border-[#252A33] text-[#F5F7FA] placeholder-[#6F7682] focus:border-[#6366F1] outline-none text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#A5ABB5] mb-1.5">
                    MESSAGE DETAILS *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your application requirements, target timeline, or tech stack needs..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#08090B] border border-[#252A33] text-[#F5F7FA] placeholder-[#6F7682] focus:border-[#6366F1] outline-none text-sm transition-colors resize-none"
                    required
                  />
                </div>

                <div className="w-full pt-2">
                  <MagneticButton id="contact-cta-submit" className="btn btn-primary w-full flex items-center justify-center gap-2">
                    {loading ? (
                      <span className="font-mono text-xs animate-pulse">TRANSMITTING MESSAGE...</span>
                    ) : (
                      <>
                        <span>Start a Conversation</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
