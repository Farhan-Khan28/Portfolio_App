"use client";

import { useEffect, useState } from "react";

export default function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Check desktop & reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isDesktop = window.innerWidth >= 1024 && !window.matchMedia("(pointer: coarse)").matches;

    if (isDesktop && !mediaQuery.matches) {
      setEnabled(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    if (enabled) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="fixed inset-0 z-30 pointer-events-none transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(99, 102, 241, 0.07), transparent 80%)`,
      }}
    />
  );
}
