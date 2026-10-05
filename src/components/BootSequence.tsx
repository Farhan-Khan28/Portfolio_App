"use client";

import { useState, useEffect } from "react";

export default function BootSequence() {
  const [complete, setComplete] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Fast system boot sequence timeline (700-900ms total)
    const timer1 = setTimeout(() => setStep(1), 150); // FK Mark
    const timer2 = setTimeout(() => setStep(2), 350); // Indigo line
    const timer3 = setTimeout(() => setStep(3), 550); // System initialized
    const timer4 = setTimeout(() => {
      setComplete(true);
    }, 850);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  if (complete) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#08090B] flex flex-col items-center justify-center transition-opacity duration-300 pointer-events-none"
      style={{ opacity: step === 3 ? 1 : step === 0 ? 0.9 : 1 }}
    >
      <div className="flex flex-col items-center gap-4 max-w-xs text-center px-6">
        
        {/* Brand Mark FK */}
        <div
          className={`w-12 h-12 rounded-xl bg-[#101216] border border-[#252A33] flex items-center justify-center text-[#F5F7FA] transition-all duration-300 ${
            step >= 1 ? "opacity-100 scale-100 shadow-[0_0_24px_rgba(99,102,241,0.25)]" : "opacity-0 scale-90"
          }`}
        >
          <span className="font-mono text-base font-bold text-[#6366F1]">FK</span>
        </div>

        {/* Expanding Indigo System Line */}
        <div className="w-32 h-[2px] bg-[#1E222A] relative overflow-hidden rounded-full my-1">
          <div
            className="absolute top-0 left-0 bottom-0 bg-[#6366F1] transition-all duration-500 ease-out"
            style={{ width: step >= 2 ? "100%" : "0%" }}
          />
        </div>

        {/* System Eyebrow Text */}
        <div
          className={`font-mono text-[11px] text-[#818CF8] tracking-widest transition-opacity duration-200 ${
            step >= 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          SYSTEM INITIALIZING...
        </div>

      </div>
    </div>
  );
}
