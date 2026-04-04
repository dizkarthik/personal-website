import { Container } from "@/components/ui/container";
import { experienceLogos } from "@/lib/site-data";

function BadgeSeal() {
  return (
    <div className="relative mx-auto flex h-56 w-56 items-center justify-center md:h-72 md:w-72">
      <div className="absolute inset-0 rounded-full border-2 border-moss/80 bg-[#eef2c9]" />
      <div className="absolute inset-[14px] rounded-full border border-moss/70 border-dashed" />
      <div className="absolute inset-[34px] rounded-full border border-moss/60" />
      <div className="absolute inset-[48px] rounded-full border border-moss/50 bg-canvas/70" />
      <div className="relative text-center text-moss">
        <p className="font-serif text-5xl font-semibold leading-none md:text-6xl">
          14+
        </p>
      </div>
      <p className="absolute inset-x-6 top-6 text-center text-[10px] uppercase tracking-[0.42em] text-moss/80 md:text-xs">
        Years Building &amp; Scaling Products
      </p>
      <div className="absolute inset-0 rounded-full [mask-image:radial-gradient(circle,transparent_58%,black_58%)] before:absolute before:inset-0 before:rounded-full before:bg-[conic-gradient(from_0deg,transparent_0deg,transparent_14deg,#eef2c9_14deg,#eef2c9_22deg,transparent_22deg,transparent_36deg,#eef2c9_36deg,#eef2c9_44deg,transparent_44deg,transparent_58deg,#eef2c9_58deg,#eef2c9_66deg,transparent_66deg,transparent_80deg,#eef2c9_80deg,#eef2c9_88deg,transparent_88deg,transparent_102deg,#eef2c9_102deg,#eef2c9_110deg,transparent_110deg,transparent_124deg,#eef2c9_124deg,#eef2c9_132deg,transparent_132deg,transparent_146deg,#eef2c9_146deg,#eef2c9_154deg,transparent_154deg,transparent_168deg,#eef2c9_168deg,#eef2c9_176deg,transparent_176deg,transparent_190deg,#eef2c9_190deg,#eef2c9_198deg,transparent_198deg,transparent_212deg,#eef2c9_212deg,#eef2c9_220deg,transparent_220deg,transparent_234deg,#eef2c9_234deg,#eef2c9_242deg,transparent_242deg,transparent_256deg,#eef2c9_256deg,#eef2c9_264deg,transparent_264deg,transparent_278deg,#eef2c9_278deg,#eef2c9_286deg,transparent_286deg,transparent_300deg,#eef2c9_300deg,#eef2c9_308deg,transparent_308deg,transparent_322deg,#eef2c9_322deg,#eef2c9_330deg,transparent_330deg,transparent_344deg,#eef2c9_344deg,#eef2c9_352deg,transparent_352deg)]" />
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="about" className="pb-16 pt-6 sm:pb-24 lg:pt-10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-center lg:gap-20">
          <BadgeSeal />

          <div className="max-w-[32rem]">
            <p className="max-w-md text-2xl font-medium leading-snug tracking-[-0.03em] text-ink sm:text-3xl">
              Built and scaled products in high-growth environments.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8 md:gap-14">
              {experienceLogos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className={logo.className}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
