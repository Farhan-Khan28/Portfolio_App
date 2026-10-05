"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from "lucide-react";

interface HistoryEntry {
  command: string;
  output: string | React.ReactNode;
}

export default function DeveloperTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: "help",
      output: "Available commands: help, about, stack, projects, experience, contact, sudo hire farhan",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let outputResult: React.ReactNode = "";

    switch (cmd) {
      case "help":
        outputResult = "Available commands: help, about, stack, projects, experience, contact, sudo hire farhan";
        break;
      case "about":
        outputResult = "Farhan Khan — Full-Stack Web Developer building complete, production-ready applications from schema to browser engine.";
        break;
      case "stack":
        outputResult = "Laravel · PHP · MySQL · JavaScript · REST APIs · Git / GitHub";
        break;
      case "projects":
        outputResult = "1. JIBZ CRM  2. KT Messenger  3. Employee Attendance System  4. Analytics & API Integration Engine";
        break;
      case "experience":
        outputResult = "Full-Stack Web Developer (2023 - Present) | Backend & API Developer (2022 - 2023)";
        break;
      case "contact":
        outputResult = "Email: contact@farhankhan.dev | LinkedIn: farhankhan | GitHub: farhankhan";
        break;
      case "sudo hire farhan":
        outputResult = (
          <span className="text-[#10B981] font-bold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            ✓ Request received. Farhan will reach out to schedule an interview!
          </span>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        outputResult = `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`;
    }

    setHistory((prev) => [...prev, { command: cmd, output: outputResult }]);
    setInput("");
  };

  return (
    <section className="section bg-[#08090B] border-t border-[#252A33]" id="terminal">
      <div className="container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-10">
          <div className="eyebrow">
            <span>// OPTIONAL INTERACTIVE CLI</span>
          </div>
          <h2 className="heading-section text-[#F5F7FA]">
            Developer Terminal
          </h2>
          <p className="text-[#A5ABB5] text-base max-w-2xl">
            Execute terminal commands to inspect system configurations, technology signatures, and developer secrets.
          </p>
        </div>

        {/* Terminal Window Container */}
        <div className="rounded-2xl bg-[#101216] border border-[#252A33] overflow-hidden shadow-2xl">
          
          {/* Header Bar */}
          <div className="bg-[#08090B] border-b border-[#252A33] px-4 py-3 flex items-center justify-between font-mono text-xs text-[#6F7682]">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-[#818CF8]" />
              <span className="text-[#F5F7FA] font-bold">farhan@portfolio:~$</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#A5ABB5]">Type "help"</span>
            </div>
          </div>

          {/* Terminal Console Output */}
          <div className="p-6 font-mono text-xs sm:text-sm bg-[#08090B] min-h-[220px] max-h-[350px] overflow-y-auto space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-[#818CF8]">
                  <span>$</span>
                  <span className="text-[#F5F7FA]">{item.command}</span>
                </div>
                <div className="text-[#A5ABB5] pl-4 leading-relaxed">
                  {item.output}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Prompt Form */}
          <form onSubmit={handleCommand} className="bg-[#101216] border-t border-[#252A33] px-4 py-3 flex items-center gap-2">
            <span className="font-mono text-xs text-[#818CF8]">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter command (e.g. stack, projects, sudo hire farhan)..."
              className="w-full bg-transparent font-mono text-xs sm:text-sm text-[#F5F7FA] placeholder-[#6F7682] outline-none"
            />
            <button type="submit" className="text-[#6F7682] hover:text-[#818CF8]">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
