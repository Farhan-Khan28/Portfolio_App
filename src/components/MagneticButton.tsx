"use client";

import { useRef, useState, useEffect, ReactNode } from "react";

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  id,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Cap magnetic displacement to 5px max
    const maxPull = 5;
    const pullX = (distanceX / (width / 2)) * maxPull;
    const pullY = (distanceY / (height / 2)) * maxPull;

    setPosition({ x: Math.min(Math.max(pullX, -maxPull), maxPull), y: Math.min(Math.max(pullY, -maxPull), maxPull) });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const style = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: position.x === 0 && position.y === 0 ? "transform 350ms cubic-bezier(0.16, 1, 0.3, 1)" : "none",
  };

  if (href) {
    return (
      <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-block">
        <a id={id} href={href} onClick={onClick} className={className} style={style}>
          {children}
        </a>
      </div>
    );
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-block">
      <button id={id} onClick={onClick} className={className} style={style}>
        {children}
      </button>
    </div>
  );
}
