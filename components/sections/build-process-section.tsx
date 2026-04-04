import { Container } from "@/components/ui/container";
import { buildSteps } from "@/lib/site-data";

export function BuildProcessSection() {
  return (
    <section className="pb-20 pt-10 sm:pb-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-20">
          <div className="lg:pt-24">
            <h2 className="max-w-[12rem] text-4xl font-medium leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
              How I Build Products
            </h2>
            <p className="mt-6 max-w-sm text-base leading-8 text-ink/70">
              From early ambiguity to scale-stage complexity, I focus on
              clarity, systems, and measurable impact.
            </p>
          </div>

          <div className="relative lg:pl-14">
            <div className="absolute left-0 top-2 hidden h-[26rem] w-2 rounded-full bg-[#efe1cd] lg:block" />
            <div className="space-y-10">
              {buildSteps.map((step) => (
                <article key={step.title} className="max-w-xl">
                  <h3 className="text-2xl font-medium tracking-[-0.02em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-ink/70">
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
