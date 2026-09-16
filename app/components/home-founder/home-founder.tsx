import Link from "next/link";
import { ArrowSquareUpRight, founderMarian } from "@/assets";
import { ParallaxImage, Reveal } from "@/components/reveal";
import { Container } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/constants";
import { cn } from "@/lib/utils";

function FounderCard({
  src,
  alt,
  className,
  imageClassName,
}: {
  src: typeof founderMarian;
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
        sizes="(max-width: 1024px) 90vw, 50vw"
        wrapperClassName="absolute inset-0"
        className={cn("object-cover object-center", imageClassName)}
        amplitude={0.05}
      />
      <div className="absolute bottom-0 left-0 z-10 flex items-center rounded-tr-lg bg-brand-navy px-6 py-3">
        <p className="text-lg leading-[1.2] font-normal whitespace-nowrap text-white">
          Founder
        </p>
      </div>
    </div>
  );
}

export function HomeFounder() {
  return (
    <section
      id="founder"
      aria-label="The expertise behind Premier EL Consult"
      className="bg-neutral-100 pt-16 md:pt-section"
    >
      <Container className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-12">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px] shrink-0 lg:mx-0 lg:w-1/2 lg:max-w-none">
          <Reveal className="absolute inset-0" delay={120}>
            <FounderCard
              src={founderMarian}
              alt="Dr. Marian Bokor, Founder of Premier EL Consult"
              imageClassName="object-[center_20%] scale-110"
            />
          </Reveal>
        </div>

        <div className="flex w-full flex-col items-start gap-8 lg:w-1/2">
          <Reveal delay={80}>
            <div className="flex w-full flex-col gap-3">
              <h2 className="text-2xl leading-[1.2] font-bold text-neutral-900 md:text-[2rem]">
                The expertise behind Premier EL Consult
              </h2>
              <div className="flex flex-col gap-4 text-base leading-[1.35] font-normal text-neutral-800 md:text-lg">
                <p>
                  <strong className="font-semibold text-neutral-900">
                    Premier EL Consult
                  </strong>{" "}
                  is built around the expertise of Dr. Marian Bokor, a business
                  and management professional with deep experience in commercial
                  performance, leadership development, and organizational growth.
                </p>
                <p>
                  Dr. Marian holds a PhD in Business and Management and brings
                  extensive, field-tested experience from her work as Sales
                  Performance Development Manager at Nestlé Ghana, where she has
                  focused on strengthening commercial performance and developing
                  high-performing sales teams.
                </p>
                <p>
                  Beyond her corporate experience, she has supported international
                  organizations entering the Ghanaian market, coached leaders
                  through one-on-one development, and lectured at KNUST School of
                  Business and IDL.
                </p>
                <p>
                  Her approach is grounded in a simple belief:{" "}
                  <strong className="font-semibold text-neutral-900">
                    sustainable results come when strategy, leadership,
                    capability, and execution work together.
                  </strong>
                </p>
                <p>
                  Through Premier EL Consult, she brings this experience to
                  individuals and organizations looking to grow with clarity,
                  build stronger capabilities, and turn strategy into measurable
                  results.
                </p>
              </div>
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
