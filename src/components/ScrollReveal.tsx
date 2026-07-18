"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Animation variant */
  variant?: "fade-up" | "fade-left" | "fade-right" | "fade" | "zoom";
  /** Delay in ms (for staggering children) */
  delay?: number;
  /** Duration in ms */
  duration?: number;
  /** Trigger threshold (0-1) */
  threshold?: number;
  /** Extra class names */
  className?: string;
}

const variantStyles: Record<string, { from: string; to: string }> = {
  "fade-up": {
    from: "opacity-0 translate-y-8",
    to: "opacity-100 translate-y-0",
  },
  "fade-left": {
    from: "opacity-0 -translate-x-8",
    to: "opacity-100 translate-x-0",
  },
  "fade-right": {
    from: "opacity-0 translate-x-8",
    to: "opacity-100 translate-x-0",
  },
  fade: {
    from: "opacity-0",
    to: "opacity-100",
  },
  zoom: {
    from: "opacity-0 scale-95",
    to: "opacity-100 scale-100",
  },
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.15,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            const { to } = variantStyles[variant];
            variantStyles[variant].from.split(" ").forEach((cls) => {
              el.classList.remove(cls);
            });
            to.split(" ").forEach((cls) => {
              el.classList.add(cls);
            });
          }, delay);

          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, delay, threshold]);

  const { from } = variantStyles[variant];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${from} ${className}`}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
