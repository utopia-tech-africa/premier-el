import Link from "next/link";
import Image from "next/image";
import {
  ArrowSquareUpRightDark,
  ArrowSquareUpRightLight,
  homeHero,
} from "@/assets";
import { Container } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HomeHero() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-[min(100svh,45.5625rem)] w-full overflow-hidden"
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

      <Container className="relative flex min-h-[min(100svh,45.5625rem)] flex-col justify-end pb-20 pt-32 md:pb-24">
        <div className="flex w-full flex-col gap-6 md:w-3/4 xl:w-2/3">
          <div className="flex flex-col text-neutral-100">
            <h1 className="text-2xl leading-[1.2] font-black md:text-3xl lg:text-4xl xl:text-5xl">
              Transforming Businesses.
              <br />
              Developing Leaders.
              <br />
              Accelerating Sustainable Growth.
            </h1>
            <p className="mt-0 text-lg font-normal leading-[1.3] text-neutral-100">
              Premier EL Consult aids organizations and investors in growth
              through strategic advisory, leadership development, and market
              entry solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-3">
            <Link
              href="/#contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-auto gap-2.5 rounded px-6 py-3 text-base font-normal"
              )}
            >
              Book a consultation
              <ArrowSquareUpRightLight />
            </Link>
            <Link
              href="/#services"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "h-auto gap-2.5 rounded border border-transparent px-6 py-3 text-base font-normal shadow-none"
              )}
            >
              Explore our services
              <ArrowSquareUpRightDark />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
