import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { credentialCards } from "@/lib/site-data";

type CardTone = "warm" | "plain" | "soft" | "accent";

const toneClasses: Record<CardTone, string> = {
  warm: "bg-card/65",
  plain: "bg-card/65",
  soft: "bg-card/65",
  accent: "bg-card/65",
};

export function CredentialsSection() {
  return (
    <section className="pb-24 pt-4 sm:pb-32">
      <Container>
        <div className="flex flex-col gap-6 sm:max-w-2xl">
          <p className="font-serif text-3xl font-medium leading-none tracking-[-0.02em] text-moss sm:text-4xl">
            Credentials
          </p>
          <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] text-ink sm:text-5xl">
            A design leadership profile built for zero-to-one and scale.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-ink/70 sm:text-base">
            A compact snapshot of the kind of product, team, and business problems
            I solve best.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {credentialCards.map((card) => (
            <article
              key={card.title}
              className={cn(
                "rounded-[2rem] border border-white/45 p-8 shadow-[0_18px_50px_rgba(33,35,41,0.06)] backdrop-blur-xl",
                toneClasses[card.tone as CardTone],
                card.span,
              )}
            >
              <p className="text-sm uppercase tracking-[0.24em] text-ink/45">
                {card.eyebrow}
              </p>
              <h3 className="mt-6 text-2xl font-medium leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
                {card.title}
              </h3>
              <p className="mt-4 max-w-[26ch] text-base leading-8 text-ink/68">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Button href="#contact">Start a conversation</Button>
        </div>
      </Container>
    </section>
  );
}
