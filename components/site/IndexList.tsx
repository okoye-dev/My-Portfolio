import Link from "next/link";
import type { ReactNode } from "react";
import { SITE } from "@/config/site";
import { cn } from "@/utils";
import Arrow from "./Arrow";

interface Entry {
  href: string;
  kicker: string;
  title: ReactNode;
}

/** The old section headers, now one line each. Every row is a link. */
const ENTRIES: Entry[] = [
  {
    href: "/projects",
    kicker: "Selected work",
    title: (
      <>
        Things I have <em className="italic">built</em>.
      </>
    ),
  },
  {
    href: "/blog",
    kicker: "Engineering notes",
    title: (
      <>
        The road to engineering <em className="italic">excellence</em>.
      </>
    ),
  },
  {
    href: "/experience",
    kicker: "Experience",
    title: (
      <>
        Where I have <em className="italic">worked</em>.
      </>
    ),
  },
  {
    href: "/story",
    kicker: "Story",
    title: (
      <>
        From <em className="italic text-accent">there</em> to{" "}
        <em className="italic">here</em>.
      </>
    ),
  },
  {
    href: "/personal",
    kicker: "Personal",
    title: (
      <>
        Outside of <em className="italic">work</em>.
      </>
    ),
  },
  {
    href: `mailto:${SITE.email}`,
    kicker: "Contact",
    title: (
      <>
        Have something <em className="italic">worth building?</em>
      </>
    ),
  },
];

export default function IndexList() {
  return (
    <nav
      aria-label="Index"
      className="mx-auto mt-10 w-full max-w-[90rem] px-5 md:mt-14 md:px-10 xl:px-16"
    >
      <div className="flex items-baseline justify-between pb-3 text-ink-soft">
        <span className="label">Index</span>
        <span className="label font-num font-extralight">
          {String(ENTRIES.length).padStart(2, "0")} entries
        </span>
      </div>
      <ol className="border-t border-ink/15">
        {ENTRIES.map((e, i) => {
          const cls =
            "group grid grid-cols-[1.75rem_1fr_auto] items-baseline gap-x-3 border-b border-ink/15 py-2.5 transition-colors duration-300 md:grid-cols-[3rem_1fr_auto] md:gap-x-6 md:py-3 lg:grid-cols-[3rem_1fr_12rem_auto]";
          const inner = (
            <>
              <span className="font-num text-[0.7rem] font-extralight text-ink-soft md:text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "whitespace-nowrap font-display text-[clamp(0.85rem,3.3vw,1.3rem)] font-light leading-[1.1] tracking-[-0.02em] transition-colors duration-500 group-hover:italic group-hover:text-accent",
                  "text-ink",
                )}
              >
                {e.title}
              </span>
              <span className="label hidden whitespace-nowrap text-ink-soft lg:block">
                {e.kicker}
              </span>
              <Arrow className="h-3 w-3 self-center text-ink-soft transition-all duration-150 ease-out group-hover:translate-x-0.5 group-hover:rotate-[15deg] group-hover:text-accent" />
            </>
          );
          return (
            <li key={e.href}>
              {e.href.startsWith("mailto:") ? (
                <a href={e.href} className={cls}>
                  {inner}
                </a>
              ) : (
                <Link href={e.href} className={cls}>
                  {inner}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
