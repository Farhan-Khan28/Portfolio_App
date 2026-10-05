"use client";

import { Layout, Server, Database, Cpu, Check, ArrowRight } from "lucide-react";

const CAPABILITIES = [
  {
    layer: "01 / FRONTEND LAYER",
    title: "Responsive Client Interfaces",
    icon: Layout,
    accentColor: "#6366F1",
    description: "Engineering intuitive, accessible user interfaces with clean semantic HTML5, modern CSS3, and dynamic JavaScript.",
    items: [
      "Responsive & Mobile-First Layouts",
      "Semantic HTML5 & Modern CSS3",
      "Dynamic DOM Manipulation (JS)",
      "Form Handling & Client Validation",
      "Interactive Components & Micro-UI",
      "Cross-Browser Rendering Engine",
    ],
  },
  {
    layer: "02 / BACKEND ARCHITECTURE",
    title: "Laravel & PHP Core Systems",
    icon: Server,
    accentColor: "#EF4444",
    description: "Designing robust server-side applications, business logic controllers, authentication middleware, and RESTful web services.",
    items: [
      "Laravel Framework (MVC)",
      "Object-Oriented PHP 8+",
      "RESTful API Endpoint Design",
      "Session & Token Authentication (Sanctum/JWT)",
      "Role-Based Access Control (RBAC)",
      "Custom Middleware & Request Handling",
    ],
  },
  {
    layer: "03 / DATABASE DESIGN",
    title: "MySQL Relational Schemas",
    icon: Database,
    accentColor: "#F59E0B",
    description: "Architecting structured database schemas, normalized entity relationships, foreign key constraints, and optimized SQL queries.",
    items: [
      "MySQL Schema Normalization",
      "Relational Mapping (Eloquent ORM)",
      "Migration Scripts & Database Seeding",
      "Indexing & Query Performance Optimization",
      "ACID Transaction Safety",
      "Data Aggregation & Reporting Queries",
    ],
  },
  {
    layer: "04 / APPLICATION ENGINEERING",
    title: "System Integration & Security",
    icon: Cpu,
    accentColor: "#10B981",
    description: "Wiring third-party webhooks, security sanitization, automated exception logging, and production deployment pipeline.",
    items: [
      "Third-Party API & Webhook Integrations",
      "Input Sanitization & CSRF / XSS Defense",
      "Structured Error Handling & Logging",
      "Version Control (Git / GitHub Workflows)",
      "Environment Configuration Management",
      "Production Deployment & Server Readiness",
    ],
  },
];

export default function Capabilities() {
  return (
    <section className="section bg-[#08090B] border-t border-[#252A33]" id="capabilities">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-14">
          <div className="eyebrow">
            <span>// FULL-STACK CAPABILITY MATRIX</span>
          </div>
          <h2 className="heading-section text-[#F5F7FA]">
            What I Build
          </h2>
          <p className="text-[#A5ABB5] text-base max-w-2xl">
            A comprehensive breakdown of engineering capabilities across the entire software application lifecycle.
          </p>
        </div>

        {/* Capability 4-Block Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.layer}
                className="group relative bg-[#101216] border border-[#252A33] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#3A414E] hover:bg-[#15181D] hover:shadow-2xl overflow-hidden flex flex-col justify-between"
              >
                {/* Top Subtle Accent Border Indicator */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 opacity-60 group-hover:opacity-100"
                  style={{ backgroundColor: cap.accentColor }}
                />

                <div>
                  {/* Layer Eyebrow & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-semibold text-[#818CF8] tracking-wider">
                      {cap.layer}
                    </span>
                    <div
                      className="p-2.5 rounded-xl bg-[#08090B] border border-[#252A33] group-hover:border-[#3A414E] transition-colors"
                      style={{ color: cap.accentColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="heading-card text-[#F5F7FA] mb-2 group-hover:text-[#F5F7FA] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A5ABB5] mb-6 leading-relaxed">
                    {cap.description}
                  </p>

                  {/* Items List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-[#1E222A]">
                    {cap.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span className="text-xs font-medium text-[#F5F7FA]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Architectural Connector Indicator */}
                <div className="mt-6 pt-4 border-t border-[#1E222A] flex items-center justify-between font-mono text-[11px] text-[#6F7682]">
                  <span>INTEGRATED CAPABILITY</span>
                  <span className="flex items-center gap-1 text-[#818CF8] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View Projects</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
