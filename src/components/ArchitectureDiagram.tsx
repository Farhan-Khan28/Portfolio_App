"use client";

import { useState } from "react";
import { Layout, Server, Database, Cpu, ArrowDown, ShieldCheck, Zap, Activity } from "lucide-react";

interface NodeDetail {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  description: string;
}

const NODES: NodeDetail[] = [
  {
    id: "frontend",
    title: "FRONTEND LAYER",
    subtitle: "Browser UI & Client State",
    tech: ["HTML5", "CSS3 / Vanilla JS", "Dynamic DOM", "Responsive Layouts"],
    metrics: [
      { label: "Render Time", value: "< 50ms" },
      { label: "UI State", value: "Reactive" },
    ],
    description: "Responsive, accessible interface handling client interaction, dynamic DOM updates, and form payloads.",
  },
  {
    id: "api",
    title: "REST API GATEWAY",
    subtitle: "HTTP Contracts & Auth Middleware",
    tech: ["JSON Payloads", "Sanctum Auth", "Rate Limiting", "Input Validation"],
    metrics: [
      { label: "Protocol", value: "HTTPS / REST" },
      { label: "Auth Token", value: "Bearer JWT" },
    ],
    description: "Secure API interface validating requests, enforcing authorization policies, and returning formatted JSON.",
  },
  {
    id: "backend",
    title: "LARAVEL BACKEND CORE",
    subtitle: "MVC Business Logic & Services",
    tech: ["PHP 8.2+", "MVC Controllers", "Service Layer", "Middleware & Auth"],
    metrics: [
      { label: "Architecture", value: "Domain MVC" },
      { label: "Security", value: "CSRF + Hash" },
    ],
    description: "The engine handling authentication, business logic, session security, queue dispatches, and controller routes.",
  },
  {
    id: "database",
    title: "MYSQL DATABASE ENGINE",
    subtitle: "Relational Persistence & Indexing",
    tech: ["MySQL 8.0", "Eloquent ORM", "Schema Migrations", "Indexed Foreign Keys"],
    metrics: [
      { label: "DB Engine", value: "InnoDB" },
      { label: "Integrity", value: "ACID Compliant" },
    ],
    description: "Normalized relational database schema optimized with indexes, transactional safety, and Eloquent ORM mappings.",
  },
];

