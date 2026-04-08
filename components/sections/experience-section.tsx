import { Container } from "@/components/ui/container";
import { experienceLogos } from "@/lib/site-data";

function scallopedSealPath(cx: number, cy: number, innerRadius: number, outerRadius: number, scallops: number) {
  const points: string[] = [];

  for (let i = 0; i < scallops * 2; i += 1) {
    const angle = (Math.PI * i) / scallops - Math.PI / 2;
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    points.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }

  return `${points.join(" ")} Z`;
}

function BadgeSeal() {
  const outerPath = scallopedSealPath(200, 200, 158, 168, 22);

  return (
    <div className="mx-auto h-[13.75rem] w-[13.75rem] md:h-[19.5rem] md:w-[19.5rem]">
      <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
        <path d={outerPath} fill="#eef2c9" stroke="#3d8427" strokeWidth="3" />
        <circle cx="200" cy="200" r="118" fill="none" stroke="#3d8427" strokeWidth="3" />
        <circle cx="200" cy="200" r="99" fill="#fffaf1" stroke="#3d8427" strokeWidth="2" />

        <defs>
          <path
            id="badgeTextPath"
            d="
              M 200,200
              m -140,0
              a 140,140 0 1,1 280,0
              a 140,140 0 1,1 -280,0
            "
          />
        </defs>

        <text
          fill="#3d8427"
          fontSize="21"
          letterSpacing="6.5"
          fontFamily="Avenir Next, Avenir, Segoe UI, sans-serif"
        >
          <textPath href="#badgeTextPath" startOffset="50%" textAnchor="middle">
            YEARS BUILDING &amp; SCALING PRODUCTS * YEARS BUILDING &amp; SCALING PRODUCTS *
          </textPath>
        </text>

        <text
          x="200"
          y="220"
          textAnchor="middle"
          fill="#3d8427"
          fontSize="74"
          fontFamily="DM Serif Text, Iowan Old Style, Georgia, serif"
          fontWeight="600"
        >
          14+
        </text>
      </svg>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="about" className="pb-14 pt-7 sm:pb-20 lg:pt-12">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[20rem_1fr] lg:items-center lg:gap-28">
          <BadgeSeal />

          <div className="max-w-[30.75rem]">
            <p className="max-w-[27.5rem] text-[2rem] font-medium leading-[1.35] tracking-[-0.03em] text-ink">
              Built and scaled products in high-growth environments.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-10 md:gap-16">
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
      </Container>
    </section>
  );
}
