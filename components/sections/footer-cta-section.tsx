import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navLinks } from "@/lib/site-data";

export function FooterCtaSection() {
  return (
    <footer
      id="contact"
      className="border-t border-line/80 bg-[linear-gradient(180deg,rgba(255,250,241,0)_0%,rgba(246,239,226,0.85)_100%)] pb-10 pt-16 sm:pb-14 sm:pt-24"
    >
      <Container>
        <div className="rounded-[2.5rem] bg-[linear-gradient(180deg,#fffdf8_0%,#f3ecd9_100%)] px-6 py-10 shadow-soft sm:px-10 sm:py-14 lg:flex lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-serif text-3xl font-medium leading-none tracking-[-0.02em] text-moss sm:text-4xl">
              Let&apos;s Work Together
            </p>
            <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl">
              Building thoughtful products, teams, and systems with real momentum.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink/70 sm:text-lg">
              If you&apos;re shaping a new product, scaling a design function, or
              need senior product design leadership, I&apos;d love to talk.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 lg:mt-0 lg:items-end">
            <Button href="mailto:karthiklm92@gmail.com">Book a Call</Button>
            <Button href="/resume.pdf" variant="secondary">
              Download Resume
            </Button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-sm text-ink/55 sm:flex-row sm:items-center sm:justify-between">
          <p>Karthik. Product Design Leader.</p>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-4 sm:gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
