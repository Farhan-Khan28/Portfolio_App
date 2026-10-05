"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Command } from "lucide-react";

const NAV_LINKS = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Capabilities", href: "#capabilities" },
  { name: "Process", href: "#process" },
  { name: "Experience", href: "#experience" },
  { name: "Code", href: "#code" },
  { name: "Terminal", href: "#terminal" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenCommandPalette }: { onOpenCommandPalette?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("work");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090B]/85 backdrop-blur-md border-b border-[#252A33] py-3.5 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Initials Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-xl font-bold font-heading tracking-tight text-[#F5F7FA] no-underline"
          id="nav-logo"
        >
          <div className="w-9 h-9 rounded-lg bg-[#101216] border border-[#252A33] flex items-center justify-center text-[#F5F7FA] group-hover:border-[#6366F1] transition-all duration-200">
            <span className="font-mono text-sm tracking-tighter text-[#6366F1]">FK</span>
          </div>
          <span className="hidden sm:inline-block text-sm font-semibold tracking-wide">
            FARHAN KHAN
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse"></span>
        </a>

        {/* Desktop Navigation Items */}
        <nav className="hidden md:flex items-center gap-1 bg-[#101216]/90 border border-[#252A33] px-3 py-1.5 rounded-full shadow-inner">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 no-underline ${
                  isActive
                    ? "bg-[#15181D] text-[#F5F7FA] border border-[#3A414E] shadow-sm"
                    : "text-[#A5ABB5] hover:text-[#F5F7FA] hover:bg-[#15181D]/50"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Command Palette Trigger & Contact CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenCommandPalette && (
            <button
              onClick={onOpenCommandPalette}
              className="px-2.5 py-1.5 rounded-lg bg-[#101216] border border-[#252A33] text-[#A5ABB5] hover:text-[#F5F7FA] hover:border-[#6366F1] transition-all flex items-center gap-1.5 text-xs font-mono"
              aria-label="Open Command Palette"
            >
              <Command className="w-3.5 h-3.5 text-[#818CF8]" />
              <span>⌘K</span>
            </button>
          )}

          <a
            href="#contact"
            className="btn btn-primary btn-sm flex items-center gap-1.5 text-xs font-semibold"
            id="nav-contact-cta"
          >
            <span>Let's Build</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#101216] border border-[#252A33] text-[#F5F7FA] hover:border-[#6366F1] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Curtain Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#08090B] border-b border-[#252A33] px-6 py-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#A5ABB5] hover:text-[#F5F7FA] py-2 border-b border-[#1E222A] flex items-center justify-between no-underline"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#6F7682]" />
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              {onOpenCommandPalette && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCommandPalette();
                  }}
                  className="btn btn-secondary text-xs w-full justify-center flex items-center gap-2"
                >
                  <Command className="w-3.5 h-3.5 text-[#818CF8]" />
                  <span>Open Command Palette (⌘K)</span>
                </button>
              )}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn btn-primary text-xs w-full text-center justify-center"
              >
                Let's Build
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
