"use client";
import { useState } from "react";
import CommandPalette from "@/components/CommandPalette";
import Navbar from "@/components/Navbar";

export default function PageClientWrapper() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  return (
    <>
      <CommandPalette isOpen={commandPaletteOpen} onClose={() => setCommandPaletteOpen(false)} />
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
    </>
  );
}
