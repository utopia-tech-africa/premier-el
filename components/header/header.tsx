"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { premierElLogo } from "@/assets";
import { useIntro, INTRO_EASE } from "@/components/intro-loader";
import { Container } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const { isReady, reduceMotion } = useIntro();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[60]",
        !reduceMotion && "transition-[opacity,transform]",
        !isReady
          ? "pointer-events-none -translate-y-3 opacity-0"
          : "translate-y-0 opacity-100",
        reduceMotion && !isReady && "translate-y-0"
      )}
      style={
        reduceMotion
          ? undefined
          : {
              transitionDuration: "450ms",
              transitionTimingFunction: INTRO_EASE,
            }
      }
    >
      <Container className="flex items-center justify-center py-4 md:py-8">
        <nav
          aria-label="Primary"
          className="w-full max-w-lg overflow-hidden rounded-3xl border-[0.5px] border-neutral-500/30 bg-neutral-100 shadow-[2px_2px_17px_0px_rgba(0,0,0,0.15)] md:w-auto md:max-w-none"
        >
          <div className="flex h-12 items-stretch md:h-auto">
            <div className="flex min-w-0 flex-1 items-center gap-4 px-4 py-0 sm:gap-8 sm:px-6 md:py-3">
              <Link
                href="/"
                className="relative h-5 w-[85px] shrink-0 md:h-[25px] md:w-[106px]"
                onClick={() => setOpen(false)}
              >
                <Image
                  src={premierElLogo}
                  alt={siteConfig.name}
                  fill
                  sizes="(max-width: 767px) 85px, 106px"
                  className="object-contain object-left"
                  priority
                />
              </Link>

              <ul className="hidden items-center gap-8 text-base leading-6 font-medium text-neutral-800 md:flex">
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative whitespace-nowrap transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
                        "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 after:ease-[cubic-bezier(0.23,1,0.32,1)]",
                        "[@media(hover:hover)_and_(pointer:fine)]:hover:text-primary",
                        "[@media(hover:hover)_and_(pointer:fine)]:hover:after:scale-x-100"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="ml-auto inline-flex size-10 items-center justify-center rounded-full text-neutral-800 md:hidden"
                aria-expanded={open}
                aria-controls={menuId}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
              >
                <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
                <span
                  aria-hidden
                  className="relative block size-5"
                >
                  <span
                    className={cn(
                      "absolute top-[4px] left-0 block h-0.5 w-5 bg-current transition-[transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
                      open && "translate-y-[5px] rotate-45"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute top-[9px] left-0 block h-0.5 w-5 bg-current transition-opacity duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
                      open && "opacity-0"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute top-[14px] left-0 block h-0.5 w-5 bg-current transition-[transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]",
                      open && "-translate-y-[5px] -rotate-45"
                    )}
                  />
                </span>
              </button>
            </div>

            <Link
              href={siteConfig.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group/nav-cta relative isolate hidden h-auto self-stretch items-center overflow-hidden bg-white px-4 text-base leading-6 font-medium whitespace-nowrap text-primary transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] md:flex",
                "[@media(hover:hover)_and_(pointer:fine)]:hover:text-primary-foreground"
              )}
              onClick={() => setOpen(false)}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 -translate-x-[101%] bg-primary transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover/nav-cta:translate-x-0"
              />
              <span className="relative z-10">{siteConfig.cta.label}</span>
            </Link>
          </div>
          <div
            id={menuId}
            className={cn(
              "grid md:hidden",
              reduceMotion
                ? open
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
                : cn(
                    "transition-[grid-template-rows]",
                    open
                      ? "grid-rows-[1fr] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)]"
                      : "grid-rows-[0fr] duration-[280ms] ease-[cubic-bezier(0.32,0.72,0,1)]"
                  )
            )}
          >
            <div className="overflow-hidden">
              <ul
                className={cn(
                  "flex flex-col gap-1 border-t border-neutral-200 px-4 py-3 text-base leading-6 font-medium text-neutral-800",
                  !reduceMotion && "transition-opacity",
                  open
                    ? "opacity-100 duration-150 delay-75 ease-[cubic-bezier(0.23,1,0.32,1)]"
                    : "pointer-events-none opacity-0 duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                )}
              >
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-lg px-2 py-2.5 transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-primary"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={siteConfig.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "mt-1 h-auto w-full rounded-lg border-transparent px-2 py-2.5 text-center text-base font-medium shadow-none drop-shadow-none"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {siteConfig.cta.label}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
