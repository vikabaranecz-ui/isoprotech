// src/components/ui/Reveal.tsx
"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number; // 0-4 maps to reveal-delay-{n}
  className?: string;
  style?: CSSProperties;
  /** Direction of reveal: up (default), left, right, scale */
  direction?: "up" | "left" | "right" | "scale";
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  style,
  direction = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.classList.add("revealed");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const directionClass = {
    up: "reveal",
    left: "reveal [&:not(.revealed)]:translate-x-[-24px]",
    right: "reveal [&:not(.revealed)]:translate-x-[24px]",
    scale: "reveal [&:not(.revealed)]:scale-95",
  }[direction];

  const delayClass = delay > 0 ? `reveal-delay-${Math.min(delay, 4)}` : "";

  return (
    <div
      ref={ref}
      className={`${directionClass} ${delayClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
