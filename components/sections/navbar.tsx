import Link from "next/link";

import { Container } from "@/components/ui/container";
import { LogoMark } from "@/components/ui/logo-mark";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-data";

export function Navbar() {
  return (
    <header className="pt-6 sm:pt-8">
      <Container>
        <div className="flex flex-col gap-4 rounded-[28px] bg-white/60 px-5 py-4 shadow-soft backdrop-blur md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" aria-label="Go to homepage">
              <LogoMark />
            </Link>
            <div className="flex items-center gap-2 md:hidden">
              <Button href="/resume.pdf" variant="secondary" className="px-4 py-2 text-xs">
                Resume
              </Button>
              <Button href="#contact" className="px-4 py-2 text-xs">
                Book
              </Button>
            </div>
          </div>

          <nav aria-label="Primary navigation" className="overflow-x-auto">
            <ul className="flex min-w-max items-center gap-6 text-sm text-ink/70 sm:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button href="/resume.pdf" variant="secondary">
              Download Resume
            </Button>
            <Button href="#contact">Book a Call</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
