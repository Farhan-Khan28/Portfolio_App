"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#08090B] border-t border-[#252A33] py-12 text-[#A5ABB5]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#1E222A]">
          
          {/* Left Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#101216] border border-[#252A33] flex items-center justify-center text-[#F5F7FA]">
              <span className="font-mono text-sm font-bold text-[#6366F1]">FK</span>
            </div>
            <div>
              <div className="font-heading text-sm font-bold text-[#F5F7FA]">
                Farhan Khan
              </div>
              <div className="font-mono text-xs text-[#6F7682]">
                Full-Stack Web Developer
              </div>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <a href="#work" className="hover:text-[#F5F7FA] transition-colors no-underline">
              Work
            </a>
            <a href="#about" className="hover:text-[#F5F7FA] transition-colors no-underline">
              About
            </a>
            <a href="#capabilities" className="hover:text-[#F5F7FA] transition-colors no-underline">
              Capabilities
            </a>
            <a href="#process" className="hover:text-[#F5F7FA] transition-colors no-underline">
              Process
            </a>
            <a href="#experience" className="hover:text-[#F5F7FA] transition-colors no-underline">
              Experience
            </a>
            <a href="#code" className="hover:text-[#F5F7FA] transition-colors no-underline">
              Code
            </a>
            <a href="#terminal" className="hover:text-[#F5F7FA] transition-colors no-underline">
              Terminal
            </a>
            <a href="#contact" className="hover:text-[#F5F7FA] transition-colors no-underline">
              Contact
            </a>
          </div>

          {/* Right Social & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#101216] border border-[#252A33] text-[#A5ABB5] hover:text-[#F5F7FA] hover:border-[#6366F1] transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#101216] border border-[#252A33] text-[#A5ABB5] hover:text-[#F5F7FA] hover:border-[#6366F1] transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@farhankhan.dev"
              className="p-2 rounded-lg bg-[#101216] border border-[#252A33] text-[#A5ABB5] hover:text-[#F5F7FA] hover:border-[#6366F1] transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#15181D] border border-[#252A33] text-[#A5ABB5] hover:text-[#F5F7FA] hover:border-[#6366F1] transition-all ml-2"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Upgraded Truthful Technical Status Panel */}
        <div className="mt-8 bg-[#101216] border border-[#252A33] rounded-xl p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
          <div>
            <div className="text-[#6F7682]">SYSTEM STATUS</div>
            <div className="text-[#10B981] font-bold mt-0.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>PORTFOLIO ONLINE</span>
            </div>
          </div>

          <div>
            <div className="text-[#6F7682]">FEATURED PROJECTS</div>
            <div className="text-[#F5F7FA] font-bold mt-0.5">4 Production Case Studies</div>
          </div>

          <div>
            <div className="text-[#6F7682]">PRIMARY STACK</div>
            <div className="text-[#F5F7FA] font-bold mt-0.5">Laravel / PHP / MySQL / JS</div>
          </div>

          <div>
            <div className="text-[#6F7682]">LAST SYSTEM UPDATE</div>
            <div className="text-[#818CF8] font-bold mt-0.5">October 2026</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center font-mono text-xs text-[#6F7682]">
          &copy; {new Date().getFullYear()} Farhan Khan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
