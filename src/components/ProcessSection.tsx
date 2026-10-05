"use client";

import { useState } from "react";
import { Search, Compass, Layout, Code, ShieldCheck, Rocket, ArrowRight } from "lucide-react";

const PROCESS_STEPS = [
  {
    step: "01",
    title: "DISCOVER",
    subtitle: "Requirement Gathering & Domain Modeling",
    icon: Search,
    description: "Analyze core business requirements, identify user roles, map operational bottlenecks, and establish technical constraints.",
    deliverables: ["Domain Entity Mapping", "User Flow Requirements", "Technical Feasibility Study"],
  },
  {
    step: "02",
    title: "ARCHITECT",
    subtitle: "Database Schema & API Contract Design",
    icon: Compass,
    description: "Architect normalized MySQL relational ERDs, design RESTful endpoint schemas, and define object-oriented PHP service boundaries.",
    deliverables: ["MySQL ERD Schema Diagrams", "REST API Contract Definitions", "Security & Auth Policies"],
  },
  {
    step: "03",
    title: "DESIGN",
    subtitle: "Responsive UI & System Wireframes",
    icon: Layout,
    description: "Structure crisp, accessible client user interfaces, interactive component inventories, and mobile-responsive grid layouts.",
    deliverables: ["Responsive UI Systems", "Component Inventory", "Accessibility Hierarchy"],
  },
  {
    step: "04",
    title: "DEVELOP",
    subtitle: "Full-Stack Implementation",
    icon: Code,
    description: "Write clean, maintainable code across Laravel backend controllers, Eloquent ORM mappings, REST APIs, and dynamic JS views.",
    deliverables: ["Laravel Controllers & Services", "MySQL Migration Scripts", "Client DOM & Fetch Logic"],
  },
  {
    step: "05",
    title: "TEST",
    subtitle: "Security Audits & Endpoint Verification",
    icon: ShieldCheck,
    description: "Perform end-to-end API testing, validate CSRF/XSS sanitization, test edge cases, and eliminate performance bottlenecks.",
    deliverables: ["API Endpoint Test Suite", "Security Sanitization Audit", "SQL Query Optimization"],
  },
  {
    step: "06",
    title: "DEPLOY",
    subtitle: "Production Deployment & Monitoring",
    icon: Rocket,
    description: "Configure production web servers, seed database environments, setup background cron queue workers, and establish exception logging.",
    deliverables: ["Environment Seeding & Setup", "Cron Queue Worker Services", "Structured Exception Logging"],
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentStep = PROCESS_STEPS[activeStep - 1];
  const Icon = currentStep.icon;

  return (
    <section className="section bg-[#08090B] border-t border-[#252A33]" id="process">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-14">
          <div className="eyebrow">
            <span>// ENGINEERING METHODOLOGY</span>
          </div>
          <h2 className="heading-section text-[#F5F7FA]">
            Development Process
          </h2>
          <p className="text-[#A5ABB5] text-base max-w-2xl">
            A structured 6-phase engineering lifecycle for turning complex requirements into production-ready web applications.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {PROCESS_STEPS.map((s, idx) => {
            const isCurrent = activeStep === idx + 1;
            const StepIcon = s.icon;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx + 1)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between h-28 ${
                  isCurrent
                    ? "bg-[#15181D] border-[#6366F1] shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                    : "bg-[#101216] border-[#252A33] hover:border-[#3A414E] hover:bg-[#15181D]/60"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isCurrent ? "text-[#6366F1]" : "text-[#6F7682]"
                    }`}
                  >
                    {s.step}
                  </span>
                  <StepIcon
                    className={`w-4 h-4 ${
                      isCurrent ? "text-[#6366F1]" : "text-[#6F7682]"
                    }`}
                  />
                </div>
                <div>
                  <div className="font-heading text-xs font-bold text-[#F5F7FA]">
                    {s.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Process Detail Inspector Card */}
        <div className="bg-[#101216] border border-[#252A33] rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#6366F1] bg-[#15181D] px-2.5 py-1 rounded border border-[#252A33]">
                PHASE {currentStep.step} OF 06
              </span>
              <span className="font-mono text-xs text-[#6F7682] uppercase">
                {currentStep.subtitle}
              </span>
            </div>

            <h3 className="heading-section text-2xl sm:text-3xl text-[#F5F7FA]">
              {currentStep.title}
            </h3>

            <p className="text-sm sm:text-base text-[#A5ABB5] leading-relaxed">
              {currentStep.description}
            </p>

            <div className="pt-4 border-t border-[#1E222A]">
              <div className="font-mono text-xs text-[#6F7682] mb-2 uppercase">
                PRIMARY DELIVERABLES
              </div>
              <div className="flex flex-wrap gap-2">
                {currentStep.deliverables.map((d, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-3 py-1 rounded-md bg-[#15181D] text-[#F5F7FA] border border-[#252A33] flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#08090B] border border-[#252A33] rounded-xl p-6 flex flex-col items-center justify-center text-center gap-4">
            <div className="p-4 rounded-2xl bg-[#15181D] border border-[#252A33] text-[#6366F1]">
              <Icon className="w-10 h-10" />
            </div>
            <div>
              <div className="font-mono text-xs text-[#818CF8] font-semibold">
                PHASE {currentStep.step} ACTIVE
              </div>
              <div className="text-sm font-bold text-[#F5F7FA] mt-1">
                {currentStep.title} &mdash; {currentStep.subtitle}
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setActiveStep(activeStep > 1 ? activeStep - 1 : 6)}
                className="btn btn-outline btn-sm text-xs"
              >
                ← Prev Phase
              </button>
              <button
                onClick={() => setActiveStep(activeStep < 6 ? activeStep + 1 : 1)}
                className="btn btn-primary btn-sm text-xs"
              >
                Next Phase →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
