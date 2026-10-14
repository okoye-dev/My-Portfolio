import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import Arrow from "@/components/site/Arrow";
import { SITE } from "@/config/site";

export const metadata: Metadata = { title: "Writing | Okoye Divine" };

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Engineering notes"
        title={
          <>
            Notes on <em className="italic">excellence</em>.
          </>
        }
        intro="Essays on growing as an engineer: craft, judgement, and the habits that compound."
      />
      <div className="mx-auto w-full max-w-[90rem] px-5 pt-20 md:px-10 xl:px-16">
        <p className="label pb-3 text-ink-soft">Latest field notes</p>
        <ol className="border-t border-ink/15">
          {SITE.notes.map((n, i) => (
            <li key={n.slug}>
              <Link
                href={`/blog/${n.slug}`}
                className="group grid grid-cols-[2rem_1fr_auto] items-baseline gap-x-4 border-b border-ink/15 py-5 md:grid-cols-[4rem_1fr_auto] md:gap-x-8 md:py-7"
              >
                <span className="font-num text-xs font-extralight text-ink-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[clamp(1.25rem,2.6vw,2.25rem)] font-light leading-tight tracking-[-0.02em] transition-colors duration-500 group-hover:italic group-hover:text-accent">
                  {n.title}
                </span>
                <Arrow className="h-3 w-3 self-center text-ink-soft transition-all duration-150 ease-out group-hover:translate-x-0.5 group-hover:rotate-[15deg] group-hover:text-accent" />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
