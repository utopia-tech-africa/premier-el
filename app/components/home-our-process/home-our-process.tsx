import { Reveal } from "@/components/reveal";
import { Container } from "@/components/layout";

const processSteps = [
  {
    number: "1",
    title: "Diagnose the real blockers",
    body: "We cut through the noise to find what’s actually holding growth back, not just the symptoms.",
  },
  {
    number: "2",
    title: "Design a focused, executable plan",
    body: "No 80-slide decks. Just a clear roadmap your team can act on without drama.",
  },
  {
    number: "3",
    title: "Build capability, not just strategy",
    body: "We train and coach your people so they can run with the plan long after we’re gone.",
  },
  {
    number: "4",
    title: "Track, learn, and lock in results",
    body: "We measure what matters, adjust fast, and stay until the outcomes actually stick.",
  },
] as const;

export function HomeOurProcess() {
  return (
    <section
      id="process"
      aria-label="Our process"
      className="bg-neutral-100 pt-16 md:pt-section"
    >
      <Container className="flex flex-col gap-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <img
              src="/icons/process-line-left.svg"
              alt=""
              className="hidden h-[3px] min-w-0 flex-1 md:block"
            />
            <p className="shrink-0 text-sm leading-[18px] font-bold whitespace-nowrap text-[#a87a1b]">
              Our process
            </p>
            <img
              src="/icons/process-line-right.svg"
              alt=""
              className="hidden h-[3px] min-w-0 flex-1 md:block"
            />
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 70}>
              <div className="relative flex flex-col gap-3 pt-6">
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-0 right-0 text-[7rem] leading-none font-black opacity-60 select-none md:text-[8rem] xl:text-[11rem]"
                  style={{
                    backgroundImage:
                      "linear-gradient(98deg, rgba(142,142,142,0.3) 0%, rgba(102,102,102,0.3) 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {step.number}
                </span>
                <h3 className="relative text-xl leading-[1.2] font-bold text-neutral-900 md:text-2xl">
                  {step.title}
                </h3>
                <p className="relative text-base leading-[1.3] text-neutral-700">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
