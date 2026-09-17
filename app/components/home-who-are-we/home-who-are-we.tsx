import { IconCompass, IconTarget, whyUsTeam } from "@/assets";
import { ParallaxImage, Reveal } from "@/components/reveal";

export function HomeWhoAreWe() {
  return (
    <section
      id="about"
      aria-label="Who are we"
      className="relative overflow-hidden bg-neutral-100 pt-10 md:pt-[60px]"
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

      {/* Stacked / wrapping layout below xl */}
      <div className="relative flex flex-col gap-8 px-4 md:px-[var(--page-gutter)] xl:hidden">
        <Reveal>
          <h2 className="text-2xl leading-[1.2] font-bold text-neutral-900 md:text-3xl">
            Who are we?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="flex flex-col gap-0 text-base leading-[1.3] font-normal text-neutral-700 md:text-lg">
            <p>
              Premier EL Consult exists for one reason: to help people and
              organizations grow properly, sustainably, and with a plan that
              actually works in the real world. We work with businesses,
              entrepreneurs, investors, and institutions who are ready to move
              past &quot;we should really fix this someday&quot; and into action.
            </p>
            <p>
              Maybe that means untangling a strategy that&apos;s gotten muddy.
              Maybe it&apos;s building the leadership bench that&apos;ll carry the
              next stage of growth. Maybe you&apos;re an organization eyeing Ghana
              and you need someone on the ground who actually knows how things
              work here. Whatever it is, we bring sharp thinking, real experience,
              and a genuine understanding of the African business landscape and
              we stay hands-on until the solution is actually working, not just
              written down.
            </p>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div className="flex max-w-[357px] flex-col gap-3">
            <IconTarget />
            <h3 className="text-xl leading-[1.2] font-bold text-neutral-900 md:text-2xl">
              Our Vision.
            </h3>
            <p className="text-base leading-[1.3] text-neutral-700 md:text-lg">
              To become the business transformation and leadership partner
              organizations across Africa trust most the one people call when
              they&apos;re serious about growth.
            </p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex max-w-[357px] flex-col gap-3">
            <IconCompass />
            <h3 className="text-xl leading-[1.2] font-bold text-neutral-900 md:text-2xl">
              Our Mission
            </h3>
            <p className="text-base leading-[1.3] text-neutral-700 md:text-lg">
              We help organizations, entrepreneurs, and leaders unlock what
              they&apos;re capable of through strategy, coaching,
              capability-building, and market-entry support that produces results
              you can actually point to.
            </p>
          </div>
        </Reveal>
        <div className="mix-blend-luminosity">
          <Reveal delay={260}>
            <ParallaxImage
              src={whyUsTeam}
              alt="Premier EL Consult team collaborating"
              fill
              sizes="100vw"
              wrapperClassName="aspect-[607/407] w-[calc(100%+1rem)] -mr-4 md:w-[calc(100%+var(--page-gutter))] md:-mr-[var(--page-gutter)]"
              className="object-cover object-center"
            />
          </Reveal>
        </div>
      </div>

      {/* xl+: Figma 1440 composition — fixed positions, tight spacing */}
      <div className="relative mx-auto hidden h-[662px] w-full xl:block">
        <div className="absolute top-0 right-[var(--page-gutter)] left-[var(--page-gutter)] flex items-start gap-[90px]">
          <Reveal>
            <h2 className="w-[493px] shrink-0 text-4xl leading-[1.2] font-bold text-neutral-900">
              Who are we?
            </h2>
          </Reveal>
          <Reveal delay={80} className="min-w-0 flex-1">
            <div className="text-lg leading-[1.3] font-normal text-neutral-700">
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
                the next stage of growth. Maybe you&apos;re an organization eyeing
                Ghana and you need someone on the ground who actually knows how
                things work here. Whatever it is, we bring sharp thinking, real
                experience, and a genuine understanding of the African business
                landscape and we stay hands-on until the solution is actually
                working, not just written down.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={140}
          className="absolute top-[156px] left-[var(--page-gutter)] w-[357px]"
        >
          <div className="flex flex-col gap-3">
            <IconTarget />
            <h3 className="text-2xl leading-[1.2] font-bold text-neutral-900">
              Our Vision.
            </h3>
            <p className="text-lg leading-[1.3] text-neutral-700">
              To become the business transformation and leadership partner
              organizations across Africa trust most the one people call when
              they&apos;re serious about growth.
            </p>
          </div>
        </Reveal>

        <Reveal
          delay={200}
          className="absolute top-[398px] left-[calc(var(--page-gutter)+306px)] w-[357px]"
        >
          <div className="flex flex-col gap-3">
            <IconCompass />
            <h3 className="text-2xl leading-[1.2] font-bold text-neutral-900">
              Our Mission
            </h3>
            <p className="text-lg leading-[1.3] text-neutral-700">
              We help organizations, entrepreneurs, and leaders unlock what
              they&apos;re capable of through strategy, coaching,
              capability-building, and market-entry support that produces results
              you can actually point to.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="pointer-events-none absolute right-0 bottom-0 hidden aspect-[607/407] w-[clamp(15rem,calc(100vw-50rem),37.9375rem)] mix-blend-luminosity xl:block">
        <Reveal delay={260} className="pointer-events-auto h-full w-full">
          <ParallaxImage
            src={whyUsTeam}
            alt="Premier EL Consult team collaborating"
            fill
            sizes="(min-width: 1440px) 607px, 42vw"
            wrapperClassName="h-full w-full"
            className="object-cover object-center"
          />
        </Reveal>
      </div>
    </section>
  );
}
