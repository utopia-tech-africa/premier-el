import Link from "next/link";
import { ArrowSquareUpRight } from "@/assets";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/constants";
import { cn } from "@/lib/utils";
import { HomeIndustries } from "../home-industries";

const services = [
  {
    title: "Business Strategy & Transformation",
    items: [
      "Business growth strategies",
      "Strategic planning",
      "Organizational transformation",
      "Performance improvement",
      "Business diagnostics",
    ],
    className: "lg:col-start-1 lg:row-start-1",
  },
  {
    title: "Capability Building & Corporate Training",
    items: [
      "Leadership development",
      "Sales excellence",
      "Coaching skills for managers",
      "Effective communication",
      "Productivity & performance management",
      "Operational excellence",
      "Customer service excellence",
      "Team effectiveness",
    ],
    className: "lg:col-start-2 lg:row-span-2 lg:row-start-1",
    centered: true,
  },
  {
    title: "Executive & Business Coaching",
    items: [
      "Executive coaching",
      "Leadership coaching",
      "Career coaching",
      "Small business mentoring",
      "Founder coaching",
    ],
    className: "lg:col-start-3 lg:row-start-1",
  },
  {
    title: "Market Entry Advisory",
    items: [
      "Ghana market entry strategy",
      "Regulatory environment assessment",
      "Stakeholder mapping",
      "Partnership identification",
      "Business development planning",
      "Investor advisory services",
    ],
    className: "lg:col-start-1 lg:row-start-2",
  },
  {
    title: "Sales Capability & Commercial Excellence",
    items: [
      "Sales force effectiveness",
      "Distributor capability development",
      "Sales academy design",
      "Coaching for sales managers",
      "Route-to-market optimization",
      "Performance management systems",
    ],
    className: "lg:col-start-3 lg:row-start-2",
  },
] as const;

function ServiceCard({
  title,
  items,
  className,
  centered,
}: {
  title: string;
  items: readonly string[];
  className?: string;
  centered?: boolean;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-clip rounded-lg border border-neutral-500/30 bg-neutral-300/30 p-2",
        className
      )}
    >
      <div
        className={cn(
          "flex h-full flex-col gap-2 rounded-lg bg-neutral-100 p-3 shadow-[0_0_6.5px_rgba(0,0,0,0.1)]",
          centered && "lg:items-center lg:justify-center"
        )}
      >
        <div
          className={cn(
            "flex w-full flex-col gap-4 text-left",
            centered && "lg:items-center lg:text-center"
          )}
        >
          <h3 className="text-xl leading-[1.2] font-bold text-neutral-900 md:text-2xl">
            {title}
          </h3>
          <ul
            className={cn(
              "list-disc space-y-0 pl-[27px] text-left text-base leading-[1.3] text-neutral-800 md:text-lg",
              centered && "lg:mx-auto lg:w-fit"
            )}
          >
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function HomeServices() {
  return (
    <section
      id="services"
      aria-label="Our services"
      className="bg-neutral-100 pt-16 md:pt-section"
    >
      <Container className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <Reveal>
            <div className="flex flex-col items-center gap-2.5">
              <div className="flex w-full items-center gap-3">
                <img
                  src="/icons/process-line-left.svg"
                  alt=""
                  className="hidden h-[3px] min-w-0 flex-1 md:block"
                />
                <p className="shrink-0 text-sm leading-[18px] font-bold whitespace-nowrap text-[#a87a1b]">
                  Our services
                </p>
                <img
                  src="/icons/process-line-right.svg"
                  alt=""
                  className="hidden h-[3px] min-w-0 flex-1 md:block"
                />
              </div>

              <div className="flex w-full flex-col items-center gap-3 text-center">
                <h2 className="text-2xl leading-[1.2] font-bold text-neutral-900 md:text-[2rem]">
                  Start your peeple success journey
                </h2>
                <p className="text-base leading-[1.3] text-neutral-800 md:text-lg">
                  Explore our core offerings and resources
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 70}
                className={cn("h-full min-h-0", service.className)}
              >
                <ServiceCard {...service} className="h-full" />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="flex flex-col items-center gap-2.5">
              <p className="text-center text-base leading-[1.3] text-neutral-800 md:text-lg">
                Still not sure where you fit? Let&apos;s talk it through
              </p>
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
            </div>
          </Reveal>
        </div>

        <HomeIndustries />
      </Container>
    </section>
  );
}
