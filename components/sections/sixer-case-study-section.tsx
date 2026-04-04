import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { sixerBrandImage, sixerCards, sixerHeroImage } from "@/lib/site-data";

function BrandMark() {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-[#673ef8] shadow-soft">
      <img
        src={sixerBrandImage}
        alt="Sixer brand icon"
        className="h-full w-full rounded-[2rem] object-cover"
      />
    </div>
  );
}

type SmallCardProps = {
  title: string;
  description: string;
  emphasis?: string;
  eyebrow?: string;
};

function SmallCard({ title, description, emphasis, eyebrow }: SmallCardProps) {
  return (
    <article className="rounded-[2rem] bg-cardTint p-8 shadow-soft">
      <div className="mb-10 flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/80">
        <span className="text-xl leading-none">•</span>
      </div>
      <div className="space-y-3">
        <div className="text-ink">
          <p className="text-xl font-medium leading-tight tracking-[-0.03em]">
            {title}
          </p>
          {emphasis ? (
            <p className="text-[2rem] font-medium leading-tight tracking-[-0.04em]">
              {emphasis}
            </p>
          ) : null}
          {eyebrow ? (
            <p className="text-lg font-normal leading-7 text-ink/75">
              {eyebrow}
            </p>
          ) : null}
        </div>
        <p className="max-w-[18ch] text-base leading-7 text-ink/70">
          {description}
        </p>
      </div>
    </article>
  );
}

export function SixerCaseStudySection() {
  const [leadershipCard, teamCard, volumeCard, scopeCard] = sixerCards;

  return (
    <section id="works" className="pb-24 pt-10 sm:pb-32">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-center gap-5">
            <BrandMark />
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.04em] text-ink sm:text-5xl">
                Sixer by Dream11
              </h2>
              <p className="mt-2 text-base leading-7 text-ink/70 sm:text-xl">
                The World&apos;s First Fantasy Cricket Trading Platform
              </p>
            </div>
          </div>

          <Button href="#contact" className="self-start">
            View Case Study
          </Button>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
          <article className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(180deg,#ffffff_0%,#fdfde6_100%)] p-8 shadow-soft sm:p-10">
            <div className="relative z-10 max-w-[15rem] pt-20">
              <p className="text-sm uppercase tracking-[0.25em] text-ink/50">
                Growth
              </p>
              <h3 className="mt-5 text-3xl font-medium tracking-[-0.04em] text-ink sm:text-5xl">
                0 to 4M+ Users
              </h3>
              <p className="mt-4 text-base leading-8 text-ink/70 sm:text-lg">
                Scaled from launch to millions of active traders.
              </p>
            </div>
            <img
              src={sixerHeroImage}
              alt="Sixer campaign athlete visual"
              className="pointer-events-none right-0 top-0 mt-6 h-[320px] w-full object-contain object-right-bottom sm:absolute sm:mt-0 sm:h-[420px] sm:w-[68%]"
            />
          </article>

          <SmallCard {...leadershipCard} />
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <SmallCard {...teamCard} />
          <SmallCard {...volumeCard} />
          <SmallCard {...scopeCard} />
        </div>
      </Container>
    </section>
  );
}
