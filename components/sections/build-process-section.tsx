import { Container } from "@/components/ui/container";
import { buildSteps } from "@/lib/site-data";

export function BuildProcessSection() {
  return (
    <section id="process" className="pb-20 pt-8 sm:pb-24 sm:pt-14">
      <Container>
        <div className="grid gap-12 px-0 sm:px-6 lg:grid-cols-[26.25rem_1fr] lg:gap-[4.5rem]">
          <div>
            <h2 className="max-w-[18rem] font-serif text-[2.5rem] font-normal leading-[1.3] text-ink">
              How I Build<br />Products
            </h2>
            <p className="mt-6 max-w-[26rem] text-base leading-7 text-copy">
              From early ambiguity to scale-stage complexity, I focus on
              clarity, systems, and measurable impact.
            </p>
          </div>

          <div className="relative lg:pl-12">
            <div className="build-line-gradient absolute left-0 top-0 hidden h-[30rem] w-2 rounded-full lg:block" />
            <div className="space-y-9">
              {buildSteps.map((step) => (
                <article key={step.title} className="max-w-xl">
                  <h3 className="text-[20px] font-semibold leading-none text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[29rem] text-base leading-7 text-copy">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
