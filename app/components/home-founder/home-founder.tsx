import Image from "next/image";
import Link from "next/link";
import { ArrowSquareUpRightLight, founderPortrait } from "@/assets";
import { Container } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HomeFounder() {
  return (
    <section
      id="founder"
      aria-label="The visionary behind Premier EL Consult"
      className="bg-neutral-100 py-12 md:py-16"
    >
      <Container className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="relative mx-auto aspect-[502/582] w-full max-w-[502px] overflow-hidden rounded-lg lg:mx-0 lg:shrink-0">
          <Image
            src={founderPortrait}
            alt="Dr. Marian Bokor, Founder & CEO of Premier EL Consult"
            fill
            sizes="(max-width: 1024px) 100vw, 502px"
            className="object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 flex w-[228px] items-center justify-center rounded bg-brand-navy px-6 py-3">
            <p className="text-lg leading-[1.2] font-normal whitespace-nowrap text-white">
              Founder &amp; CEO
            </p>
          </div>
        </div>

        <div className="flex w-full max-w-[637px] flex-col items-start gap-8">
          <div className="flex w-full flex-col gap-3">
            <h2 className="text-2xl leading-[1.2] font-bold text-neutral-900 md:text-3xl">
              The visionary behind Premier EL Consult
            </h2>
            <div className="flex flex-col gap-0 text-base leading-[1.2] font-normal text-neutral-800 md:text-lg">
              <p>
                Dr. Marian Bokor has spent her career doing one thing really
                well: helping organizations and leaders figure out what&apos;s
                actually holding them back — and then fixing it. She holds a PhD
                in Business and Management, but don&apos;t picture someone who
                only lives in theory. Her days are spent inside real businesses,
                solving real problems.
              </p>
              <p>
                As Sales Performance Development Manager at Nestlé Ghana,
                she&apos;s spent years inside one of the world&apos;s biggest
                multinationals, sharpening commercial performance, building
                distributor capability, and developing sales teams that actually
                hit their numbers. On the consulting side, she&apos;s guided
                international organizations through the maze of entering the
                Ghanaian market research, regulations, the right partners, the
                right approach.
              </p>
              <p>
                She also coaches leaders one-on-one, and teaches the next
                generation as a lecturer at the KNUST School of Business and the
                Institute of Distance Learning (IDL). If there&apos;s a thread
                running through all of it, it&apos;s this: she believes real
                results come from getting strategy, leadership, capability, and
                execution working together not in silos.
              </p>
            </div>
            <p className="text-base leading-[1.2] font-medium text-neutral-800 md:text-lg">
              &quot;I believe every organization has what it takes to achieve
              something extraordinary if it has the right strategy, the right
              leadership, and a real culture of getting better. That&apos;s what
              we&apos;re here to help build: turning potential into performance,
              and vision into something lasting.&quot;
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
      </Container>
    </section>
  );
}
