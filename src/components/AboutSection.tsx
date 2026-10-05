"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Briefcase, Code, Layers, CheckCircle2 } from "lucide-react";

const STATEMENT_WORDS = ["I", "build", "systems,", "not", "just", "interfaces."];
const LAYERS = ["DATABASE", "API", "AUTH", "BUSINESS LOGIC", "UI"];

export default function AboutSection() {
  const [activeWordCount, setActiveWordCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through section (0 to 1)
      const progress = Math.min(Math.max((windowHeight - top) / (windowHeight + height), 0), 1);
      const activeCount = Math.floor(progress * STATEMENT_WORDS.length * 2.5);
      setActiveWordCount(Math.min(activeCount, STATEMENT_WORDS.length));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="section bg-[#08090B]" id="about" ref={containerRef}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Scroll-Linked Word Reveal Typography */}
          <div className="lg:col-span-5 flex flex-col gap-6 sticky top-28">
            <div className="eyebrow">
              <span>// ENGINEERING PHILOSOPHY</span>
            </div>
            
            {/* Word-by-Word Active Reveal */}
            <h2 className="heading-section leading-tight flex flex-wrap gap-x-3 gap-y-1">
              {STATEMENT_WORDS.map((word, idx) => {
                const isActive = idx < activeWordCount || activeWordCount >= STATEMENT_WORDS.length - 1;
                return (
                  <span
                    key={idx}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-[#F5F7FA] opacity-100"
                        : "text-[#6F7682] opacity-30"
                    }`}
                  >
                    {word}
                  </span>
                );
              })}
            </h2>

            {/* Assembled Architectural Layer Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {LAYERS.map((layer, idx) => (
                <span
                  key={layer}
                  className="font-mono text-[11px] px-2.5 py-1 rounded bg-[#15181D] text-[#818CF8] border border-[#252A33] transition-all duration-300"
                  style={{
                    opacity: activeWordCount >= 3 ? 1 : 0.4,
                    transform: activeWordCount >= 3 ? "translateY(0)" : "translateY(4px)",
                  }}
                >
                  {layer}
                </span>
              ))}
            </div>

            <p className="text-[#A5ABB5] text-base leading-relaxed mt-2">
              A user interface is only as effective as the architecture supporting it. I engineer full-stack web applications where database schemas, REST endpoints, security policies, and client interactions function as a single cohesive unit.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#F5F7FA]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Production-ready Laravel & PHP backend engineering</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F5F7FA]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Normalized MySQL database design & query optimization</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#F5F7FA]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Secure RESTful APIs with Sanctum/JWT authentication</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Technical Spec Panel */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="bg-[#101216] border border-[#252A33] rounded-2xl p-6 sm:p-8 flex flex-col gap-5 text-[#A5ABB5] leading-relaxed text-sm sm:text-base">
              <h3 className="font-heading text-lg font-bold text-[#F5F7FA]">
                Full-Stack Engineering with Business-First Focus
              </h3>
              
              <p>
                My approach to web development prioritizes durability, clean code structure, and measurable operational value. When building a platform—whether it's a multi-tenant CRM, a real-time messaging application, or a biometric attendance tracker—I start from the data layer up.
              </p>

              <p>
                I craft relational database schemas in <strong className="text-[#F5F7FA]">MySQL</strong> with strict foreign key constraints and indexed queries, write maintainable object-oriented backend logic in <strong className="text-[#F5F7FA]">Laravel & PHP</strong>, and deliver responsive, intuitive client interfaces using modern <strong className="text-[#F5F7FA]">JavaScript, HTML5, and CSS3</strong>.
              </p>

              <p>
                Every endpoint is validated, every session authenticated, and every feature engineered for maintainability so business operations run reliably without technical debt.
              </p>
            </div>

            {/* Compact Technical Info Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#101216] border border-[#252A33] p-5 rounded-xl flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#15181D] border border-[#252A33] text-[#6366F1]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#6F7682] uppercase">Location & Status</div>
                  <div className="text-sm font-bold text-[#F5F7FA] mt-0.5">Remote / Open to Relocation</div>
                  <div className="text-xs text-[#A5ABB5] mt-1">Available for Full-time Roles</div>
                </div>
              </div>

              <div className="bg-[#101216] border border-[#252A33] p-5 rounded-xl flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#15181D] border border-[#252A33] text-[#10B981]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-xs text-[#6F7682] uppercase">Specialization</div>
                  <div className="text-sm font-bold text-[#F5F7FA] mt-0.5">Full-Stack Web Applications</div>
                  <div className="text-xs text-[#A5ABB5] mt-1">SaaS, CRMs, Enterprise APIs</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
