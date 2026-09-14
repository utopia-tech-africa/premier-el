import type { ReactNode } from "react";
import {
  IconChartLineUp,
  IconHandshake,
  IconMedal,
  IconShieldCheck,
} from "@/assets";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/layout";
import { HomeMissionStatement } from "../home-mission-statement";

const topPrinciples = [
  {
    title: "Excellence",
    body: "Good enough isn’t. We hold ourselves (and the work) to a high bar.",
    icon: <IconMedal />,
  },
  {
    title: "Integrity",
    body: "We say what we mean and do what we say no surprises, no spin",
    icon: <IconShieldCheck />,
  },
] as const;

const bottomPrinciples = [
  {
    title: "Client Partnership",
    body: "We’re in it with you, not observing from the sidelines. Your win is our win.",
    icon: <IconHandshake />,
  },
  {
    title: "Results Orientation",
    body: "Advice is nice. Outcomes are the point. We optimize for what changes afterward.",
    icon: <IconChartLineUp />,
  },
  {
    title: "Innovation",
    body: "We're not afraid to challenge the \"way it's always been done.\"",
    icon: <IconHandshake />,
  },
] as const;

function PrincipleCard({
  title,
  body,
  icon,
  className,
}: {
  title: string;
  body: string;
  icon: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 ${className ?? ""}`}>
      {icon}
      <h3 className="text-xl leading-[1.2] font-black text-neutral-900 md:text-2xl">
        {title}
      </h3>
      <p className="max-w-[306px] text-base leading-[1.3] text-neutral-800">
        {body}
      </p>
    </div>
  );
}

export function HomeOurPrinciples() {
  return (
    <section
      id="principles"
      aria-label="Principles we live by"
      className="bg-neutral-100 pt-16 md:pt-section"
    >
      <Container className="flex flex-col gap-16 md:gap-[58px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-[95px]">
          <Reveal>
            <h2 className="shrink-0 text-2xl leading-[1.2] font-bold whitespace-nowrap text-neutral-900 md:text-3xl">
              Principles we live by
            </h2>
          </Reveal>

          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-[38px]">
              {topPrinciples.map((item, index) => (
                <Reveal key={item.title} delay={80 + index * 70}>
                  <PrincipleCard {...item} />
                </Reveal>
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {bottomPrinciples.map((item, index) => (
                <Reveal key={item.title} delay={200 + index * 70}>
                  <PrincipleCard {...item} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={120}>
          <HomeMissionStatement />
        </Reveal>
      </Container>
    </section>
  );
}
