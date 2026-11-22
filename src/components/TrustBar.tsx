"use client";

import { Code2, Database, Server, Terminal, Zap, GitBranch, Cpu, Layers } from "lucide-react";

const TECH_SIGNATURES = [
  { name: "React.js", category: "Frontend Engine", icon: Layers },
  { name: "Node.js", category: "Microservices", icon: Cpu },
  { name: "Laravel", category: "Backend Framework", icon: Server },
  { name: "PostgreSQL", category: "Relational DB", icon: Database },
  { name: "MySQL", category: "Relational DB", icon: Database },
  { name: "WebSockets", category: "Real-Time", icon: Zap },
];

export default function TrustBar() {
  return (
    <section className="w-full bg-[#08090B] border-y border-[#252A33] py-5 overflow-x-hidden">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-4 md:gap-8">
          <div className="font-mono text-xs text-[#6F7682] uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
            <span>CORE STACK SIGNATURE</span>
          </div>
          
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center gap-3 sm:gap-4 md:gap-8 w-full sm:w-auto">
            {TECH_SIGNATURES.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 group cursor-default transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-[#6F7682] group-hover:text-[#6366F1] transition-colors" />
                  <span className="font-mono text-xs sm:text-sm font-medium text-[#A5ABB5] group-hover:text-[#F5F7FA] transition-colors">
                    {tech.name}
                  </span>
                  {idx < TECH_SIGNATURES.length - 1 && (
                    <span className="text-[#252A33] font-mono ml-2 hidden sm:inline">/</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
