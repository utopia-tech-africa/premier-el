"use client";

import { cn } from "@/lib/utils";
import {
  INTRO_EXIT_DURATION_MS,
  INTRO_EASE,
  INTRO_REDUCED_HOLD_MS,
  useIntro,
} from "./intro-provider";

export function IntroLoader() {
  const { phase, reduceMotion, showSheet } = useIntro();

  if (!showSheet) {
    return null;
  }

  return (
    <div
      role="status"
      aria-busy={phase === "loading"}
      aria-live="polite"
      aria-label="Loading"
      className={cn(
        "fixed inset-0 z-40 bg-white",
        phase === "exiting" ? "pointer-events-none opacity-0" : "opacity-100",
        "transition-opacity"
      )}
      style={{
        transitionDuration: `${reduceMotion ? INTRO_REDUCED_HOLD_MS : INTRO_EXIT_DURATION_MS}ms`,
        transitionTimingFunction: INTRO_EASE,
      }}
      data-intro={phase}
    >
      <p className="sr-only">Loading Premier EL Consult</p>
    </div>
  );
}
