import Link from "next/link";
import { SITE } from "@/config/site";
import Pill from "./Pill";

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mx-auto w-full max-w-[90rem] px-5 pb-4 pt-14 md:px-10 md:pb-8 md:pt-24 xl:px-16"
    >
      <div className="rounded-[1.5rem] bg-ink px-5 py-5 text-paper md:rounded-[1.75rem] md:px-10 md:py-10">
        <p className="label text-paper/60">Contact</p>
        <h2 className="mt-3 font-display md:mt-4 text-orange-light text-[clamp(1.6rem,3.4vw,3rem)] font-light leading-[0.98] tracking-[-0.03em]">
          Have something <em className="italic">worth building?</em>
        </h2>
        <div className="mt-6 flex flex-wrap items-center gap-2 md:mt-8">
          <Pill href={`mailto:${SITE.email}`} variant="paper">
            {SITE.email}
          </Pill>
          {SITE.socials.map((s) => (
            <Pill key={s.label} href={s.href} variant="line">
              {s.label}
            </Pill>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-[0.85rem] text-ink-soft md:mt-8">
        <Link href="/" className="transition-colors hover:text-accent">
          © {new Date().getFullYear()}
        </Link>
        <ul className="hidden gap-6 sm:flex">
          {SITE.nav.slice(1, 5).map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className="transition-colors hover:text-accent"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
