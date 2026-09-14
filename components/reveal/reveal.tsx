"use client";

import {
  useEffect,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { prefersReducedMotion, useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const REVEAL_EASE = "cubic-bezier(0.33, 1, 0.68, 1)";
const REVEAL_DURATION_MS = 600;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>();
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(prefersReducedMotion());
  }, []);

  const style: CSSProperties = {
    transitionProperty: reduceMotion ? "opacity" : "opacity, transform",
    transitionDuration: `${REVEAL_DURATION_MS}ms`,
    transitionTimingFunction: REVEAL_EASE,
    transitionDelay: inView ? `${delay}ms` : "0ms",
  };

  return (
    <Tag
      ref={ref}
      className={cn(
        !reduceMotion && "translate-y-3",
        inView ? "translate-y-0 opacity-100" : "opacity-0",
        className
      )}
      style={style}
    >
      {children}
    </Tag>
  );
}
