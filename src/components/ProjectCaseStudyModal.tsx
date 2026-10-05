"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, AlertTriangle, Code, Server, Database, ShieldCheck, ArrowRight } from "lucide-react";
import { ProjectData } from "@/data/projectsData";
import { GithubIcon } from "./SocialIcons";

interface ModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

type TabType = "OVERVIEW" | "ARCHITECTURE" | "FEATURES" | "CHALLENGES" | "CODE";

export default function ProjectCaseStudyModal({ project, onClose }: ModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("OVERVIEW");

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
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#101216] border border-[#252A33] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-4 bg-[#101216]/95 border-b border-[#252A33] backdrop-blur-md gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[#818CF8] bg-[#15181D] px-2.5 py-1 rounded border border-[#252A33]">
              {project.number}
            </span>
            <span className="font-heading text-sm font-bold text-[#F5F7FA]">
              {project.title}
            </span>
          </div>

          {/* Section Switcher Tabs */}
          <div className="flex items-center gap-1 bg-[#08090B] p-1 rounded-lg border border-[#252A33] overflow-x-auto max-w-full">
            {(["OVERVIEW", "ARCHITECTURE", "FEATURES", "CHALLENGES", "CODE"] as TabType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2.5 py-1 text-[11px] font-mono font-medium rounded transition-all ${
                  activeTab === tab
                    ? "bg-[#15181D] text-[#818CF8] border border-[#3A414E]"
                    : "text-[#6F7682] hover:text-[#A5ABB5]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#15181D] border border-[#252A33] text-[#A5ABB5] hover:text-[#F5F7FA] hover:border-[#6366F1] transition-all"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
          
          {/* Header Title & Subtitle */}
          <div>
            <div className="font-mono text-xs text-[#818CF8] tracking-widest uppercase mb-1">
              {project.category}
            </div>
            <h2 className="heading-section text-[#F5F7FA] mb-2">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#A5ABB5] font-medium">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#1E222A]">
              {project.tech.map((t) => (
                <span key={t} className="badge-tech badge-accent">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Tab 1: OVERVIEW */}
          {activeTab === "OVERVIEW" && (
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-3">
                <div className="font-mono text-xs text-[#6F7682] uppercase tracking-wider">
                  SYSTEM OVERVIEW
                </div>
                <p className="text-sm sm:text-base text-[#A5ABB5] leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#15181D] border border-[#252A33] rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#EF4444] font-semibold">
                    <AlertTriangle className="w-4 h-4" />
                    <span>THE BUSINESS PROBLEM</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A5ABB5] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="bg-[#15181D] border border-[#252A33] rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#10B981] font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>THE ENGINEERING SOLUTION</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A5ABB5] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: ARCHITECTURE */}
          {activeTab === "ARCHITECTURE" && (
            <div className="space-y-6 animate-fade-in">
              <div className="font-mono text-xs text-[#6F7682] uppercase tracking-wider">
                END-TO-END DATA FLOW PIPELINE
              </div>

              <div className="bg-[#08090B] border border-[#252A33] rounded-xl p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {project.architectureNodes.map((node, idx) => (
                    <div key={idx} className="bg-[#101216] border border-[#252A33] p-4 rounded-lg space-y-2">
                      <div className="font-mono text-[10px] text-[#818CF8] font-semibold">
                        LAYER 0{idx + 1}
                      </div>
                      <div className="text-xs font-bold text-[#F5F7FA]">{node}</div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-[#1E222A] font-mono text-xs text-[#A5ABB5] leading-relaxed">
                  <strong className="text-[#818CF8]">Pipeline Flow:</strong> Client Browser Request &rarr; Route Authorization Middleware &rarr; Laravel Controller & Service Logic &rarr; MySQL Database Eloquent Query.
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: FEATURES */}
          {activeTab === "FEATURES" && (
            <div className="space-y-6 animate-fade-in">
              <div className="font-mono text-xs text-[#6F7682] uppercase tracking-wider">
                KEY CORE FEATURES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-lg bg-[#15181D] border border-[#252A33]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#F5F7FA] font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: CHALLENGES */}
          {activeTab === "CHALLENGES" && (
            <div className="space-y-6 animate-fade-in">
              <div className="font-mono text-xs text-[#6F7682] uppercase tracking-wider">
                ENGINEERING CHALLENGES & RESOLUTION
              </div>
              <div className="space-y-4">
                {project.technicalChallenges.map((item, idx) => (
                  <div key={idx} className="bg-[#15181D] border border-[#252A33] rounded-xl p-5 space-y-3">
                    <div className="text-xs font-bold text-[#EF4444] font-mono">
                      CHALLENGE: {item.challenge}
                    </div>
                    <div className="text-xs sm:text-sm text-[#A5ABB5] pt-2 border-t border-[#1E222A]">
                      <strong className="text-[#10B981] font-mono">RESOLUTION:</strong> {item.resolution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: CODE */}
          {activeTab === "CODE" && (
            <div className="space-y-6 animate-fade-in">
              <div className="font-mono text-xs text-[#6F7682] uppercase tracking-wider">
                FARHAN'S INDIVIDUAL CODE DELIVERABLES
              </div>
              <div className="bg-[#15181D] border border-[#252A33] rounded-xl p-5 space-y-3">
                {project.contribution.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A5ABB5]">
                    <span className="font-mono text-[#818CF8] font-bold">›</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-6 border-t border-[#1E222A] flex items-center justify-between">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary text-xs flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            )}
            <button onClick={onClose} className="btn btn-outline text-xs">
              Close Case Study
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
