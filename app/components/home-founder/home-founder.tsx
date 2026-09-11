import Link from "next/link";
import {
  ArrowSquareUpRight,
  founderGhizo,
  founderMarian,
} from "@/assets";
import { ParallaxImage, Reveal } from "@/components/reveal";
import { Container } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/constants";
import { cn } from "@/lib/utils";

function CoFounderCard({
  src,
  alt,
  className,
  imageClassName,
}: {
  src: typeof founderGhizo;
  alt: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden rounded-lg", className)}>
      <ParallaxImage
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 60vw, 330px"
        wrapperClassName="absolute inset-0"
        className={cn("object-cover object-center", imageClassName)}
        amplitude={0.05}
      />
      <div className="absolute bottom-0 left-0 z-10 flex items-center rounded-tr-lg bg-brand-navy px-6 py-3">
        <p className="text-lg leading-[1.2] font-normal whitespace-nowrap text-white">
          Co founder
        </p>
      </div>
    </div>
  );
}

export function HomeFounder() {
  return (
    <section
      id="founder"
      aria-label="The visionaries behind Premier EL Consult"
      className="bg-neutral-100 pt-16 md:pt-section"
    >
      <Container className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-[48px]">
        <div className="relative mx-auto aspect-[558/635] w-full max-w-[558px] shrink-0 lg:mx-0">
          <Reveal
            className="absolute top-0 left-0 h-[74.33%] w-[59.14%]"
            delay={0}
          >
            <CoFounderCard
              src={founderGhizo}
              alt="Ghizo, Co-founder of Premier EL Consult"
            />
          </Reveal>
          <Reveal
            className="absolute top-[29.61%] left-[40.86%] z-10 h-[70.39%] w-[59.14%]"
            delay={120}
          >
            <CoFounderCard
              src={founderMarian}
              alt="Dr. Marian Bokor, Co-founder of Premier EL Consult"
              imageClassName="object-[center_22%]"
            />
          </Reveal>
        </div>

        <div className="flex w-full max-w-[591px] flex-col items-start gap-8">
          <Reveal delay={80}>
            <div className="flex w-full flex-col gap-3">
              <h2 className="text-2xl leading-[1.2] font-bold text-neutral-900 md:text-[2rem]">
                The visionaries behind Premier EL Consult
              </h2>
              <div className="flex flex-col gap-0 text-base leading-[1.2] font-normal text-neutral-800 md:text-lg">
                <p>
                  Premier EL Consult was founded by Ghizo and Dr. Marian Bokor,
                  bringing complementary expertise to one shared mission: helping
                  people and organizations grow properly, sustainably, and with a
                  plan that actually works.
                </p>
                <p>
                  Ghizo has over a decade of experience in edtech and youth
                  development. Starting as a mentor for aspiring tech
                  professionals, he&apos;s since helped thousands of young people
                  launch careers and build real-world solutions, giving him a
                  sharp understanding of how to develop talent and leadership from
                  the ground up.
                </p>
                <p>
                  Dr. Marian Bokor holds a PhD in Business and Management, but her
                  expertise is field-tested. As Sales Performance Development
                  Manager at Nestlé Ghana, she&apos;s spent years building
                  commercial performance and capable sales teams. She&apos;s also
                  guided international organizations entering the Ghanaian market,
                  coaches leaders one-on-one, and lectures at KNUST School of
                  Business and IDL. Her belief: results come from strategy,
                  leadership, capability, and execution working together.
                </p>
                <p>
                  Together, they bring sharp thinking, real experience, and deep
                  knowledge of the African business landscape, and stay hands-on
                  until solutions actually work.
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
          </Reveal>

          <Reveal delay={200}>
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
      </Container>
    </section>
  );
}
