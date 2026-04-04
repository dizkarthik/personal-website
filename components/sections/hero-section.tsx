import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { heroMetrics } from "@/lib/site-data";

const stampImage =
  "https://www.figma.com/api/mcp/asset/c9a26b92-e369-4c7d-bb5c-2793683b064e";

export function HeroSection() {
  return (
    <section id="home" className="pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pt-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-16">
          <div className="max-w-2xl">
            <p className="font-serif text-3xl font-medium leading-none tracking-[-0.02em] text-moss sm:text-4xl">
              Hi, I&apos;m Karthik
            </p>
            <h1 className="mt-6 max-w-xl text-4xl font-medium leading-tight tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
              I design and scale complex digital products.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink/70 sm:text-lg">
              Product Design Consultant and Design Leader with 14+ years building
              and scaling fintech, AI, and high-growth digital platforms.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#works">View selected work</Button>
              <Button href="#contact" variant="secondary">
                Let&apos;s talk
              </Button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[320px] lg:mx-0">
            <div className="relative rounded-[2rem] bg-[#f3e5bd]/35 p-5 shadow-soft">
              <div className="absolute inset-4 rounded-[28px] border border-[#d7c398]/40" />
              <div className="relative overflow-hidden rounded-[28px] bg-[#f6deb0]">
                <img
                  src={stampImage}
                  alt="Portrait stamp illustration of Karthik"
                  className="h-auto w-full rotate-[-2deg] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[32px] bg-card/80 px-4 py-6 shadow-soft sm:mt-16 sm:px-8">
          <div className="grid gap-6 border-y border-line py-6 sm:grid-cols-3 sm:gap-8">
            {heroMetrics.map((metric) => (
              <article key={metric.title} className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#eef5df] text-moss">
                  <metric.icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-medium tracking-[-0.02em] text-ink">
                    {metric.title}
                  </h2>
                  <p className="mt-2 max-w-[22ch] text-sm leading-6 text-ink/65">
                    {metric.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
