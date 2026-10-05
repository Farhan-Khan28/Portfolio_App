"use client";

import { useState, useEffect } from "react";
import { Search, ArrowRight, ArrowUpRight, X, Terminal, Code, Layers, User, Briefcase, Mail } from "lucide-react";

interface ActionItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Navigation" | "Projects" | "Actions";
  icon: any;
  href: string;
}

const COMMAND_ACTIONS: ActionItem[] = [
  {
    id: "work",
    title: "View Projects & Applications",
    subtitle: "Explore JIBZ CRM, KT Messenger, Attendance System",
    category: "Projects",
    icon: Code,
    href: "#work",
  },
  {
    id: "about",
    title: "About Farhan & Architecture Philosophy",
    subtitle: "Engineering focus, stack info & biography",
    category: "Navigation",
    icon: User,
    href: "#about",
  },
  {
    id: "capabilities",
    title: "Full-Stack Capabilities",
    subtitle: "Frontend, Backend, Database, Application Engineering",
    category: "Navigation",
    icon: Layers,
    href: "#capabilities",
  },
  {
    id: "process",
    title: "6-Step Development Process",
    subtitle: "Discover, Architect, Design, Develop, Test, Deploy",
    category: "Navigation",
    icon: Layers,
    href: "#process",
  },
  {
    id: "experience",
    title: "Work Experience & Track Record",
    subtitle: "Milestones, metrics, and production deployments",
    category: "Navigation",
    icon: Briefcase,
    href: "#experience",
  },
  {
    id: "code",
    title: "Behind the Interface (IDE Code Proof)",
    subtitle: "Laravel controllers, Eloquent ORM, MySQL migrations",
    category: "Navigation",
    icon: Code,
    href: "#code",
  },
  {
    id: "terminal",
    title: "Interactive Developer Terminal",
    subtitle: "Run CLI commands and explore developer easter eggs",
    category: "Actions",
    icon: Terminal,
    href: "#terminal",
  },
  {
    id: "contact",
    title: "Contact & Start a Conversation",
    subtitle: "Direct email, LinkedIn, GitHub, and message portal",
    category: "Actions",
    icon: Mail,
    href: "#contact",
  },
];

export default function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filtered = COMMAND_ACTIONS.filter(
    (action) =>
      action.title.toLowerCase().includes(query.toLowerCase()) ||
      action.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      action.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled externally or passed
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
      if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
        } else if (e.key === "Enter" && filtered[selectedIndex]) {
          e.preventDefault();
          executeAction(filtered[selectedIndex].href);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filtered, selectedIndex, onClose]);

  const executeAction = (href: string) => {
    onClose();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] bg-[#08090B]/85 backdrop-blur-md flex items-start justify-center pt-20 sm:pt-28 px-4 animate-fade-in">
      <div className="w-full max-w-2xl bg-[#101216] border border-[#252A33] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#252A33] gap-3">
          <Search className="w-5 h-5 text-[#818CF8]" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search section (e.g. projects, stack, contact)..."
            className="w-full bg-transparent text-[#F5F7FA] placeholder-[#6F7682] outline-none font-mono text-xs sm:text-sm"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded bg-[#15181D] border border-[#252A33] text-[#A5ABB5] hover:text-[#F5F7FA]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action Results List */}
        <div className="p-2 max-h-[350px] overflow-y-auto space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-[#6F7682]">
              No matching command found for "{query}"
            </div>
          ) : (
            filtered.map((action, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => executeAction(action.href)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-3.5 py-3 rounded-xl transition-all duration-150 flex items-center justify-between group ${
                    isSelected
                      ? "bg-[#15181D] border border-[#6366F1]"
                      : "bg-transparent border border-transparent hover:bg-[#15181D]/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg border transition-colors ${
                        isSelected
                          ? "bg-[#08090B] border-[#6366F1] text-[#6366F1]"
                          : "bg-[#101216] border-[#252A33] text-[#A5ABB5]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#F5F7FA]">
                        {action.title}
                      </div>
                      <div className="text-[11px] text-[#A5ABB5] font-medium">
                        {action.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#6F7682] bg-[#08090B] px-2 py-0.5 rounded border border-[#1E222A]">
                      {action.category}
                    </span>
                    <ArrowUpRight
                      className={`w-4 h-4 ${
                        isSelected ? "text-[#6366F1]" : "text-[#6F7682]"
                      }`}
                    />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Hints */}
        <div className="bg-[#08090B] border-t border-[#252A33] px-4 py-2.5 flex items-center justify-between font-mono text-[10px] text-[#6F7682]">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="bg-[#15181D] px-1.5 py-0.5 rounded border border-[#252A33] text-[#F5F7FA]">↑↓</kbd> Navigate
            </span>
            <span>
              <kbd className="bg-[#15181D] px-1.5 py-0.5 rounded border border-[#252A33] text-[#F5F7FA]">↵</kbd> Select
            </span>
          </div>
          <span>
            <kbd className="bg-[#15181D] px-1.5 py-0.5 rounded border border-[#252A33] text-[#F5F7FA]">ESC</kbd> Close
          </span>
        </div>

      </div>
    </div>
  );
}
