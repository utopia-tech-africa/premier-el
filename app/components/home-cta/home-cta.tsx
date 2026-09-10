import Image from "next/image";
import Link from "next/link";
import { ArrowSquareUpRightLight, ctaHandshake } from "@/assets";
import { Container } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HomeCta() {
  return (
    <section
      id="contact"
      aria-label="The partner you have been looking for"
      className="bg-neutral-100 py-12 md:py-16"
    >
      <Container className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div className="flex w-full max-w-[637px] flex-col items-start gap-8">
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
        </div>

        <div className="relative mx-auto aspect-[502/328] w-full max-w-[502px] overflow-hidden rounded-lg lg:mx-0 lg:shrink-0">
          <Image
            src={ctaHandshake}
            alt="Business partners shaking hands"
            fill
            sizes="(max-width: 1024px) 100vw, 502px"
            className="object-cover object-center"
          />
        </div>
      </Container>
    </section>
  );
}
