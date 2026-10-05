"use client";

import { useState } from "react";
import BootSequence from "@/components/BootSequence";
import CommandPalette from "@/components/CommandPalette";
import CursorSpotlight from "@/components/CursorSpotlight";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import AboutSection from "@/components/AboutSection";
import Capabilities from "@/components/Capabilities";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import ExperienceSection from "@/components/ExperienceSection";
import GitHubSection from "@/components/GitHubSection";
import DeveloperTerminal from "@/components/DeveloperTerminal";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#08090B] text-[#F5F7FA] selection:bg-[#6366F1]/30 selection:text-[#F5F7FA]">
      {/* Version 2 Motion & Interaction Drivers */}
      <BootSequence />
      <CursorSpotlight />
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Sticky Top Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Core Architectural Page Flow */}
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <Capabilities />
      <ProjectsSection />
      <ProcessSection />
      <ExperienceSection />
      <GitHubSection />
      <DeveloperTerminal />
      <ContactSection />

      {/* Truthful Technical Footer */}
      <Footer />
    </main>
  );
}
