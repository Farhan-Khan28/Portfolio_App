"use client";

import { ArrowRight, Download, Mail } from "lucide-react";
import ArchitectureDiagram from "./ArchitectureDiagram";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import MagneticButton from "./MagneticButton";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" id="hero">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#6366F1]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Positioning & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            
            {/* Technical Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101216] border border-[#252A33] text-xs font-mono text-[#818CF8]">
              <span className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse" />
              <span>FULL-STACK WEB DEVELOPER</span>
              <span className="text-[#6F7682]">//</span>
              <span className="text-[#A5ABB5]">LARAVEL & MYSQL ARCHITECT</span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="heading-display text-[#F5F7FA] tracking-tight">
                Farhan Khan
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#818CF8] leading-tight">
                I build complete web applications from frontend to backend.
              </h2>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#A5ABB5] leading-relaxed max-w-xl font-normal">
              I design and develop scalable web solutions with modern interfaces, robust backend systems, APIs, database architecture, authentication, and real-world business logic.
            </p>

            {/* Dual CTAs with Magnetic Effect */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton href="#work" className="btn btn-primary" id="hero-cta-work">
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton href="#contact" className="btn btn-secondary flex items-center gap-2" id="hero-cta-resume">
                <Download className="w-4 h-4 text-[#818CF8]" />
                <span>Download Resume</span>
              </MagneticButton>
            </div>

            {/* Social Vectors & Quick Contact Links */}
            <div className="flex items-center gap-6 pt-4 border-t border-[#1E222A] w-full max-w-xl">
              <span className="font-mono text-xs text-[#6F7682]">CONNECT:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#101216] border border-[#252A33] text-[#A5ABB5] hover:text-[#F5F7FA] hover:border-[#6366F1] transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#101216] border border-[#252A33] text-[#A5ABB5] hover:text-[#F5F7FA] hover:border-[#6366F1] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:contact@farhankhan.dev"
                  className="p-2 rounded-lg bg-[#101216] border border-[#252A33] text-[#A5ABB5] hover:text-[#F5F7FA] hover:border-[#6366F1] transition-all"
                  aria-label="Email Contact"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Living Architecture Visualizer */}
          <div className="lg:col-span-6 w-full">
            <ArchitectureDiagram />
          </div>

        </div>
      </div>
    </section>
  );
}
