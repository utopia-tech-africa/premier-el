"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useLenis } from "lenis/react";

export type IntroPhase = "loading" | "exiting" | "ready";

export const INTRO_LINES = [
  "Transforming Businesses.",
  "Developing Leaders.",
  "Accelerating Sustainable Growth.",
] as const;

export const INTRO_LINE_STAGGER_MS = 850;
export const INTRO_LINE_DURATION_MS = 700;
export const INTRO_HOLD_AFTER_LINES_MS = 700;
export const INTRO_EXIT_DURATION_MS = 800;
export const INTRO_REDUCED_HOLD_MS = 200;
/** Softer ease-out — less punchy than the default UI curve */
export const INTRO_EASE = "cubic-bezier(0.33, 1, 0.68, 1)";

type IntroContextValue = {
  phase: IntroPhase;
  isReady: boolean;
  isExiting: boolean;
  reduceMotion: boolean;
  visibleLineCount: number;
  showSheet: boolean;
};

const IntroContext = createContext<IntroContextValue | null>(null);

function getPrefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type IntroProviderProps = {
  children: ReactNode;
};

export function IntroProvider({ children }: IntroProviderProps) {
  const [phase, setPhase] = useState<IntroPhase>("loading");
  const [reduceMotion, setReduceMotion] = useState(false);
  const [visibleLineCount, setVisibleLineCount] = useState(0);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [sequenceDone, setSequenceDone] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    setReduceMotion(getPrefersReducedMotion());
  }, []);

  useEffect(() => {
    if (document.readyState === "complete") {
      setPageLoaded(true);
      return;
    }

    const onLoad = () => setPageLoaded(true);
    window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    if (phase !== "loading") return;

    if (reduceMotion) {
      setVisibleLineCount(INTRO_LINES.length);
      const timer = window.setTimeout(() => {
        setSequenceDone(true);
      }, INTRO_REDUCED_HOLD_MS);
      return () => window.clearTimeout(timer);
    }

    const timers: number[] = [];

    INTRO_LINES.forEach((_, index) => {
      timers.push(
        window.setTimeout(() => {
          setVisibleLineCount(index + 1);
        }, index * INTRO_LINE_STAGGER_MS)
      );
    });

    const sequenceEnd =
      (INTRO_LINES.length - 1) * INTRO_LINE_STAGGER_MS +
      INTRO_LINE_DURATION_MS +
      INTRO_HOLD_AFTER_LINES_MS;

    timers.push(
      window.setTimeout(() => {
        setSequenceDone(true);
      }, sequenceEnd)
    );

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [phase, reduceMotion]);

  useEffect(() => {
    if (phase !== "loading") return;
    if (!sequenceDone || !pageLoaded) return;
    setPhase("exiting");
  }, [phase, sequenceDone, pageLoaded]);

  useEffect(() => {
    if (phase !== "exiting") return;

    const duration = reduceMotion
      ? INTRO_REDUCED_HOLD_MS
      : INTRO_EXIT_DURATION_MS;
    const timer = window.setTimeout(() => {
      setPhase("ready");
    }, duration);

    return () => window.clearTimeout(timer);
  }, [phase, reduceMotion]);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
    lenis?.scrollTo(0, { immediate: true });
  }, [lenis]);

  useEffect(() => {
    const lockScroll = phase === "loading" || phase === "exiting";
    const root = document.documentElement;
    const { body } = document;

    const preventScroll = (event: Event) => {
      event.preventDefault();
    };

    const preventKeys = (event: KeyboardEvent) => {
      const keys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
      ];
      if (keys.includes(event.key)) {
        event.preventDefault();
      }
    };

    if (!lockScroll) {
      lenis?.start();
      root.style.overflow = "";
      body.style.overflow = "";
      body.style.touchAction = "";
      return;
    }

    lenis?.stop();
    lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    root.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", preventKeys);

    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeys);
    };
  }, [phase, lenis]);

  useEffect(() => {
    return () => {
      const root = document.documentElement;
      root.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      lenis?.start();
    };
  }, [lenis]);

  const value = useMemo<IntroContextValue>(
    () => ({
      phase,
      isReady: phase === "ready",
      isExiting: phase === "exiting",
      reduceMotion,
      visibleLineCount,
      showSheet: phase === "loading" || phase === "exiting",
    }),
    [phase, reduceMotion, visibleLineCount]
  );

  return (
    <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
  );
}

export function useIntro() {
  const context = useContext(IntroContext);
  if (!context) {
    throw new Error("useIntro must be used within IntroProvider");
  }
  return context;
}
