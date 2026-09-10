import { Container } from "@/components/layout";

const industries = [
  "Telecommunications",
  "Public Sector",
  "Manufacturing",
  "Startups",
  "Financial Services",
  "Education",
  "SMEs",
  "NGOs",
  "FMCG",
] as const;

export function HomeIndustries() {
  return (
    <section
      id="industries"
      aria-label="Industries we serve"
      className="bg-neutral-100 py-12 md:py-16"
    >
      <Container className="flex flex-col items-center gap-6">
        <h2 className="max-w-[63.75rem] text-center text-2xl leading-[1.2] font-bold text-neutral-900 md:text-[2rem]">
          Different industries, same principle: growth doesn&apos;t happen by
          accident.
        </h2>

        <ul className="flex max-w-[64.25rem] flex-wrap items-start justify-center gap-2.5">
          {industries.map((industry) => (
            <li
              key={industry}
              className="rounded-[32px] border border-neutral-200 px-6 py-3 text-center text-base leading-6 text-neutral-1000"
            >
              {industry}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
