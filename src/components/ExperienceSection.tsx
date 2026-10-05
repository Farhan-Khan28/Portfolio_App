"use client";

import { Calendar, Briefcase, CheckCircle2, Terminal } from "lucide-react";

interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  type: string;
  description: string;
  contributions: string[];
  tech: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Full-Stack Web Developer",
    organization: "Web & Enterprise Software Solutions",
    duration: "2023 — PRESENT",
    type: "Full-time / Client Projects",
    description: "Lead developer engineering custom web applications, database schemas, and REST API integrations for business management, attendance automation, and client platforms.",
    contributions: [
      "Architected normalized MySQL database schemas, reducing query latency by 40% on enterprise CRM rosters.",
      "Designed and deployed secure REST APIs in Laravel with Sanctum token authentication and RBAC middleware.",
      "Engineered real-time features and responsive client interfaces using modern JavaScript, HTML5, and CSS3.",
      "Integrated third-party APIs and cron-scheduled background data synchronization jobs.",
    ],
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "REST APIs", "Git"],
  },
  {
    role: "Backend & API Developer",
    organization: "Application Engineering & Systems",
    duration: "2022 — 2023",
    type: "Web Application Development",
    description: "Focused on core server-side development, database optimization, authentication flows, and API endpoint construction.",
    contributions: [
      "Built custom MVC business logic controllers and Eloquent ORM mappings in PHP/Laravel.",
      "Refactored legacy database queries to resolve 504 Gateway Timeout errors during high-volume report exports.",
      "Implemented input sanitization and CSRF protection policies across application forms.",
    ],
    tech: ["PHP", "Laravel", "MySQL", "HTML/CSS", "JavaScript", "REST APIs"],
  },
];

export default function ExperienceSection() {
  return (
    <section className="section bg-[#08090B] border-t border-[#252A33]" id="experience">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-14">
          <div className="eyebrow">
            <span>// TRACK RECORD & MILESTONES</span>
          </div>
          <h2 className="heading-section text-[#F5F7FA]">
            Engineering Experience
          </h2>
          <p className="text-[#A5ABB5] text-base max-w-2xl">
            A history of building, optimizing, and maintaining production-grade web applications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#252A33] ml-4 sm:ml-6 space-y-12 pl-6 sm:pl-10">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#101216] border-2 border-[#6366F1] group-hover:bg-[#6366F1] group-hover:scale-125 transition-all duration-200" />

              {/* Card Container */}
              <div className="bg-[#101216] border border-[#252A33] rounded-2xl p-6 sm:p-8 space-y-4 transition-all duration-200 group-hover:border-[#3A414E] group-hover:bg-[#15181D]">
                
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#1E222A]">
                  <div>
                    <h3 className="heading-card text-[#F5F7FA]">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[#818CF8] mt-0.5">
                      {exp.organization} &bull; <span className="text-[#A5ABB5] text-xs font-normal">{exp.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#6366F1] bg-[#08090B] px-3 py-1 rounded-md border border-[#252A33]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A5ABB5] leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Contributions */}
                <div className="space-y-2 pt-2">
                  <div className="font-mono text-[11px] text-[#6F7682] uppercase">
                    KEY ENGINEERING CONTRIBUTIONS
                  </div>
                  {exp.contributions.map((c, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#F5F7FA]">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#1E222A]">
                  {exp.tech.map((t) => (
                    <span key={t} className="badge-tech">
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
