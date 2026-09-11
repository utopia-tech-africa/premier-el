"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowSquareUpRight,
  homeHero,
} from "@/assets";
import {
  INTRO_EXIT_DURATION_MS,
  INTRO_EASE,
  INTRO_LINE_DURATION_MS,
  INTRO_LINES,
  INTRO_REDUCED_HOLD_MS,
  useIntro,
} from "@/components/intro-loader";
import { Container } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/constants";
import { cn } from "@/lib/utils";

export function HomeHero() {
  const { isReady, phase, reduceMotion, visibleLineCount } = useIntro();
  const headlineOnDark = phase !== "loading";

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative h-screen w-full overflow-hidden"
      data-intro={isReady ? "ready" : phase}
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={homeHero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-neutral-100 from-10% via-neutral-100/25 via-45% to-transparent to-100% md:h-36"
      />

      <Container className="relative z-50 flex h-full flex-col justify-end pb-20 pt-32 md:pb-24">
        <div className="flex w-full flex-col gap-6 md:w-3/4 xl:w-2/3">
          <div className="flex flex-col">
            <h1
              className={cn(
                "text-2xl leading-[1.2] font-black md:text-3xl lg:text-4xl xl:text-5xl",
                "transition-colors",
                headlineOnDark ? "text-neutral-100" : "text-neutral-900"
              )}
              style={{
                transitionDuration: `${reduceMotion ? INTRO_REDUCED_HOLD_MS : INTRO_EXIT_DURATION_MS}ms`,
                transitionTimingFunction: INTRO_EASE,
              }}
            >
              {INTRO_LINES.map((line, index) => {
                const visible = index < visibleLineCount;
                const isLastLine = index === INTRO_LINES.length - 1;
                return (
                  <span
                    key={line}
                    className={cn(
                      "block",
                      isLastLine && "whitespace-nowrap",
                      !reduceMotion && "transition-[opacity,transform]",
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0"
                    )}
                    style={
                      reduceMotion
                        ? undefined
                        : {
                            transitionDuration: `${INTRO_LINE_DURATION_MS}ms`,
                            transitionTimingFunction: INTRO_EASE,
                          }
                    }
                    aria-hidden={!visible}
                  >
                    {line}
                  </span>
                );
              })}
            </h1>
            <p
              className={cn(
                "mt-0 text-lg font-normal leading-[1.3] text-neutral-100",
                !reduceMotion && "transition-[opacity,transform] delay-100",
                !isReady
                  ? cn("opacity-0", !reduceMotion && "translate-y-3")
                  : "translate-y-0 opacity-100"
              )}
              style={
                reduceMotion
                  ? undefined
                  : {
                      transitionDuration: "550ms",
                      transitionTimingFunction: INTRO_EASE,
                    }
              }
            >
              Premier EL Consult aids organizations and investors in growth
              through strategic advisory, leadership development, and market
              entry solutions.
            </p>
          </div>

          <div
            className={cn(
              "flex flex-wrap items-start gap-3",
              !reduceMotion && "transition-[opacity,transform] delay-200",
              !isReady
                ? cn("opacity-0", !reduceMotion && "translate-y-3")
                : "translate-y-0 opacity-100"
            )}
            style={
              reduceMotion
                ? undefined
                : {
                    transitionDuration: "550ms",
                    transitionTimingFunction: INTRO_EASE,
                  }
            }
          >
            <Link
              href={siteConfig.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-auto gap-2.5 rounded px-6 py-3 text-base font-normal transition-transform duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
              )}
            >
              Book a consultation
              <ArrowSquareUpRight />
            </Link>
            <Link
              href="/#services"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "h-auto gap-2.5 rounded px-6 py-3 text-base font-normal transition-transform duration-[160ms] ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
              )}
            >
              Explore our services
              <ArrowSquareUpRight />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
