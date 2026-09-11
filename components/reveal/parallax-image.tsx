"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { prefersReducedMotion } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type ParallaxImageProps = Omit<ImageProps, "className"> & {
  className?: string;
  /** Max translate as a fraction of element height (default 0.06 = 6%). */
  amplitude?: number;
  wrapperClassName?: string;
};

export function ParallaxImage({
  className,
  wrapperClassName,
  amplitude = 0.06,
  alt,
  ...imageProps
}: ParallaxImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    setReduceMotion(prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const update = () => {
      const node = wrapperRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      const clamped = Math.min(1, Math.max(0, progress));
      const shift = (clamped - 0.5) * 2 * amplitude * rect.height;
      setOffset(shift);
    };

    update();

    if (lenis) {
      return lenis.on("scroll", update);
    }

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [amplitude, lenis, reduceMotion]);

  return (
    <div
      ref={wrapperRef}
      className={cn("relative overflow-hidden", wrapperClassName)}
    >
      <Image
        alt={alt}
        {...imageProps}
        className={cn(className, !reduceMotion && "will-change-transform")}
        style={
          reduceMotion
            ? undefined
            : {
                transform: `translate3d(0, ${offset}px, 0) scale(1.08)`,
              }
        }
      />
    </div>
  );
}
