import { Container } from "@/components/ui/container";
import { impactNumbers } from "@/lib/site-data";

const sixerImpactLogo = "/assets/Sixer.png";
const zohoImpactLogo = "/assets/Zoho.png";
const gtmImpactLogo = "/assets/GTM.png";

function ImpactBrandLogo({ brand }: { brand: (typeof impactNumbers)[number]["brand"] }) {
  if (brand === "zoho") {
    return (
      <div className="flex h-6 w-20 items-center justify-start overflow-hidden">
        <img
          src={zohoImpactLogo}
          alt="Zoho"
          className="h-6 w-20 object-contain object-left"
        />
      </div>
    );
  }

  if (brand === "gtm") {
    return (
      <div className="flex h-6 w-20 items-center justify-start overflow-hidden">
        <img
          src={gtmImpactLogo}
          alt="GTM"
          className="h-6 w-20 object-contain object-left"
        />
      </div>
    );
  }

  return (
    <div className="flex h-6 w-20 items-center justify-start overflow-hidden">
      <img
        src={sixerImpactLogo}
        alt="Sixer"
        className="h-6 w-20 object-contain object-left"
      />
    </div>
  );
}

function ImpactCard({
  item,
}: {
  item: (typeof impactNumbers)[number];
}) {
  return (
    <article className="flex h-[162px] w-[265px] shrink-0 flex-col justify-between rounded-[24px] border border-[#ece3d2] bg-card/65 px-8 py-7 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl">
      <div className="flex flex-col gap-1">
        <h3 className="text-[20px] font-semibold leading-[30px] text-ink">
          {item.title}
        </h3>
        <p className="text-base leading-6 text-copy">{item.subtitle}</p>
      </div>
      <ImpactBrandLogo brand={item.brand} />
    </article>
  );
}

export function ImpactNumbersSection() {
  return (
    <section className="pb-[52px] pt-2 sm:pb-[72px] sm:pt-3">
      <Container>
        <div className="flex flex-col gap-7">
          <h2 className="font-serif text-[40px] font-normal leading-[52px] text-ink">
            Impact in Numbers
          </h2>

          <div className="my-stacks-fade -mx-8 -my-8 overflow-hidden px-8 py-8 sm:-mx-10 sm:px-10">
            <div
              className="impact-numbers-ticker flex min-w-max items-center gap-5"
              aria-hidden="true"
            >
              {impactNumbers.map((item) => (
                <ImpactCard key={`${item.title}-${item.subtitle}`} item={item} />
              ))}
              {impactNumbers.map((item) => (
                <ImpactCard
                  key={`${item.title}-${item.subtitle}-duplicate`}
                  item={item}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
