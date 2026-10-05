"use client";

import { useEffect } from "react";
import { X, ArrowRight, Layers, CheckCircle2 } from "lucide-react";
import { ProjectData } from "@/data/projectsData";
import { GithubIcon } from "./SocialIcons";

interface QuickPreviewProps {
  project: ProjectData | null;
  onClose: () => void;
  onOpenFullCaseStudy: (project: ProjectData) => void;
}

export default function ProjectQuickPreviewModal({
  project,
  onClose,
  onOpenFullCaseStudy,
}: QuickPreviewProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#08090B]/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#101216] border border-[#252A33] rounded-2xl shadow-2xl overflow-hidden my-8 p-6 sm:p-8 space-y-6">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-[#1E222A] pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[#818CF8] bg-[#08090B] px-2.5 py-1 rounded border border-[#252A33]">
              {project.number}
            </span>
            <span className="font-mono text-xs text-[#6F7682] uppercase">
              QUICK PREVIEW
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#15181D] border border-[#252A33] text-[#A5ABB5] hover:text-[#F5F7FA]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title & Category */}
        <div>
          <div className="font-mono text-xs text-[#818CF8] tracking-widest uppercase mb-1">
            {project.category}
          </div>
          <h3 className="heading-section text-2xl sm:text-3xl text-[#F5F7FA]">
            {project.title}
          </h3>
          <p className="text-sm font-semibold text-[#818CF8] mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#A5ABB5] leading-relaxed">
          {project.overview}
        </p>

        {/* Tech Stack */}
        <div className="space-y-2 pt-2">
          <div className="font-mono text-xs text-[#6F7682] uppercase">
            PRIMARY TECHNOLOGIES
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="badge-tech">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="bg-[#08090B] border border-[#252A33] rounded-xl p-4 space-y-2">
          <div className="font-mono text-xs text-[#818CF8] font-semibold">
            SYSTEM PIPELINE
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.architectureNodes.map((node, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#A5ABB5]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>{node}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions CTA */}
        <div className="pt-4 border-t border-[#1E222A] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              onClose();
              onOpenFullCaseStudy(project);
            }}
            className="btn btn-primary text-xs flex items-center gap-2"
          >
            <span>View Full Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-xs flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