export default function ArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState<string>("backend");

  const selectedNode = NODES.find((n) => n.id === activeNode) || NODES[2];

  return (
    <div className="relative w-full rounded-2xl bg-[#08090B] border border-[#252A33] p-5 sm:p-7 shadow-2xl overflow-hidden group">
      {/* Background Subtle Grid Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#252A33_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
      
      {/* Glowing Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-4 mb-6 border-b border-[#1E222A]">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#6366F1] animate-pulse" />
          <span className="font-mono text-xs font-semibold tracking-wider text-[#F5F7FA] uppercase">
            FULL-STACK ARCHITECTURE VISUALIZER
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#A5ABB5] bg-[#101216] px-2.5 py-1 rounded-md border border-[#252A33]">
          <Activity className="w-3.5 h-3.5 text-[#10B981]" />
          <span>SYSTEM ACTIVE</span>
        </div>
      </div>

      {/* Main Interactive System Flow */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: Visual Architecture Flow Nodes */}
        <div className="lg:col-span-7 flex flex-col items-center gap-3">
          
          {/* Node 1: FRONTEND */}
          <button
            onClick={() => setActiveNode("frontend")}
            className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
              activeNode === "frontend"
                ? "bg-[#15181D] border-[#6366F1] shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                : "bg-[#101216] border-[#252A33] hover:border-[#3A414E] hover:bg-[#15181D]/60"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#08090B] border border-[#252A33] text-[#6366F1]">
                <Layout className="w-4 h-4" />
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#818CF8] font-semibold tracking-wider">CLIENT LAYER</div>
                <div className="text-xs font-bold text-[#F5F7FA]">HTML · CSS · JavaScript</div>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[#6F7682] px-2 py-0.5 rounded bg-[#08090B] border border-[#1E222A]">
              UI / UX
            </span>
          </button>

          {/* Connected Flow Line 1 */}
          <div className="relative flex flex-col items-center py-0.5">
            <div className="w-[2px] h-5 bg-[#252A33] relative overflow-hidden">
              <div className="absolute inset-0 bg-[#6366F1] animate-pulse" />
            </div>
            <ArrowDown className="w-3.5 h-3.5 text-[#6F7682] -mt-1" />
          </div>

          {/* Node 2: REST API GATEWAY */}
          <button
            onClick={() => setActiveNode("api")}
            className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
              activeNode === "api"
                ? "bg-[#15181D] border-[#6366F1] shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                : "bg-[#101216] border-[#252A33] hover:border-[#3A414E] hover:bg-[#15181D]/60"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#08090B] border border-[#252A33] text-[#10B981]">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#10B981] font-semibold tracking-wider">REST API</div>
                <div className="text-xs font-bold text-[#F5F7FA]">Controllers & Endpoint Contracts</div>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[#6F7682] px-2 py-0.5 rounded bg-[#08090B] border border-[#1E222A]">
              JSON HTTP
            </span>
          </button>

          {/* Connected Flow Line 2 */}
          <div className="relative flex flex-col items-center py-0.5">
            <div className="w-[2px] h-5 bg-[#252A33] relative overflow-hidden">
              <div className="absolute inset-0 bg-[#6366F1] animate-pulse" />
            </div>
            <ArrowDown className="w-3.5 h-3.5 text-[#6F7682] -mt-1" />
          </div>

          {/* Node 3: LARAVEL BACKEND */}
          <button
            onClick={() => setActiveNode("backend")}
            className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
              activeNode === "backend"
                ? "bg-[#15181D] border-[#6366F1] shadow-[0_0_25px_rgba(99,102,241,0.25)]"
                : "bg-[#101216] border-[#252A33] hover:border-[#3A414E] hover:bg-[#15181D]/60"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#08090B] border border-[#252A33] text-[#EF4444]">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#EF4444] font-semibold tracking-wider flex items-center gap-1.5">
                  <span>LARAVEL BACKEND CORE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-ping" />
                </div>
                <div className="text-sm font-bold text-[#F5F7FA]">Auth · Business Logic · Services</div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="font-mono text-[10px] text-[#F5F7FA] bg-[#252A33] px-2 py-0.5 rounded">
                PHP 8.2+
              </span>
            </div>
          </button>

          {/* Connected Flow Line 3 */}
          <div className="relative flex flex-col items-center py-0.5">
            <div className="w-[2px] h-5 bg-[#252A33] relative overflow-hidden">
              <div className="absolute inset-0 bg-[#6366F1] animate-pulse" />
            </div>
            <ArrowDown className="w-3.5 h-3.5 text-[#6F7682] -mt-1" />
          </div>

          {/* Node 4: MYSQL DATABASE */}
          <button
            onClick={() => setActiveNode("database")}
            className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
              activeNode === "database"
                ? "bg-[#15181D] border-[#6366F1] shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                : "bg-[#101216] border-[#252A33] hover:border-[#3A414E] hover:bg-[#15181D]/60"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#08090B] border border-[#252A33] text-[#F59E0B]">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <div className="font-mono text-[11px] text-[#F59E0B] font-semibold tracking-wider">DATABASE ENGINE</div>
                <div className="text-xs font-bold text-[#F5F7FA]">MySQL Relational Schema & Eloquent</div>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[#6F7682] px-2 py-0.5 rounded bg-[#08090B] border border-[#1E222A]">
              ACID SQL
            </span>
          </button>
        </div>

        {/* Right Column: Node Details Inspector Card */}
        <div className="lg:col-span-5 bg-[#101216] border border-[#252A33] rounded-xl p-4 sm:p-5 flex flex-col gap-4 self-stretch justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[#1E222A]">
              <span className="font-mono text-[10px] text-[#6366F1] font-semibold tracking-wider">
                INSPECTOR PARAMS
              </span>
              <span className="font-mono text-[10px] text-[#6F7682]">
                NODE ID: {selectedNode.id.toUpperCase()}
              </span>
            </div>

            <div className="mt-3">
              <h4 className="font-mono text-sm font-bold text-[#F5F7FA]">
                {selectedNode.title}
              </h4>
              <p className="text-xs text-[#A5ABB5] mt-1 font-medium">
                {selectedNode.subtitle}
              </p>
              <p className="text-xs text-[#6F7682] mt-3 leading-relaxed">
                {selectedNode.description}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#1E222A]">
              {selectedNode.metrics.map((m, idx) => (
                <div key={idx} className="bg-[#08090B] p-2 rounded-md border border-[#1E222A]">
                  <div className="font-mono text-[10px] text-[#6F7682]">{m.label}</div>
                  <div className="font-mono text-xs font-bold text-[#6366F1]">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="mt-4">
              <div className="font-mono text-[10px] text-[#6F7682] mb-2 uppercase tracking-wider">
                COMPONENTS & CAPABILITIES
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedNode.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#15181D] text-[#A5ABB5] border border-[#252A33]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#1E222A] flex items-center justify-between text-[11px] font-mono text-[#6F7682]">
            <span className="flex items-center gap-1 text-[#10B981]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Schema
            </span>
            <span>Click nodes to inspect</span>
          </div>
        </div>
      </div>
    </div>
  );
}
