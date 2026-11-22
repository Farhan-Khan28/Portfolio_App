"use client";

import { Layout, Server, Database, Cpu, Check, ArrowRight } from "lucide-react";

const CAPABILITIES = [
  {
    layer: "01 / FRONTEND LAYER",
    title: "React.js & Modern Interfaces",
    icon: Layout,
    accentColor: "#6366F1",
    description: "Engineering reactive web applications with React.js, modern JavaScript, semantic HTML5, CSS3, and dynamic state management.",
    items: [
      "React.js Component Architecture",
      "Dynamic State & Lifecycle Management",
      "Responsive & Mobile-First Layouts",
      "WebSockets Real-Time Client Feeds",
      "Optimistic UI & Event Handlers",
      "Client Validation & Form Engines",
    ],
  },
  {
    layer: "02 / BACKEND ARCHITECTURE",
    title: "Node.js & Laravel Core Services",
    icon: Server,
    accentColor: "#EF4444",
    description: "Designing distributed Node.js microservices, robust Laravel MVC backends, RESTful APIs, and real-time event streaming.",
    items: [
      "Node.js Microservices Architecture",
      "Laravel Framework (Domain MVC)",
      "RESTful API Endpoint Contracts",
      "Real-Time WebSockets & Event Pub/Sub",
      "Role-Based Access Control (RBAC)",
      "Token & Session Auth (JWT / Sanctum)",
    ],
  },
  {
    layer: "03 / DATABASE DESIGN",
    title: "PostgreSQL & MySQL Relational Engines",
    icon: Database,
    accentColor: "#F59E0B",
    description: "Architecting high-concurrency relational databases across PostgreSQL and MySQL with normalized schemas, composite indexes, and connection pools.",
    items: [
      "PostgreSQL Relational Clustering",
      "MySQL Schema Normalization",
      "Composite Indexing & Query Tuning",
      "Connection Pooling & Schema Migrations",
      "ACID Transactional Guarantees",
      "Data Aggregation & Business Analytics",
    ],
  },
  {
    layer: "04 / SYSTEM INTEGRATION",
    title: "Microservices & Distributed Systems",
    icon: Cpu,
    accentColor: "#10B981",
    description: "Orchestrating decoupled services, third-party API gateways, background queue workers, and production deployment pipelines.",
    items: [
      "Microservices Inter-Service Messaging",
      "Third-Party API & Webhook Ingestion",
      "Event Streams & Queue Processing",
      "Version Control (Git / GitHub Workflows)",
      "Environment & Secrets Configuration",
      "Production Monitoring & Error Tracing",
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
                  <a href="#work" className="flex items-center gap-1 text-[#818CF8] opacity-0 group-hover:opacity-100 transition-opacity no-underline hover:text-[#6366F1]">
                    <span>View Projects</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
