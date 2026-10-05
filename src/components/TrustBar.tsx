"use client";

import { Code2, Database, Server, Terminal, Shield, GitBranch } from "lucide-react";

const TECH_SIGNATURES = [
  { name: "Laravel", category: "Backend Framework", icon: Server },
  { name: "PHP", category: "Language Engine", icon: Code2 },
  { name: "MySQL", category: "Relational DB", icon: Database },
  { name: "JavaScript", category: "Client Logic", icon: Terminal },
  { name: "REST APIs", category: "Integration", icon: Shield },
  { name: "Git / GitHub", category: "Version Control", icon: GitBranch },
];

export default function TrustBar() {
  return (
    <section className="w-full bg-[#08090B] border-y border-[#252A33] py-4">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8">
          <div className="font-mono text-xs text-[#6F7682] uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]" />
            <span>CORE STACK SIGNATURE</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
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
