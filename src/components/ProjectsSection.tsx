"use client";

import { useState } from "react";
import { ArrowUpRight, Eye } from "lucide-react";
import { PROJECTS, ProjectData } from "@/data/projectsData";
import ProjectCaseStudyModal from "./ProjectCaseStudyModal";
import ProjectQuickPreviewModal from "./ProjectQuickPreviewModal";

export default function ProjectsSection() {
  const [fullCaseStudyProject, setFullCaseStudyProject] = useState<ProjectData | null>(null);
  const [quickPreviewProject, setQuickPreviewProject] = useState<ProjectData | null>(null);

  return (
    <section className="section bg-[#08090B] border-t border-[#252A33]" id="work">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-16">
          <div className="eyebrow">
            <span>// EDITORIAL CASE STUDIES</span>
          </div>
          <h2 className="heading-section text-[#F5F7FA]">
            Featured Systems & Applications
          </h2>
          <p className="text-[#A5ABB5] text-base max-w-2xl">
            A showcase of complete web applications engineered from database schema and REST APIs to responsive browser interfaces.
          </p>
        </div>

        {/* Vertical Editorial Stack of Projects */}
        <div className="space-y-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#101216] border border-[#252A33] rounded-2xl p-6 sm:p-10 transition-all duration-300 hover:border-[#3A414E] hover:bg-[#15181D] hover:shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Side: System Metadata & Specs (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col items-start gap-5">
                
                {/* Number & Category */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#818CF8] bg-[#08090B] px-3 py-1 rounded-md border border-[#252A33]">
                    {project.number}
                  </span>
                  <span className="font-mono text-xs text-[#6F7682] uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="heading-section text-[#F5F7FA] text-2xl sm:text-3xl group-hover:text-[#F5F7FA] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#818CF8] mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A5ABB5] leading-relaxed">
                  {project.description}
                </p>

                {/* Metric Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full pt-3 border-t border-[#1E222A]">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="bg-[#08090B] p-2.5 rounded-lg border border-[#1E222A]">
                      <div className="font-mono text-[10px] text-[#6F7682]">{m.label}</div>
                      <div className="font-mono text-xs font-bold text-[#F5F7FA] mt-0.5 truncate">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span key={t} className="badge-tech">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Dual Action Buttons: Quick Preview + Full Case Study */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    onClick={() => setQuickPreviewProject(project)}
                    className="btn btn-secondary btn-sm flex items-center gap-1.5 text-xs"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#818CF8]" />
                    <span>Quick Preview</span>
                  </button>
                  <button
                    onClick={() => setFullCaseStudyProject(project)}
                    className="btn btn-primary btn-sm flex items-center gap-2 text-xs"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Right Side: Visual Architecture Pipeline (5 Cols) */}
              <div className="lg:col-span-5 bg-[#08090B] border border-[#252A33] rounded-xl p-5 sm:p-6 flex flex-col justify-between self-stretch gap-6 group-hover:border-[#3A414E] transition-colors">
                <div className="flex items-center justify-between pb-3 border-b border-[#1E222A]">
                  <span className="font-mono text-[10px] text-[#6366F1] font-semibold tracking-wider">
                    SYSTEM PIPELINE
                  </span>
                  <span className="font-mono text-[10px] text-[#10B981] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    PRODUCTION READY
                  </span>
                </div>

                <div className="space-y-2">
                  {project.architectureNodes.map((node, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-md bg-[#101216] border border-[#1E222A] flex items-center justify-between font-mono text-[11px] text-[#A5ABB5]"
                    >
                      <span className="text-[#818CF8] font-bold">0{idx + 1}.</span>
                      <span className="truncate max-w-[200px]">{node}</span>
                      <span className="text-[#6F7682]">OK</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#1E222A] flex items-center justify-between font-mono text-[11px] text-[#6F7682]">
                  <span>REPOSITORIES & ARCHITECTURE</span>
                  <button
                    onClick={() => setFullCaseStudyProject(project)}
                    className="text-[#818CF8] hover:underline"
                  >
                    Explore Details →
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Quick Preview Modal Overlay */}
      <ProjectQuickPreviewModal
        project={quickPreviewProject}
        onClose={() => setQuickPreviewProject(null)}
        onOpenFullCaseStudy={(p) => setFullCaseStudyProject(p)}
      />

      {/* Full Case Study Modal Overlay */}
      <ProjectCaseStudyModal
        project={fullCaseStudyProject}
        onClose={() => setFullCaseStudyProject(null)}
      />
    </section>
  );
}
