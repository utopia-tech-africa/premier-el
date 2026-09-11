import Link from "next/link";
import { ArrowSquareUpRight, ctaHandshake } from "@/assets";
import { ParallaxImage, Reveal } from "@/components/reveal";
import { Container } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/constants";
import { cn } from "@/lib/utils";

export function HomeCta() {
  return (
    <section
      id="contact"
      aria-label="The partner you have been looking for"
      className="bg-neutral-100 py-16 md:py-section"
    >
      <Container className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="flex w-full max-w-[637px] flex-col items-start gap-8">
          <Reveal>
            <div className="flex w-full flex-col gap-3">
              <h2 className="text-2xl leading-[1.2] font-bold text-neutral-900 md:text-[2rem]">
                The partner you have been looking for
              </h2>
              <p className="max-w-[496px] text-base leading-[1.2] text-neutral-800 md:text-lg">
                Whatever stage you&apos;re at scaling a business, eyeing a new
                market, building out your leadership team it usually starts with a
                conversation. So let&apos;s have one.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Link
              href={siteConfig.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-auto gap-2.5 rounded px-6 py-3 text-base font-normal"
              )}
            >
              Book a consultation
              <ArrowSquareUpRight />
            </Link>
          </Reveal>
        </div>

        <Reveal
          delay={120}
          className="mx-auto w-full max-w-[502px] lg:mx-0 lg:shrink-0"
        >
          <ParallaxImage
            src={ctaHandshake}
            alt="Business partners shaking hands"
            fill
            sizes="(max-width: 1024px) 100vw, 502px"
            wrapperClassName="aspect-[502/328] w-full overflow-hidden rounded-lg"
            className="object-cover object-center"
          />
        </Reveal>
      </Container>
    </section>
  );
}
