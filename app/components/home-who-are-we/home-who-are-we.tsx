import Image from "next/image";
import { IconCompass, IconTarget, whyUsTeam } from "@/assets";
import { Container } from "@/components/layout";

export function HomeWhoAreWe() {
  return (
    <section
      id="about"
      aria-label="Who are we"
      className="relative overflow-hidden bg-neutral-100 pt-2 pb-8 md:pt-4 md:pb-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "url(/icons/why-us-grid.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
        }}
      />

      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-16 xl:gap-[90px]">
          <div className="flex shrink-0 flex-col gap-8 lg:w-[492px]">
            <h2 className="text-2xl leading-[1.2] font-bold text-neutral-900 md:text-3xl lg:text-4xl">
              Who are we?
            </h2>

            <div className="flex flex-col gap-8">
              <div className="flex max-w-[357px] flex-col gap-3">
                <IconTarget />
                <h3 className="text-xl leading-[1.2] font-bold text-neutral-900 md:text-2xl">
                  Our Vision.
                </h3>
                <p className="text-base leading-[1.3] text-neutral-700 md:text-lg">
                  To become the business transformation and leadership partner
                  organizations across Africa trust most — the one people call
                  when they&apos;re serious about growth.
                </p>
              </div>
              <div className="flex max-w-[357px] flex-col gap-3 lg:ml-16 xl:ml-24">
                <IconCompass />
                <h3 className="text-xl leading-[1.2] font-bold text-neutral-900 md:text-2xl">
                  Our Mission
                </h3>
                <p className="text-base leading-[1.3] text-neutral-700 md:text-lg">
                  We help organizations, entrepreneurs, and leaders unlock what
                  they&apos;re capable of — through strategy, coaching,
                  capability-building, and market-entry support that produces
                  results you can actually point to.
                </p>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-3">
            <div className="flex flex-col gap-0 text-base leading-[1.3] font-normal text-neutral-700 md:text-lg">
              <p>
                Premier EL Consult exists for one reason: to help people and
                organizations grow properly, sustainably, and with a plan that
                actually works in the real world. We work with businesses,
                entrepreneurs, investors, and institutions who are ready to move
                past &quot;we should really fix this someday&quot; and into
                action.
              </p>
              <p>
                Maybe that means untangling a strategy that&apos;s gotten muddy.
                Maybe it&apos;s building the leadership bench that&apos;ll carry
                the next stage of growth. Maybe you&apos;re an organization
                eyeing Ghana and you need someone on the ground who actually
                knows how things work here. Whatever it is, we bring sharp
                thinking, real experience, and a genuine understanding of the
                African business landscape — and we stay hands-on until the
                solution is actually working, not just written down.
              </p>
            </div>

            <div className="relative aspect-[607/407] w-full overflow-hidden">
              <Image
                src={whyUsTeam}
                alt="Premier EL Consult team collaborating"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center mix-blend-luminosity"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
