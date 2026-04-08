import { Container } from "@/components/ui/container";
import { experienceLogos, heroMetrics } from "@/lib/site-data";

const portraitStampImage =
  "https://www.figma.com/api/mcp/asset/ea1158ae-f3f3-423f-aec6-852dce6f51f4";
const badgeBaseImage = "/assets/badge-base-rotate.svg";
const badgeNumberImage = "/assets/badge-14.svg";

function HeroYearsBadge() {
  return (
    <div className="relative h-full w-full" aria-label="14 plus years building and scaling products">
      <img
        src={badgeBaseImage}
        alt=""
        width={160}
        height={160}
        className="badge-spin-clockwise absolute inset-0 h-full w-full object-contain"
        aria-hidden="true"
      />
      <img
        src={badgeNumberImage}
        alt=""
        width={62}
        height={31}
        className="absolute left-1/2 top-1/2 h-auto w-[62px] -translate-x-1/2 -translate-y-1/2 object-contain"
        aria-hidden="true"
      />
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="pb-10 pt-9 sm:pb-16 sm:pt-[3.75rem] lg:pt-[6.25rem]">
      <Container>
        <div className="grid gap-12 px-0 sm:px-6 lg:grid-cols-[minmax(0,606px)_20rem] lg:items-start lg:justify-between lg:gap-12">
          <div className="flex max-w-[606px] flex-col gap-11">
            <div className="flex flex-col gap-5">
              <p className="text-[2rem] font-normal leading-none text-moss">
                Hi, I&apos;m Karthik
              </p>
              <div className="flex flex-col items-start gap-7">
                <h1 className="max-w-[606px] font-serif text-[3rem] font-normal leading-[62px] text-ink">
                  <span className="block">I design and scale complex</span>
                  <span className="block">digital products.</span>
                </h1>
                <div className="inline-flex rounded-full bg-[#e5f4a8] px-4 pb-2 pt-2.5">
                  <p className="text-base font-semibold uppercase leading-none text-moss">
                    OPEN TO REMOTE WORK
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-base leading-[34px] text-copy">
                Built and scaled products in high-growth environments.
              </p>
              <div className="flex flex-wrap items-center gap-8 sm:gap-20">
                {experienceLogos.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-12 shrink-0 object-contain"
                    style={{ width: `${logo.width}px` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto h-[20rem] w-full max-w-[20rem] shrink-0 lg:mx-0">
            <div className="absolute right-0 top-0 h-[310px] w-[260px]">
              <img
                src={portraitStampImage}
                alt="Portrait stamp illustration of Karthik"
                width={260}
                height={310}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="absolute -bottom-3 -left-2.5 h-40 w-40 -rotate-[7deg] sm:-bottom-5">
              <HeroYearsBadge />
            </div>
          </div>
        </div>

        <div className="mt-[7.5rem] rounded-[20px] border border-white/45 bg-card/65 px-7 py-8 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl sm:px-16 sm:py-12">
          <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-10">
            {heroMetrics.map((metric) => (
              <article key={metric.title} className="shrink-0">
                <img
                  src={metric.iconSrc}
                  alt=""
                  width={48}
                  height={48}
                  className="mb-3 h-12 w-12 object-contain"
                  aria-hidden="true"
                />
                <h2 className="whitespace-nowrap text-2xl font-semibold leading-none text-ink">
                  {metric.title}
                </h2>
                <p className="mt-3 text-base leading-none text-copy">
                  {metric.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
