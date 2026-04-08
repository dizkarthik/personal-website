import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { sixerBrandImage, sixerCards, sixerHeroImage } from "@/lib/site-data";

const exactIcons = {
  badgeA: "https://www.figma.com/api/mcp/asset/4863153f-74f7-4510-8e61-5a912d8fc622",
  badgeB: "https://www.figma.com/api/mcp/asset/a78e1dce-d38c-4af5-b6b8-d74507c7a3f0",
  star: "https://www.figma.com/api/mcp/asset/3b88de22-833a-47d6-87d8-95ccd2f6194b",
  coinOutline: "https://www.figma.com/api/mcp/asset/bd1d407c-ef4a-4e9c-97e2-fe119e49205a",
  coinLine: "https://www.figma.com/api/mcp/asset/78adebe4-3b14-4f53-9593-e29b0e12118c",
  coinMark: "https://www.figma.com/api/mcp/asset/84fd1789-8857-451e-ad08-aee8b88862b4",
  loop: "https://www.figma.com/api/mcp/asset/a751314a-996f-499e-bb72-9176ef399baf",
};

function BrandMark() {
  return (
    <div className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-[1.75rem] bg-[#673ef8]">
      <img
        src={sixerBrandImage}
        alt="Sixer brand icon"
        className="h-full w-full rounded-[1.75rem] object-cover"
      />
    </div>
  );
}

type SmallCardProps = {
  icon: "badge" | "star" | "coin" | "loops";
  title: string;
  description: string;
  emphasis?: string;
  eyebrow?: string;
};

function CardIcon({ icon }: Pick<SmallCardProps, "icon">) {
  if (icon === "badge") {
    return (
      <div className="relative h-10 w-10">
        <img src={exactIcons.badgeB} alt="" className="absolute inset-[8.33%_25%_41.67%_25%] h-1/2 w-1/2" />
        <img src={exactIcons.badgeA} alt="" className="absolute inset-[53.7%_29.17%_8.33%_29.17%] h-[37.97%] w-[41.66%]" />
      </div>
    );
  }

  if (icon === "star") {
    return (
      <img src={exactIcons.star} alt="" className="h-10 w-10" />
    );
  }

  if (icon === "coin") {
    return (
      <div className="relative h-10 w-10">
        <img src={exactIcons.coinOutline} alt="" className="absolute inset-[8.35%_8.35%_8.32%_8.29%] h-[83.33%] w-[83.36%]" />
        <img src={exactIcons.coinLine} alt="" className="absolute left-1/3 right-1/3 top-1/3 h-[1px] w-[33.34%]" />
        <img src={exactIcons.coinLine} alt="" className="absolute bottom-1/2 left-1/3 right-1/3 h-[1px] w-[33.34%]" />
        <img src={exactIcons.coinMark} alt="" className="absolute inset-[33.33%_45.83%_29.17%_33.33%] h-[37.5%] w-[20.84%]" />
      </div>
    );
  }

  return (
    <div className="relative h-10 w-10">
      <img src={exactIcons.loop} alt="" className="absolute inset-[8.33%_33.33%_33.33%_8.33%] h-[58.34%] w-[58.34%]" />
      <img src={exactIcons.loop} alt="" className="absolute inset-[33.33%_8.33%_8.33%_33.33%] h-[58.34%] w-[58.34%]" />
    </div>
  );
}

function SmallCard({ icon, title, description, emphasis, eyebrow }: SmallCardProps) {
  const isVolume = Boolean(eyebrow);

  return (
    <article className="min-h-80 rounded-[20px] border border-white/45 bg-card/65 px-8 pb-10 pt-8 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl">
      <div className="mb-12 flex items-center justify-end text-moss">
        <CardIcon icon={icon} />
      </div>
      <div className="space-y-3 text-ink">
        <div className="text-ink">
          <p className={`${isVolume ? "text-[1.75rem]" : "text-base"} font-medium leading-tight`}>
            {title}
          </p>
          {emphasis ? (
            <p className="mt-1 text-[1.75rem] font-medium leading-tight">
              {emphasis}
            </p>
          ) : null}
          {eyebrow ? (
            <p className="mt-3 text-base font-normal leading-6 text-copy">
              {eyebrow}
            </p>
          ) : null}
        </div>
        <p className={`${isVolume ? "max-w-[18ch]" : "max-w-[17ch]"} text-base leading-6 text-copy`}>
          {description}
        </p>
      </div>
    </article>
  );
}

export function SixerCaseStudySection() {
  const [leadershipCard, teamCard, volumeCard, scopeCard] = sixerCards;

  return (
    <section id="works" className="pb-16 pt-6 sm:pb-20">
      <Container>
        <div className="flex flex-col gap-8 px-0 sm:px-0 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <BrandMark />
            <div>
              <h2 className="text-[2.5rem] font-medium leading-none text-ink">
                Sixer by Dream11
              </h2>
              <p className="mt-3 text-base leading-none text-copy">
                The World&apos;s First Fantasy Cricket Trading Platform
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-center">
            <Button href="mailto:karthiklm92@gmail.com">View Case Study</Button>
            <p className="text-xs leading-none text-ink">Most Recent</p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,2.1fr)_minmax(20rem,1fr)]">
          <article className="relative min-h-80 overflow-hidden rounded-[20px] border border-white/45 bg-card/65 p-8 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl">
            <div className="relative z-10 max-w-[16rem] pt-20">
              <p className="text-base leading-none text-ink">↗</p>
              <h3 className="mt-4 text-[1.75rem] font-medium leading-none text-ink">
                0 to 4M+ Users
              </h3>
              <p className="mt-3 text-base leading-6 text-copy">
                Scaled from launch to millions of active traders.
              </p>
            </div>
            <img
              src={sixerHeroImage}
              alt="Sixer campaign athlete visual"
              className="pointer-events-none right-[-2rem] top-[-6rem] mt-6 h-[19rem] w-full object-contain object-right-bottom sm:absolute sm:mt-0 sm:h-[50rem] sm:w-[70%]"
            />
          </article>

          <SmallCard icon="badge" {...leadershipCard} />
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <SmallCard icon="star" {...teamCard} />
          <SmallCard icon="coin" {...volumeCard} />
          <SmallCard icon="loops" {...scopeCard} />
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="mailto:karthiklm92@gmail.com" variant="secondary">
            View More Case Studies
          </Button>
        </div>
      </Container>
    </section>
  );
}
