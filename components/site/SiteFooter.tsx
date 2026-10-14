import Link from "next/link";
import { SITE } from "@/config/site";
import Pill from "./Pill";

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mx-auto w-full max-w-[90rem] px-5 pb-10 pt-32 md:px-10 xl:px-16"
    >
      <div className="rounded-[2rem] bg-ink px-6 py-14 text-paper md:rounded-[2.5rem] md:px-14 md:py-24">
        <p className="label text-paper/60">Contact</p>
        <h2 className="mt-6 font-display text-orange-light text-[clamp(2.75rem,8vw,8rem)] font-light leading-[0.98] tracking-[-0.03em]">
          Have something <em className="italic">worth building?</em>
        </h2>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center rounded-full bg-paper px-6 py-3 text-[0.95rem] text-orange-deep transition-colors duration-500 hover:bg-cream"
          >
            {SITE.email}
          </a>
          {SITE.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-paper/25 px-6 py-3 text-[0.95rem] transition-colors duration-500 hover:border-paper"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[0.85rem] text-ink-soft">
        <p>© {new Date().getFullYear()}</p>
        <ul className="flex gap-6">
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
